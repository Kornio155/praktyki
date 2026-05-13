import React from "react";

const BeforeAfterSection: React.FC = () => {
    return (
        <section id="before-after" className="section before-after">
            <h2>Przed i po</h2>

            <div className="ba-slider">
                <div className="ba-track">
                    {[1, 2, 3, 4, 1, 2, 3, 4].map((item, index) => (
                        <div className="ba-item" key={index}>
                            <img
                                src={`https://picsum.photos/300/300?random=${item}`}
                                alt="before after"
                            />

                            <p>
                                Opis treningów klienta oraz jego
                                <br />
                                wiek i imię
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BeforeAfterSection;