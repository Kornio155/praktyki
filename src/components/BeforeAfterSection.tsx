import { useEffect, useRef, useState } from "react";
import "../styleSheets/BeforeAfter.css";

import aleks from "../assets/przedIPo/aleks_1200x1200.png";
import alicja from "../assets/przedIPo/alicja_1200x1200.png";
import andrzej from "../assets/przedIPo/andrzej_1200x1200.png";
import adam from "../assets/przedIPo/adam_1200x1200.png";
import aga from "../assets/przedIPo/aga_1200x1200.png";
import ania from "../assets/przedIPo/ania_1200x1200.png";
import darek from "../assets/przedIPo/darek_1200x1200.png";
import gosia from "../assets/przedIPo/gosia_1200x1200.png";
import kamila from "../assets/przedIPo/kamila_1200x1200.png";
import natalia from "../assets/przedIPo/natalia_1200x1200.png";
import bogdan from "../assets/przedIPo/bogdan_1200x1200.png";
import bogus from "../assets/przedIPo/bogus_1200x1200.png";

const items = [
    { id: 1, text: "Aleks - -", image: aleks },
    { id: 2, text: "Alicja - efekty w niecały rok -", image: alicja },
    { id: 3, text: "Andrzej -63 => 67 kg -9% tkanki tłuszczowej -", image: andrzej },
    { id: 4, text: "Adam -12 kg w 4 miesiące -", image: adam },
    { id: 5, text: "Aga -10% tkanki tłuszczowej -10 kg w 3 miesiące", image: aga },
    { id: 6, text: "Ania - rekompozycja 12% tkanki tłuszczowej -", image: ania },
    { id: 7, text: "Darek - odmłodzony o 18 lat -", image: darek },
    { id: 8, text: "Bogus - -", image: bogus },
    { id: 9, text: "Gosia - rekompozycja ciała -", image: gosia },
    { id: 10, text: "Kamila -6 kg / -30 cm", image: kamila },
    { id: 11, text: "Natalia - -", image: natalia },
    { id: 12, text: "Bogdan - -", image: bogdan }
];

