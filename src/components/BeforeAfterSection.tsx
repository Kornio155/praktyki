import { useEffect, useRef, useState, useCallback } from "react";
import "../styleSheets/BeforeAfter.css";

// import zdjęć
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
    { id: 2, text: "Alicja • efekty w niecały rok", image: alicja },
    { id: 3, text: "Andrzej • 63 -> 67 kg 9% tkanki tłuszczowej", image: andrzej },
    { id: 4, text: "Adam • -12 kg w 4 miesiące", image: adam },
    { id: 5, text: "Aga • -10% tkanki tłuszczowej -10 kg z tłuszczyku w 3 miesiące", image: aga },
    { id: 6, text: "Ania • rekompozycja 12% tkanki tłuszczowej z ud", image: ania },
    { id: 7, text: "Darek • odmłodzony o 18 lat.", image: darek },
    { id: 8, text: "G. • Rekompozycja ciała", image: gosia },
    { id: 9, text: "K. • -6 kg łącznie -30cm w obwodach", image: kamila },
    { id: 10, text: "N.", image: natalia }
];

export default function BeforeAfter() {
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const touchStartX = useRef<number | null>(null);

    const [hovered, setHovered] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [loaded, setLoaded] = useState<Record<number, boolean>>({});
    const [index, setIndex] = useState(0);

    const getItem = useCallback(
        (i: number) => items[(i + items.length) % items.length],
        []
    );

    const nextSlide = useCallback(() => {
        setIndex((prev) => (prev + 1) % items.length);
    }, []);

    const prevSlide = useCallback(() => {
        setIndex((prev) => (prev - 1 + items.length) % items.length);
    }, []);

    useEffect(() => {
        if (hovered) return;

        intervalRef.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length);
        }, 3000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [hovered]);

    useEffect(() => {
        items.forEach((item) => {
            const img = new Image();
            img.src = item.image;
        });
    }, []);

    const visible = [
        getItem(index - 2),
        getItem(index - 1),
        getItem(index),
        getItem(index + 1),
        getItem(index + 2),
    ];

    const getPositionClass = (i: number) => {
        if (i === 2) return "center";
        if (i === 1 || i === 3) return "adjacent";
        return "outer";
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;

        const diff = e.changedTouches[0].clientX - touchStartX.current;

        if (Math.abs(diff) > 50) {
            diff > 0 ? prevSlide() : nextSlide();
        }

        touchStartX.current = null;
    };

    return (
        <section id="before-after" className="before-after">
            <h2>Efekty</h2>

            <div
                className="ba-wrapper"

            >
                <button className="ba-arrow left" onClick={prevSlide}>
                    ❮
                </button>

                <div
                    className="ba-viewport"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="ba-track">
                        {visible.map((item, i) => (
                            <div
                                key={`${item.id}-${i}`}
                                className={`ba-item ${getPositionClass(i)}`}
                            >
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
                                            setLoaded((prev) => ({
                                                ...prev,
                                                [item.id]: true,
                                            }))
                                        }
                                        style={{
                                            opacity: loaded[item.id] ? 1 : 0,
                                        }}
                                    />

                                    <div className="ba-overlay">
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="ba-arrow right" onClick={nextSlide}>
                    ❯
                </button>
            </div>

            {selectedImage && (
                <div
                    className="ba-modal"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="ba-modal-content">
                        <img src={selectedImage} alt="preview" />
                    </div>
                </div>
            )}
        </section>
    );
}