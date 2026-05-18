import React from "react";

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1>
                    IT'S TIME TO <br />
                    BE HEALTHY <br />
                    AND IN <br />
                    GREAT SHAPE
                </h1>

                <p>
                    Treningi personalne, medyczne, funkcjonalne, motoryczne
                </p>

                <button className="btn hero-btn">
                    Skontaktuj się już dziś
                </button>
            </div>
        </section>
    );
};

export default Hero;