export default function BeforeAfter() {
    const carouselRef = useRef<HTMLDivElement>(null);

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [hovered, setHovered] = useState(false);
    const [isNavHovered, setIsNavHovered] = useState(false);

    const duplicated = [...items, ...items, ...items];

    const isDragging = useRef(false);
    const startX = useRef(0);
    const startScrollLeft = useRef(0);

    const velocity = useRef(0);
    const lastX = useRef(0);
    const lastTime = useRef(0);

    const animationFrame = useRef<number | null>(null);

    // CLICK vs DRAG detection
    const pointerDownTime = useRef(0);
    const clickCandidate = useRef(true);

    const stopMomentum = () => {
        if (animationFrame.current) {
            cancelAnimationFrame(animationFrame.current);
        }
    };

    const loopCheck = () => {
        const container = carouselRef.current;
        if (!container) return;

        const singleSetWidth = container.scrollWidth / 3;

        if (container.scrollLeft >= singleSetWidth * 2) {
            container.scrollLeft -= singleSetWidth;
        }

        if (container.scrollLeft <= 0) {
            container.scrollLeft += singleSetWidth;
        }
    };

    const startMomentum = () => {
        const container = carouselRef.current;
        if (!container) return;

        const decay = 0.92;

        const animate = () => {
            velocity.current *= decay;

            container.scrollLeft -= velocity.current * 16;

            loopCheck();

            if (Math.abs(velocity.current) > 0.05) {
                animationFrame.current = requestAnimationFrame(animate);
            }
        };

        animationFrame.current = requestAnimationFrame(animate);
    };

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        const container = carouselRef.current;
        if (!container) return;

        stopMomentum();

        isDragging.current = true;
        clickCandidate.current = true;

        startX.current = e.clientX;
        startScrollLeft.current = container.scrollLeft;

        lastX.current = e.clientX;
        lastTime.current = performance.now();

        pointerDownTime.current = performance.now();

        container.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging.current) return;

        const container = carouselRef.current;
        if (!container) return;

        const dx = e.clientX - startX.current;
        const dt = performance.now() - pointerDownTime.current;

        if (Math.abs(dx) > 8 || dt > 150) {
            clickCandidate.current = false;
        }

        container.scrollLeft = startScrollLeft.current - dx;

        loopCheck();

        const now = performance.now();

        const deltaX = e.clientX - lastX.current;
        const deltaTime = now - lastTime.current;

        if (deltaTime > 0) {
            velocity.current = deltaX / deltaTime;
        }

        lastX.current = e.clientX;
        lastTime.current = now;
    };

    const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        const container = carouselRef.current;
        if (!container) return;

        isDragging.current = false;

        container.releasePointerCapture(e.pointerId);

        if (!clickCandidate.current) {
            startMomentum();
        }

        setTimeout(() => {
            clickCandidate.current = true;
        }, 50);
    };

    useEffect(() => {
        const container = carouselRef.current;
        if (!container) return;

        requestAnimationFrame(() => {
            container.scrollLeft = container.scrollWidth / 3;
        });
    }, []);

    useEffect(() => {
        if (hovered || isNavHovered || isDragging.current) return;

        const container = carouselRef.current;
        if (!container) return;

        const interval = setInterval(() => {
            const firstCard = container.querySelector<HTMLElement>(".ba-item");
            if (!firstCard) return;

            const gap = parseInt(getComputedStyle(container).gap || "24") || 24;
            const step = firstCard.offsetWidth + gap;

            container.scrollBy({ left: step, behavior: "smooth" });

            setTimeout(loopCheck, 400);
        }, 3000);

        return () => clearInterval(interval);
    }, [hovered]);

    useEffect(() => {
        return () => stopMomentum();
    }, []);

    const scrollStep = () => {
        const container = carouselRef.current;
        if (!container) return;

        const firstCard = container.querySelector<HTMLElement>(".ba-item");
        if (!firstCard) return;

        const gap = parseInt(getComputedStyle(container).gap || "24") || 24;
        const step = firstCard.offsetWidth + gap;

        container.scrollBy({ left: step, behavior: "smooth" });

        setTimeout(loopCheck, 400);
    };

    const scrollStepBack = () => {
        const container = carouselRef.current;
        if (!container) return;

        const firstCard = container.querySelector<HTMLElement>(".ba-item");
        if (!firstCard) return;

        const gap = parseInt(getComputedStyle(container).gap || "24") || 24;
        const step = firstCard.offsetWidth + gap;

        container.scrollBy({ left: -step, behavior: "smooth" });

        setTimeout(loopCheck, 400);
    };

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedImage(null);
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <section id="before-after" className="before-after">
            <h2>Efekty</h2>

            <div className="ba-wrapper">
                <button
                    className="ba-nav ba-left"
                    onClick={scrollStepBack}
                    onMouseEnter={() => setIsNavHovered(true)}
                    onMouseLeave={() => setIsNavHovered(false)}
                >
                    ‹
                </button>

                <button
                    className="ba-nav ba-right"
                    onClick={scrollStep}
                    onMouseEnter={() => setIsNavHovered(true)}
                    onMouseLeave={() => setIsNavHovered(false)}
                >
                    ›
                </button>

                <div
                    ref={carouselRef}
                    className="ba-carousel"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                >
                    {duplicated.map((item, index) => (
                        <div key={`${item.id}-${index}`} className="ba-item">
                            <div
                                className="ba-image-wrapper"
                                onPointerUp={(e) => {
                                    console.log("CLICK IMAGE:", item.image);
                                    console.log("clickCandidate:", clickCandidate.current);
                                    e.stopPropagation();
                                    console.log("CLICK IMAGE:", item.image);
                                    console.log("clickCandidate:", clickCandidate.current);

                                    const dt = performance.now() - pointerDownTime.current;

                                    const isQuickTap = dt < 250 && clickCandidate.current;
                                    console.log("CLICK IMAGE:", item.image);
                                    console.log("clickCandidate:", clickCandidate.current);

                                    if (isQuickTap) {
                                        setSelectedImage(item.image);
                                    }
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.text}
                                    draggable={false}
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