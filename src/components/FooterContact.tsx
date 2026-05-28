import React from "react";

const FooterContact: React.FC = () => {
    return (
        <section className="footer-contact">

            <button
                className="scroll-top-btn"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                {" ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ Na górę ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ "}
            </button>

            <div className="footer-contact-row">
                <div className="footer-list">
                    <p className="footer-title">Twórcy strony</p>
                    <p>Maciej Krzywda</p>
                    <p>Patryk Witkowski</p>
                    <p>Kornel Janiuk</p>
                </div>
            </div>

        </section>
    );
};

export default FooterContact;