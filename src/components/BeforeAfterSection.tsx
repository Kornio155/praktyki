import { useEffect, useRef, useState } from "react";
import "../styleSheets/BeforeAfter.css";

const itemsBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function BeforeAfter() {
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const [hovered, setHovered] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [loaded, setLoaded] = useState<Record<number, boolean>>({});

    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % itemsBase.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + itemsBase.length) % itemsBase.length);
    };

    useEffect(() => {
        if (hovered) return;

        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [hovered]);

    // 🔥 PRELOAD (kluczowe dla placeholderów)
    useEffect(() => {
        itemsBase.forEach((item) => {
            const img = new Image();
            img.src = `https://picsum.photos/seed/${item}/400/700`;
        });
    }, []);

    const getItem = (i: number) =>
        itemsBase[(i + itemsBase.length) % itemsBase.length];

    const visible = [
        getItem(index - 2),
        getItem(index - 1),
        getItem(index),
        getItem(index + 1),
        getItem(index + 2),
    ];

    const touchStartX = useRef<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;

        const diff = e.changedTouches[0].clientX - touchStartX.current;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        }

        touchStartX.current = null;
    };



    return (
        <section className="section before-after">
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
                            const image = `https://picsum.photos/seed/${item}/400/700`;

                            return (
                                <div
                                    key={item + "-" + i}
                                    className={`ba-item ${
                                        i === 2 ? "active" : ""
                                    }`}
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <img
                                        src={image}
                                        alt=""
                                        onLoad={() =>
                                            setLoaded((prev) => ({
                                                ...prev,
                                                [item]: true,
                                            }))
                                        }
                                        style={{
                                            opacity: loaded[item] ? 1 : 0,
                                            transition:
                                                "opacity 0.3s ease",
                                        }}
                                    />

                                    <div className="ba-overlay">
                                        <p>
                                            Opis treningów klienta
                                            <br />
                                            wiek i imię
                                        </p>
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
                <div
                    className="ba-modal"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="ba-modal-content">
                        <img src={selectedImage} />
                    </div>
                </div>
            )}
        </section>
    );
}