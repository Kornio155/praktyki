import { useEffect, useRef, useState, useCallback } from "react";
import "../styleSheets/BeforeAfter.css";

// images (bez zmian)
import aleks from "../assets/przedIPo/aleks.png";
import alicja from "../assets/przedIPo/alicja.png";
import andrzej from "../assets/przedIPo/andrzej.jpg";
import adam from "../assets/przedIPo/adam.jpg";
import aga from "../assets/przedIPo/aga.png";
import ania from "../assets/przedIPo/ania.png";
import darek from "../assets/przedIPo/darek.png";
import gosia from "../assets/przedIPo/gosia.png";
import kamila from "../assets/przedIPo/kamila.png";
import natalia from "../assets/przedIPo/natalia.jpg";

const items = [
    { id: 1, text: "Aleks", image: aleks },
    { id: 2, text: "Alicja - efekty w niecały rok", image: alicja },
    { id: 3, text: "Andrzej -63 => 67 kg 9% tkanki tłuszczowej", image: andrzej },
    { id: 4, text: "Adam -12 kg w 4 miesiące", image: adam },
    { id: 5, text: "Aga -10% tkanki tłuszczowej -10 kg w 3 miesiące", image: aga },
    { id: 6, text: "Ania - rekompozycja 12% tkanki tłuszczowej", image: ania },
    { id: 7, text: "Darek - odmłodzony o 18 lat", image: darek },
    { id: 8, text: "Gosia - rekompozycja ciała", image: gosia },
    { id: 9, text: "Kamila -6 kg / -30 cm", image: kamila },
    { id: 10, text: "Natalia", image: natalia }
];

const TRANSITION = 650;

export default function BeforeAfter() {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const touchStartX = useRef<number | null>(null);

    // 🔥 NOWE: zapamiętanie kierunku
    const directionRef = useRef<1 | -1>(1);

    const [index, setIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [loaded, setLoaded] = useState<Record<number, boolean>>({});

    const getIndex = (i: number) =>
        (i + items.length) % items.length;

    const move = (direction: 1 | -1) => {
        if (animating) return;

        const track = trackRef.current;
        if (!track) return;

        directionRef.current = direction; // 🔥 ZAPIS KIERUNKU

        setAnimating(true);

        track.style.transition = `transform ${TRANSITION}ms cubic-bezier(0.22, 1, 0.36, 1)`;
        track.style.transform = `translateX(${direction * -36}%)`;
    };

    const commit = () => {
        const dir = directionRef.current;

        setIndex((prev) => getIndex(prev + dir));

        const track = trackRef.current;
        if (!track) return;

        track.style.transition = "none";
        track.style.transform = "translateX(0%)";

        requestAnimationFrame(() => {
            setAnimating(false);
        });
    };

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const onEnd = () => {
            if (!animating) return;
            commit(); // 🔥 teraz zawsze poprawny kierunek
        };

        track.addEventListener("transitionend", onEnd);
        return () => track.removeEventListener("transitionend", onEnd);
    }, [animating]);

    const next = useCallback(() => move(1), [animating]);
    const prev = useCallback(() => move(-1), [animating]);

    useEffect(() => {
        if (hovered) return;

        const id = setInterval(() => next(), 3000);
        return () => clearInterval(id);
    }, [hovered]);

    const visible = [
        items[getIndex(index - 2)],
        items[getIndex(index - 1)],
        items[getIndex(index)],
        items[getIndex(index + 1)],
        items[getIndex(index + 2)]
    ];

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;

        const diff = e.changedTouches[0].clientX - touchStartX.current;

        if (Math.abs(diff) > 50) {
            diff > 0 ? prev() : next();
        }

        touchStartX.current = null;
    };

    const getPositionClass = (i: number) => {
        if (i === 2) return "center";
        if (i === 1 || i === 3) return "adjacent";
        return "outer";
    };

    return (
        <section className="before-after">
            <h2>Efekty</h2>

            <div className="ba-wrapper">
                <button className="ba-arrow left" onClick={prev}>❮</button>

                <div
                    className="ba-viewport"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="ba-track" ref={trackRef}>
                        {visible.map((item, i) => (
                            <div key={`${item.id}-${i}`} className={`ba-item ${getPositionClass(i)}`}>
                                <div
                                    className="ba-image-wrapper"
                                    onClick={() => setSelectedImage(item.image)}
                                    onMouseEnter={() => setHovered(true)}
                                    onMouseLeave={() => setHovered(false)}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.text}
                                        draggable={false}
                                        onLoad={() =>
                                            setLoaded((p) => ({ ...p, [item.id]: true }))
                                        }
                                        style={{ opacity: loaded[item.id] ? 1 : 0 }}
                                    />

                                    <div className="ba-overlay">
                                        <p>
                                            {item.text.split(" -").map((t, i) => (
                                                <span key={i}>
                                                    {t}
                                                    <br />
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="ba-arrow right" onClick={next}>❯</button>
            </div>

            {selectedImage && (
                <div className="ba-modal" onClick={() => setSelectedImage(null)}>
                    <div className="ba-modal-content">
                        <img src={selectedImage} alt="preview" />
                    </div>
                </div>
            )}
        </section>
    );
}