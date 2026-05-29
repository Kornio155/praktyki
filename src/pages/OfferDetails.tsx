import {useLocation, useParams} from "react-router-dom";
import { offers } from "../data/offers";
import "../styleSheets/OfferDetailsPage.css";
import {useEffect, useRef, useState} from "react";
import ContactModal from "../components/ContactModal";
import { icons } from "../assets/icons";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const OfferDetails = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOrbitPaused, setIsOrbitPaused] = useState(false);

    const { slug } = useParams();
    const offer = offers.find(item => item.slug === slug);

    if (!offer) {
        return <h2>Nie znaleziono oferty</h2>;
    }

    const isService = offer.type === "service";

    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        const state = location.state as {
            from?: string;
            scrollTo?: string;
        } | null;

        if (state?.from === "offer-grid") {
            navigate("/");

            setTimeout(() => {
                if (state.scrollTo) {
                    document.getElementById(state.scrollTo)
                        ?.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }, 100);
            return;
        }

        navigate("/");
    };
    const perks = offer.perks ?? [];

    const radius = window.innerWidth < 600 ? 180 : 300;

    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        if (isOrbitPaused) return;

        const interval = setInterval(() => {
            setRotation(prev => prev + 0.05); // speed
        }, 16);

        return () => clearInterval(interval);
    }, [isOrbitPaused]);



    const orbitRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleOutside = (e: MouseEvent | TouchEvent) => {
            const target = e.target as Node;

            if (orbitRef.current && !orbitRef.current.contains(target)) {
                setIsOrbitPaused(false);
            }
        };

        document.addEventListener("mousedown", handleOutside);
        document.addEventListener("touchstart", handleOutside);

        return () => {
            document.removeEventListener("mousedown", handleOutside);
            document.removeEventListener("touchstart", handleOutside);
        };
    }, []);



    return (
        <>
            <section className="offer-details">
                <div className="offer-details-container">

                    {/* IMAGE */}
                    <div className="offer-details-image-wrapper">
                        <img
                            className="offer-details-image"
                            src={offer.image}
                            alt={offer.title}
                            style={{
                                objectPosition:
                                    offer.slug === "treningi-medyczne"
                                        ? "center 92%"
                                        : offer.slug === "treningi-motoryczne"
                                            ? "center 0"
                                            : offer.imagePosition
                            }}
                        />
                    </div>

                    {/* CONTENT */}
                    <div className="offer-details-content">
                        <span className="offer-details-tag">Nasza Oferta</span>

                        <h1>{offer.title}</h1>
                        <p>{offer.details}</p>


                    </div>

                    {/* ORBIT */}
                    {!isService && (
                        <div className="offer-perks-orbit" ref={orbitRef}>

                            <div
                                className="orbit"
                                style={{
                                    animationPlayState: isOrbitPaused ? "paused" : "running"
                                }}
                            >
                                <div className="orbit-center">
                                    <img
                                        src={logo}
                                        alt="logo"
                                        className="orbit-center-logo"
                                    />

                                    <div className="orbit-center-overlay">
                                        <span>W ramach współpracy</span>
                                        <h2>otrzymujesz</h2>
                                    </div>
                                </div>

                                <div className="orbit-spin">
                                    {perks.map((item, index) => {
                                        const baseAngle =
                                            (index / perks.length) * 2 * Math.PI - Math.PI / 2;

                                        const finalAngle =
                                            baseAngle + rotation * (Math.PI / 180);

                                        return (
                                            <div
                                                key={index}
                                                className="orbit-item"
                                                style={{
                                                    "--angle": `${finalAngle}rad`,
                                                    "--radius": `${radius}px`,
                                                } as React.CSSProperties}
                                            >
                                                <div className="orbit-item-inner">

                                                    <div
                                                        className="orbit-icon"
                                                        onMouseEnter={() => setIsOrbitPaused(true)}
                                                        onMouseLeave={() => setIsOrbitPaused(false)}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setIsOrbitPaused(true);
                                                        }}
                                                        onTouchStart={() => setIsOrbitPaused(true)}
                                                    >
                                                        <img
                                                            src={icons[item.icon]}
                                                            alt={item.label}
                                                        />
                                                    </div>

                                                    <span className="orbit-label">
                                    {item.label}
                                </span>

                                                    <div className="orbit-tooltip">
                                                        {item.details}
                                                    </div>

                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="offer-actions">
                        <button
                            className="offer-back-btn"
                            onClick={handleBack} >
                            ← Powrót
                        </button>

                        <button
                            className="offer-details-btn"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Poproś o kontakt
                        </button>
                    </div>
                </div>

            </section>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default OfferDetails;