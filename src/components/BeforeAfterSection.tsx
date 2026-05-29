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
import aleks2 from "../assets/przedIPo/a_1200x1200.png";

const items = [
    { id: 1, text: "Aleks = =", image: aleks },
    { id: 2, text: "Alicja = efekty w niecały rok =", image: alicja },
    { id: 3, text: "Andrzej =63 -> 67 kg =-9% tkanki tłuszczowej ", image: andrzej },
    { id: 4, text: "Adam =-12 kg w 4 miesiące =", image: adam },
    { id: 5, text: "Aga =-10% tkanki tłuszczowej =-10 kg w 3 miesiące", image: aga },
    { id: 6, text: "Ania = rekompozycja 12% tkanki tłuszczowej =", image: ania },
    { id: 7, text: "Darek = odmłodzony o 18 lat =", image: darek },
    { id: 8, text: "A. = =", image: aleks2 },
    { id: 9, text: "Bogus = =", image: bogus },
    { id: 10, text: "G. = rekompozycja ciała =", image: gosia },
    { id: 11, text: "K. =-6 kg / =-30 cm", image: kamila },
    { id: 12, text: "Natalia = =", image: natalia },
    { id: 13, text: "Bogdan = =", image: bogdan }
];

export default function BeforeAfter() {
    const carouselRef = useRef<HTMLDivElement>(null);


    const [hovered, setHovered] = useState(false);
    const [isNavHovered, setIsNavHovered] = useState(false);

    const duplicated = [...items, ...items, ...items];

    const isDragging = useRef(false);
    const isInteracting = useRef(false);
    const isCentering = useRef(false);

    const startX = useRef(0);
    const startScrollLeft = useRef(0);

    const velocity = useRef(0);
    const lastX = useRef(0);
    const lastTime = useRef(0);

    const animationFrame = useRef<number | null>(null);

    // HOLD TO DRAG
    const holdTimeout = useRef<number | null>(null);
    const isHoldActive = useRef(false);

    // CLICK DETECTION
    const pressStartTime = useRef(0);
    const movedTooMuch = useRef(false);

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

    // CENTER CLICKED ITEM
    const scrollToCenter = (el: HTMLElement) => {
        const container = carouselRef.current;
        if (!container) return;

        isCentering.current = true;

        const containerRect = container.getBoundingClientRect();
        const itemRect = el.getBoundingClientRect();

        const containerCenter = containerRect.width / 2;
        const itemCenter =
            itemRect.left - containerRect.left + itemRect.width / 2;

        const target =
            container.scrollLeft + (itemCenter - containerCenter);

        container.scrollTo({
            left: target,
            behavior: "smooth",
        });

        setTimeout(() => {
            isCentering.current = false;
        }, 500);
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

    // START PRESS
    const startPress = (clientX: number) => {
        const container = carouselRef.current;
        if (!container) return;

        stopMomentum();

        pressStartTime.current = performance.now();
        movedTooMuch.current = false;

        startX.current = clientX;
        startScrollLeft.current = container.scrollLeft;

        lastX.current = clientX;
        lastTime.current = performance.now();

        holdTimeout.current = window.setTimeout(() => {
            isHoldActive.current = true;
            isDragging.current = true;
            isInteracting.current = true;
        }, 100); // HOLD 0.1s
    };

    // MOVE
    const moveDrag = (clientX: number) => {
        if (!isDragging.current) return;

        const container = carouselRef.current;
        if (!container) return;

        const dx = clientX - startX.current;

        if (Math.abs(dx) > 8) {
            movedTooMuch.current = true;
        }

        container.scrollLeft = startScrollLeft.current - dx;

        loopCheck();

        const now = performance.now();

        const deltaX = clientX - lastX.current;
        const deltaTime = now - lastTime.current;

        if (deltaTime > 0) {
            velocity.current = deltaX / deltaTime;
        }

        lastX.current = clientX;
        lastTime.current = now;
    };

    // END PRESS
    const endPress = () => {
        if (holdTimeout.current) {
            clearTimeout(holdTimeout.current);
        }

        if (isDragging.current) {
            startMomentum();
        }

        isDragging.current = false;
        isInteracting.current = false;

        setTimeout(() => {
            isHoldActive.current = false;
        }, 50);
    };

    // MOUSE EVENTS
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        startPress(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        moveDrag(e.clientX);
    };

    const handleMouseUp = () => {
        endPress();
    };

    // TOUCH EVENTS
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        startPress(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        moveDrag(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        endPress();
    };

    // INIT POSITION
    useEffect(() => {
        const container = carouselRef.current;
        if (!container) return;

        requestAnimationFrame(() => {
            container.scrollLeft = container.scrollWidth / 3;
        });
    }, []);

    // AUTO SCROLL
    const autoScrollFrame = useRef<number | null>(null);

    useEffect(() => {
        const container = carouselRef.current;
        if (!container) return;

        let lastTime = performance.now();

        const speed = 0.035;

        const animate = (time: number) => {
            const delta = time - lastTime;
            lastTime = time;

            const shouldPause =
                hovered ||
                isNavHovered ||
                isDragging.current ||
                isCentering.current;

            if (!shouldPause) {
                container.scrollLeft += speed * delta;
                loopCheck();
            }

            autoScrollFrame.current = requestAnimationFrame(animate);
        };

        autoScrollFrame.current = requestAnimationFrame(animate);

        return () => {
            if (autoScrollFrame.current) {
                cancelAnimationFrame(autoScrollFrame.current);
            }
        };
    }, [hovered, isNavHovered]);

    useEffect(() => {
        return () => stopMomentum();
    }, []);

    const scrollStep = () => {
        const container = carouselRef.current;
        if (!container) return;

        const firstCard =
            container.querySelector<HTMLElement>(".ba-item");

        if (!firstCard) return;

        const gap =
            parseInt(getComputedStyle(container).gap || "24") || 24;

        const step = firstCard.offsetWidth + gap;

        container.scrollBy({
            left: step,
            behavior: "smooth",
        });

        setTimeout(loopCheck, 400);
    };

    const scrollStepBack = () => {
        const container = carouselRef.current;
        if (!container) return;

        const firstCard =
            container.querySelector<HTMLElement>(".ba-item");

        if (!firstCard) return;

        const gap =
            parseInt(getComputedStyle(container).gap || "24") || 24;

        const step = firstCard.offsetWidth + gap;

        container.scrollBy({
            left: -step,
            behavior: "smooth",
        });

        setTimeout(loopCheck, 400);
    };



    useEffect(() => {
        const handleOutsideTouch = (e: TouchEvent) => {
            const container = carouselRef.current;

            if (!container) return;

            if (!container.contains(e.target as Node)) {
                isDragging.current = false;
                isInteracting.current = false;
                isHoldActive.current = false;
                isCentering.current = false;

                if (holdTimeout.current) {
                    clearTimeout(holdTimeout.current);
                }
            }
        };

        document.addEventListener("touchstart", handleOutsideTouch);

        return () => {
            document.removeEventListener("touchstart", handleOutsideTouch);
        };
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
                    onMouseLeave={() => {
                        setHovered(false);

                        isDragging.current = false;
                        isInteracting.current = false;
                        isHoldActive.current = false;

                        if (holdTimeout.current) {
                            clearTimeout(holdTimeout.current);
                        }
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {duplicated.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="ba-item"
                        >
                            <div
                                className="ba-image-wrapper"
                                onClick={(e) => {
                                    if (
                                        movedTooMuch.current ||
                                        isHoldActive.current
                                    ) {
                                        return;
                                    }

                                    const el =
                                        e.currentTarget as HTMLElement;

                                    // tylko centruj
                                    scrollToCenter(el);
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.text}
                                    draggable={false}
                                />

                                <div className="ba-overlay">
                                    <p>
                                        {item.text
                                            .split(" =")
                                            .map((t, i) => (
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


        </section>
    );
}