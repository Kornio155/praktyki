import React from "react";

const FooterContact: React.FC = () => {
    return (
        <section className="footer-contact">

            <button
                className="scroll-top-btn"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                ↑ Na górę ↑
            </button>

            <div className="footer-contact-row">
                <h2 className="footer-title">Twórcy strony</h2>

                <div className="footer-list">
                    <p>Maciej Krzywda</p>
                    <p>Patryk Witkowski</p>
                    <p>Kornel Janiuk</p>
                </div>
            </div>

        </section>
    );
};

export default FooterContact;