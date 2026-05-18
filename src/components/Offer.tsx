import React from "react";
import {offers} from "../data/offers.ts";
import { useNavigate } from "react-router-dom";
import "../styleSheets/OfferSection.css"

const OfferSection: React.FC = () => {
    const navigate = useNavigate();

    const services = offers.slice(-3);
    const mainOffers = offers.slice(0, -3);

    return (
        <>
            {/* OFERTY */}
            <section id="offer" className="offer">
                <h2>Oferty</h2>

                <div className="offer-grid">
                    {mainOffers.map((item, index) => (
                        <div
                            className="card"
                            key={index}
                            onClick={() => navigate(`/offer/${item.title}`)}
                        >
                            <div className="card-inner">
                                <h3>{item.title}</h3>

                                <div className="img-wrapper">
                                    <img
                                        className="offer-grid-img"
                                        src={`https://picsum.photos/300/200?random=${index}`}
                                    />
                                </div>

                                <div className="card-content">
                                    <p className="card-desc">{item.desc}</p>

                                    <button
                                        className="details-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(`/offer/${item.title}`);
                                        }}
                                    >
                                        Więcej
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* USŁUGI */}
            <section id="services" className="services">
                <h2>Usługi</h2>

                <div className="offer-grid">
                    {services.map((item, index) => (
                        <div
                            className="card service-card"
                            key={index}
                            onClick={() => navigate(`/offer/${item.title}`)}
                        >
                            <div className="card-inner">
                                <h3>{item.title}</h3>

                                <div className="img-wrapper">
                                    <img
                                        className="offer-grid-img"
                                        src={`https://picsum.photos/300/200?random=${index + 100}`}
                                    />
                                </div>

                                <div className="card-content">
                                    <p className="card-desc">{item.desc}</p>

                                    <button
                                        className="details-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(`/offer/${item.title}`);
                                        }}
                                    >
                                        Więcej
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default OfferSection;