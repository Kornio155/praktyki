import React, { useEffect, useState } from "react";
import { offers } from "../data/offers.ts";
import { useNavigate } from "react-router-dom";
import "../styleSheets/OfferSection.css";

const OfferSection: React.FC = () => {
    const navigate = useNavigate();
    const [activeOffer, setActiveOffer] = useState<string | null>(null);

    // 👉 Powrót do pozycji po wejściu z podstrony
    useEffect(() => {
        const scrollToId = sessionStorage.getItem("offerScrollTo");
        if (!scrollToId) return;

        const el = document.getElementById(scrollToId);
        if (el) {
            setTimeout(() => {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 50);
        }

        sessionStorage.removeItem("offerScrollTo");
    }, []);

    const handleNavigate = (slug: string) => {
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
                                    if (window.innerWidth <= 650) {
                                        // Mobilki: pierwsze kliknięcie aktywuje, drugie przekierowuje
                                        if (activeOffer === item.slug) {
                                            handleNavigate(item.slug);
                                        } else {
                                            setActiveOffer(item.slug);
                                        }
                                    } else {
                                        // Desktop: zawsze przekierowuje od razu
                                        handleNavigate(item.slug);
                                    }
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
                                                // e.stopPropagation() nie jest już potrzebne,
                                                // ponieważ kliknięcie w przycisk może naturalnie "wypłynąć" do karty,
                                                // a karta i tak wykona tę samą logikę nawigacji.

                                                if (window.innerWidth <= 650 && activeOffer !== item.slug) {
                                                    e.stopPropagation(); // Blokujemy bąbelkowanie tylko przy pierwszym kliknięciu na mobilu, żeby nie odpalić logiki karty
                                                    setActiveOffer(item.slug);
                                                }
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