import { useEffect, useRef, useState, useCallback } from "react";
import "../styleSheets/BeforeAfter.css";

const items = [
    { id: 1, text: "Jan, 28 lat – redukcja 8 tygodni" },
    { id: 2, text: "Anna, 32 lata – masa mięśniowa" },
    { id: 3, text: "Marek, 25 lat – recomposition" },
    { id: 4, text: "Kasia, 30 lat – powrót do formy" },
    { id: 5, text: "Tomek, 40 lat – redukcja brzucha" },
    { id: 6, text: "Ewa, 27 lat – fitness" },
    { id: 7, text: "Piotr, 35 lat – transformacja" },
    { id: 8, text: "Ola, 29 lat – sylwetka" },
    { id: 9, text: "Kamil, 31 lat – masa" },
    { id: 10, text: "Zosia, 26 lat – definicja" },
    { id: 11, text: "Adam, 38 lat – redukcja" },
    { id: 12, text: "Nina, 24 lata – start" },
];

export default function BeforeAfter() {
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const touchStartX = useRef<number | null>(null);

    const [hovered, setHovered] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [loaded, setLoaded] = useState<Record<number, boolean>>({});
    const [index, setIndex] = useState(0);

    const getItem = useCallback(
        (i: number) =>
            items[(i + items.length) % items.length],
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
        }, 5000);

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
            img.src = `https://picsum.photos/seed/${item.id}/400/700`;
        });
    }, []);

    const visible = [
        getItem(index - 2),
        getItem(index - 1),
        getItem(index),
        getItem(index + 1),
        getItem(index + 2),
    ];

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
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
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
                        {visible.map((item, i) => {
                            const image = `https://picsum.photos/seed/${item.id}/400/700`;

                            return (
                                <div
                                    key={`${item.id}-${i}`}
                                    className={`ba-item ${i === 2 ? "active" : ""}`}
                                >
                                    <div
                                        className="ba-image-wrapper"
                                        onClick={() => setSelectedImage(image)}
                                    >
                                        <img
                                            src={image}
                                            alt=""
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
                            );
                        })}
                    </div>
                </div>

                <button className="ba-arrow right" onClick={nextSlide}>
                    ❯
                </button>
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