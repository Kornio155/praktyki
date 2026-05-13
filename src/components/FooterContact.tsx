import React from "react";

const FooterContact: React.FC = () => {
    return (
        <section className="footer-contact">

            <div className="footer-contact-header">
                <span>Kontakt</span>
                <h2>Lokalizacja, godziny i kontakt</h2>
                <p>Skontaktuj się telefonicznie, mailowo lub przez social media.</p>
            </div>

            <div className="footer-contact-row">

                {/* LOKALIZACJA */}
                <div className="footer-contact-box">

                    <div className="footer-icon">📍</div>

                    <div className="footer-content">
                        <h3>Lokalizacja</h3>
                        <p>Olimpijska</p>
                        <p>10-001 Olsztyn</p>

                        <div className="line"></div>

                        <p className="muted">Możliwy dojazd do klienta</p>
                    </div>

                </div>

                {/* GODZINY */}
                <div className="footer-contact-box">

                    <div className="footer-icon">🕒</div>

                    <div className="footer-content">
                        <h3>Godziny</h3>

                        <p className="strong">Poniedziałek – Piątek</p>
                        <p>8:15 – 21:00</p>

                        <div className="line"></div>

                        <p className="muted">Weekend: zamknięte</p>
                    </div>

                </div>

                {/* KONTAKT */}
                <div className="footer-contact-box">

                    <div className="footer-icon">✉️</div>

                    <div className="footer-content">
                        <h3>Kontakt</h3>

                        <p>+48 695 275 809</p>
                        <p>kontakt.mvab@gmail.com</p>

                        <div className="line"></div>

                        <div className="social-buttons">

                            <a
                                href="https://www.instagram.com/moveability_adam_rybaczyk/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-btn instagram"
                            >
                                <img src="https://i.postimg.cc/fTQk4PM1/icons8-instagram-logo-100.png" alt="Instagram" />
                            </a>

                            <a
                                href="https://www.facebook.com/Moveability.Olsztyn?locale=pl_PL"
                                target="_blank"
                                rel="noreferrer"
                                className="social-btn facebook"
                            >
                                <img src="https://i.postimg.cc/9McqjNds/icons8-facebook-logo-100.png" alt="Facebook" />
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default FooterContact;