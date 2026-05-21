import React, { useState } from "react";
import ContactModal from "./ContactModal.tsx";
import "../styleSheets/ContactSection.css";

const ContactSection: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id="contact" className="Contact">

                <h2>Kontakt</h2>

                <div className="Contact-content">

                    {/* LEWA STRONA */}
                    <div className="Contact-left">

                        {/* EMAIL */}
                        <div className="Contact-card" id="email-card">

                            <img
                                src="https://imglink.cc/cdn/BL1Fl_EFtu.png"
                                alt="Email"
                                className="contact-icon-image email-icon"
                            />

                            <div className="card-text-content">
                                <p>Email</p>
                                <h3>kontakt.mvab@gmail.com</h3>
                            </div>

                        </div>

                        {/* TELEFON */}
                        <div className="Contact-card" id="phone-card">

                            <img
                                src="https://imglink.cc/cdn/p2R12TQnAg.png"
                                alt="Telefon"
                                className="contact-icon-image phone-icon"
                            />

                            <div className="card-text-content">
                                <p>Telefon</p>
                                <h3>+48 695 275 809</h3>
                            </div>

                        </div>

                        {/* LOKALIZACJA */}
                        <div className="Contact-card" id="location-card">

                            <img
                                src="https://imglink.cc/cdn/FQCNW5Fo7u.png"
                                alt="Lokalizacja"
                                className="contact-icon-image location-icon"
                            />

                            <div className="card-text-content">
                                <p>Lokalizacja</p>

                                <h3>Ul. Olimpijska 1</h3>

                                <a
                                    href="https://www.google.com/maps/place/MOVEABILITY/@53.7822737,20.4427674,19.25z/data=!4m15!1m8!3m7!1s0x46e27ee39b032a27:0x9b757de379d46f62!2sOlimpijska+1,+10-164+Olsztyn!3b1!8m2!3d53.782428!4d20.4437381!16s%2Fg%2F11cpjmnn7r!3m5!1s0x46e27ed90860c20d:0x2015610d16d18d5e!8m2!3d53.7822516!4d20.4424293!16s%2Fg%2F11gfhx06jp?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="location-button"
                                >
                                    Zobacz na mapie
                                </a>

                            </div>

                        </div>

                        {/* GODZINY */}
                        <div className="Contact-card" id="hours-card">

                            <img
                                src="https://imglink.cc/cdn/CnSseZg6Uf.png"
                                alt="Godziny"
                                className="contact-icon-image clock-icon"
                            />

                            <div className="card-text-content">
                                <p>Godziny otwarcia</p>
                                <h3>pn.-pt. 08:15-21:00</h3>
                            </div>

                        </div>

                    </div>

                    {/* PRAWA STRONA */}
                    <div className="Contact-right">

                        {/* INSTAGRAM */}
                        <a
                            href="https://www.instagram.com/moveability_adam_rybaczyk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Contact-card"
                            id="sociale1"
                        >

                            <img
                                src="https://imglink.cc/cdn/c2ZyTzCsyu.png"
                                alt="Instagram"
                                className="contact-icon-image social-icon"
                            />

                            <div className="card-text-content">
                                <p>Instagram</p>

                                <a className="location-button">
                                    Przejdź do profilu
                                </a>
                            </div>

                        </a>

                        {/* FACEBOOK */}
                        <a
                            href="https://www.facebook.com/Moveability.Olsztyn?locale=pl_PL"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Contact-card"
                            id="sociale2"
                        >

                            <img
                                src="https://imglink.cc/cdn/UcJg87OAwc.png"
                                alt="Facebook"
                                className="contact-icon-image social-icon"
                            />

                            <div className="card-text-content">
                                <p>Facebook</p>
                                <a className="location-button">
                                    Przejdź do profilu
                                </a>
                            </div>

                        </a>

                        {/* BIG CARD */}
                        <div
                            className="Big-card big-card-icon"
                            onClick={() => setIsModalOpen(true)}
                        >

                            <img
                                src="https://imglink.cc/cdn/uNsk30FZfj.png"
                                alt="Kontakt"
                                className="contact-icon-image social-icon big-card-icon-img"
                            />

                            <div className="card-text-content">
                                <h3>Poproś o kontakt</h3>

                                <a className="big-card-btn">
                                    Skontaktuj się
                                </a>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default ContactSection;