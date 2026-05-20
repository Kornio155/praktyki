import React from "react";

const FooterContact: React.FC = () => {
    return (
        <section className="footer-contact">

            <div className="footer-contact-row">

                {/* LOKALIZACJA */}
                <div className="footer-contact-box">

                    <div className="footer-icon">📍</div>

                    <div className="footer-content">
                        <h3>Maciej Krzywda</h3>
                        <p>debil z powołania</p>
                        <div className="line"></div>

                        <p className="muted">programista z wyboru</p>
                    </div>

                </div>

                {/* GODZINY */}
                <div className="footer-contact-box">

                    <div className="footer-icon">🕒</div>

                    <div className="footer-content">
                        <h3>Patryk Witkowski</h3>
                        <p>jedyna osoba która wie co robi</p>

                        <div className="line"></div>

                        <p className="muted">w pokoju pełnym gałganów</p>
                    </div>

                </div>

                {/* KONTAKT */}
                <div className="footer-contact-box">

                    <div className="footer-icon">✉️</div>

                    <div className="footer-content">
                        <h3>Kornel Janiuk</h3>

                        <p>nie znam chłopa</p>

                        <div className="line"></div>

                        <p className="muted">nie no naprawde nigdy chłopa nawet nie widziałem</p>
                        </div>

                    </div>

                </div>
        </section>
    );
};

export default FooterContact;