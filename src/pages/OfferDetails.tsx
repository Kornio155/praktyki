import { useParams } from "react-router-dom";
import { offers } from "../data/offers";
import "../styleSheets/OfferDetailsPage.css";
import {useEffect, useState} from "react";
import ContactModal from "../components/ContactModal";
import { icons } from "../assets/icons";

const OfferDetails = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOrbitPaused, setIsOrbitPaused] = useState(false);

    const { slug } = useParams();
    const offer = offers.find(item => item.slug === slug);

    if (!offer) {
        return <h2>Nie znaleziono oferty</h2>;
    }

    const perks = offer.perks ?? [];

    const radius = window.innerWidth < 600 ? 400 : 300;

    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        if (isOrbitPaused) return;

        const interval = setInterval(() => {
            setRotation(prev => prev + 0.1); // speed
        }, 16);

        return () => clearInterval(interval);
    }, [isOrbitPaused]);

    return (
        <>
            <section className="offer-details">
                <div className="offer-details-container">

                    {/* IMAGE */}
                    <div className="offer-details-image-wrapper">
                        <img
                            className="offer-details-image"
                            src={`https://picsum.photos/1200/500?random=${offer.title}`}
                            alt={offer.title}
                        />
                    </div>

                    {/* CONTENT */}
                    <div className="offer-details-content">
                        <span className="offer-details-tag">Nasza Oferta</span>

                        <h1>{offer.title}</h1>
                        <p>{offer.details}</p>

                        <button
                            className="offer-details-btn"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Poproś o kontakt
                        </button>
                    </div>

                    {/* ORBIT */}
                    <div className="offer-perks-orbit">

                        <h2 className="offer-perks-title">
                            w ramach współpracy otrzymujesz:
                        </h2>

                        <div
                            className="orbit"
                            style={{
                                animationPlayState: isOrbitPaused ? "paused" : "running"
                            }}
                        >
                            <div className="orbit-spin">

                                {perks.map((item, index) => {
                                    const baseAngle =
                                        (index / perks.length) * 2 * Math.PI - Math.PI / 2;

                                    const finalAngle = baseAngle + rotation * (Math.PI / 180);

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