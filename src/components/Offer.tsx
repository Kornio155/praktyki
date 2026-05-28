import React from "react";
import {offers} from "../data/offers.ts";
import { useNavigate } from "react-router-dom";
import "../styleSheets/OfferSection.css"

const OfferSection: React.FC = () => {
    const navigate = useNavigate();


    return (
        <>
            <section id="offer" className="offer">

                <div className="offer-container">
                    <h2>Oferta</h2>

                    <div className="offer-grid">
                        {offers.map((item, index) => (
                            <div
                                className="card"
                                key={index}
                                onClick={() =>
                                    navigate(`/offer/${item.slug}`, {
                                        state: { scrollTo: item.slug }
                                    })
                                }
                                id={item.slug}
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
                                        />
                                    </div>

                                    <div className="card-content">
                                        <p className="card-desc">{item.desc}</p>

                                        <button
                                            className="details-btn"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(`/offer/${item.slug}`);
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
}

export default OfferSection;