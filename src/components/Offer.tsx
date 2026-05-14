import React from "react";
import {offers} from "../data/offers.ts";
import { useNavigate } from "react-router-dom";

const OfferSection: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section id="offer" className="offer">

            <h2>Nasze Oferty</h2>

            <div className="offer-grid">

                {offers.map((item, index) => (

                    <div className="card" key={index}>
                            <div className="card-inner">
                                <h3>{item.title}</h3>

                                <div className="img-wrapper">
                                    <img
                                        className="offer-grid-img"
                                        src={`https://picsum.photos/300/200?random=${index}`}
                                    />
                                </div>

                                <p className="card-desc">{item.desc}</p>

                                <button
                                    className="details-btn"
                                    onClick={() => navigate(`/offer/${index}`)}
                                >
                                    Więcej
                                </button>
                            </div>
                    </div>

                ))}

            </div>

        </section>
    );
};

export default OfferSection;