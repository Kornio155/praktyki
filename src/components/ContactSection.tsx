import React, { useState } from "react";
import ContactModal from "./ContactModal.tsx";
import "../styleSheets/ContactSection.css";

const ContactSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeCard, setActiveCard] = useState<string | null>(null);

    // Uniwersalna funkcja obsługująca kliknięcie w kartę na mobilkach
    const handleCardClick = (cardName: string) => {
        if (window.innerWidth <= 650) {
            setActiveCard(cardName);
        }
    };

    // Warunek sprawdzający, czy na mobilu link w przycisku powinien być aktywny
    const isLinkActive = (cardName: string) => {
        if (window.innerWidth <= 650) {
            return activeCard === cardName;
        }
        return true; // Na desktopie linki są zawsze aktywne
    };

    return (
        <>
            <section id="contact" className="Contact">
                <h2>Kontakt</h2>

                <div className="Contact-content">
                    {/* LEWA STRONA */}
                    <div className="Contact-left">
                        {/* EMAIL */}
                        <div
                            className={`Contact-card ${activeCard === "email" ? "active" : ""}`}
                            id="email-card"
                            onClick={() => handleCardClick("email")}
                        >
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
                        <div
                            className={`Contact-card ${activeCard === "phone" ? "active" : ""}`}
                            id="phone-card"
                            onClick={() => handleCardClick("phone")}
                        >
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
                        <div
                            className={`Contact-card ${activeCard === "location" ? "active" : ""}`}
                            id="location-card"
                            onClick={() => handleCardClick("location")}
                        >
                            <img
                                src="https://imglink.cc/cdn/FQCNW5Fo7u.png"
                                alt="Lokalizacja"
                                className="contact-icon-image location-icon"
                            />
                            <div className="card-text-content">
                                <p>Lokalizacja</p>
                                <h3>Ul. Olimpijska 1</h3>
                                <a
                                    href={isLinkActive("location") ? "https://www.google.com/maps/place/MOVEABILITY/@53.7822737,20.4427674,19.25z/data=!4m15!1m8!3m7!1s0x46e27ee39b032a27:0x9b757de379d46f62!2sOlimpijska+1,+10-164+Olsztyn!3b1!8m2!3d53.782428!4d20.4437381!16s%2Fg%2F11cpjmnn7r!3m5!1s0x46e27ed90860c20d:0x2015610d16d18d5e!8m2!3d53.7822516!4d20.4424293!16s%2Fg%2F11gfhx06jp?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D" : undefined}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="location-button"
                                    onClick={(e) => !isLinkActive("location") && e.preventDefault()}
                                >
                                    Zobacz na mapie
                                </a>
                            </div>
                        </div>

                        {/* GODZINY */}
                        <div
                            className={`Contact-card ${activeCard === "hours" ? "active" : ""}`}
                            id="hours-card"
                            onClick={() => handleCardClick("hours")}
                        >
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
                        <div
                            className={`Contact-card ${activeCard === "instagram" ? "active" : ""}`}
                            id="sociale1"
                            onClick={() => handleCardClick("instagram")}
                        >
                            <img
                                src="https://imglink.cc/cdn/c2ZyTzCsyu.png"
                                alt="Instagram"
                                className="contact-icon-image social-icon"
                            />
                            <div className="card-text-content">
                                <p>Instagram</p>
                                <a
                                    href={isLinkActive("instagram") ? "https://www.instagram.com/moveability_adam_rybaczyk/" : undefined}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="location-button"
                                    onClick={(e) => !isLinkActive("instagram") && e.preventDefault()}
                                >
                                    Przejdź do profilu
                                </a>
                            </div>
                        </div>

                        {/* FACEBOOK */}
                        <div
                            className={`Contact-card ${activeCard === "facebook" ? "active" : ""}`}
                            id="sociale2"
                            onClick={() => handleCardClick("facebook")}
                        >
                            <img
                                src="https://imglink.cc/cdn/UcJg87OAwc.png"
                                alt="Facebook"
                                className="contact-icon-image social-icon"
                            />
                            <div className="card-text-content">
                                <p>Facebook</p>
                                <a
                                    href={isLinkActive("facebook") ? "https://www.facebook.com/Moveability.Olsztyn?locale=pl_PL" : undefined}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="location-button"
                                    onClick={(e) => !isLinkActive("facebook") && e.preventDefault()}
                                >
                                    Przejdź do profilu
                                </a>
                            </div>
                        </div>

                        {/* BIG CARD (FORMULARZ / MODAL) */}
                        <div
                            className={`Big-card big-card-icon ${activeCard === "contact" ? "active" : ""}`}
                            onClick={() => {
                                if (window.innerWidth <= 650 && activeCard !== "contact") {
                                    setActiveCard("contact");
                                } else {
                                    setIsModalOpen(true);
                                }
                            }}
                        >
                            <img
                                src="https://imglink.cc/cdn/uNsk30FZfj.png"
                                alt="Kontakt"
                                className="contact-icon-image social-icon big-card-icon-img"
                            />
                            <div className="card-text-content">
                                <h3>Poproś o kontakt</h3>
                                <button
                                    className="big-card-btn"
                                    onClick={(e) => {
                                        // Zapobiega podwójnemu wywołaniu modala, jeśli kliknięto bezpośrednio w przycisk na desktopie
                                        e.stopPropagation();
                                        if (isLinkActive("contact")) {
                                            setIsModalOpen(true);
                                        }
                                    }}
                                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                                >
                                    Skontaktuj się
                                </button>
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