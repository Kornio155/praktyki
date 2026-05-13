import React, { useState } from "react";
import {offers} from "../data/offers.ts";

const OfferSection: React.FC = () => {
    const [openCard, setOpenCard] = useState<number | null>(null);

    const toggleCard = (index: number) => {
        setOpenCard(openCard === index ? null : index);
    };

    return (
        <section id="offer" className="offer">

            <h2>Nasze Oferty</h2>

            <div className="offer-grid">

                {offers.map((item, index) => (

                    <div className="card" key={index}>
                        {openCard === index ? (
                            <div className="card-inner details-card">
                                <h3>{item.title}</h3>

                                <p>{item.details}</p>

                                <button
                                    className="details-btn"
                                    onClick={() => toggleCard(index)}
                                >
                                    Zamknij
                                </button>
                            </div>
                        ) : (
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
                                    onClick={() => toggleCard(index)}
                                >
                                    Pokaż szczegóły
                                </button>
                            </div>
                        )}
                    </div>

                ))}

            </div>

        </section>
    );
};

export default OfferSection;