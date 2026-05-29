import React, { useEffect, useState } from "react";
import { offers } from "../data/offers.ts";
import { useNavigate } from "react-router-dom";
import "../styleSheets/OfferSection.css";

const OfferSection: React.FC = () => {
    const navigate = useNavigate();
    const [activeOffer, setActiveOffer] = useState<string | null>(null);
    const [isMobile] = useState(window.innerWidth <= 650);

    // 👉 powrót do pozycji po wejściu z podstrony
    useEffect(() => {
        const scrollToId = sessionStorage.getItem("offerScrollTo");

        if (scrollToId) {
            const el = document.getElementById(scrollToId);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "center" });
                }, 50);
            }
        }
    }, []);

    const handleNavigate = (slug: string) => {
        // 👉 zapisz scroll + element
        sessionStorage.setItem("offerScrollTo", slug);

        navigate(`/offer/${slug}`, {
            state: {
                from: "offer-grid",
                scrollTo: slug
            }
        });
    };

    return (
        <>
            <section id="offer" className="offer">
                <div className="offer-container">
                    <h2>Oferta</h2>

                    <div className="offer-grid">
                        {offers.map((item, index) => (
                            <div
                                className={`card ${activeOffer === item.slug ? "active" : ""}`}
                                key={index}
                                id={item.slug}
                                onClick={() => {
                                    if (window.innerWidth <= 650 && activeOffer !== item.slug) {
                                        setActiveOffer(item.slug);
                                        return;
                                    }

                                    handleNavigate(item.slug);
                                }}
                            >
                                <div className="card-inner">
                                    <h3>{item.title}</h3>

                                    <div className="img-wrapper">
                                        <img
                                            className={`offer-grid-img ${
                                                item.slug === "personal-training-in-english"
                                                    ? "dark-image"
                                                    : ""
                                            } ${
                                                item.slug === "treningi-medyczne"
                                                    ? "img-right-medical"
                                                    : ""
                                            }`}
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </div>

                                    <div className="card-content">
                                        <p className="card-desc">{item.desc}</p>

                                        <button
                                            className="details-btn"
                                            onClick={(e) => {
                                                e.stopPropagation();

                                                if (isMobile && activeOffer !== item.slug) {
                                                    setActiveOffer(item.slug);
                                                    return;
                                                }

                                                handleNavigate(item.slug);
                                            }}
                                        >
                                            Więcej
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default OfferSection;