import React, { useState } from "react";
import ContactModal from "./ContactModal.tsx";
import "../styleSheets/ContactSection.css";

const ContactSection: React.FC = () => {

    const [emailOpen, setEmailOpen] = useState(false);
    const [phoneOpen, setPhoneOpen] = useState(false);
    const [locationOpen, setLocationOpen] = useState(false);
    const [hoursOpen, setHoursOpen] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id="contact" className="Contact">

                {/* LEWA STRONA */}
                <div className="Contact-left">

                    {/* EMAIL */}
                    <div
                        className="Contact-card"
                        id="email-card"
                        onClick={() => setEmailOpen(!emailOpen)}
                    >

                        {emailOpen ? (

                            <div className="card-text-content">
                                <h3>Email</h3>
                                <p>kontakt.mvab@gmail.com</p>
                            </div>

                        ) : (

                            <img
                                src="https://imglink.cc/cdn/BL1Fl_EFtu.png"
                                alt="Email"
                                className="contact-icon-image email-icon"
                            />

                        )}

                    </div>

                    {/* TELEFON */}
                    <div
                        className="Contact-card"
                        id="phone-card"
                        onClick={() => setPhoneOpen(!phoneOpen)}
                    >

                        {phoneOpen ? (

                            <div className="card-text-content">
                                <h3>Telefon</h3>
                                <p>+48 695 275 809</p>
                            </div>

                        ) : (

                            <img
                                src="https://imglink.cc/cdn/p2R12TQnAg.png"
                                alt="Telefon"
                                className="contact-icon-image phone-icon"
                            />

                        )}

                    </div>

                    {/* LOKALIZACJA */}
                    <div
                        className="Contact-card"
                        id="location-card"
                        onClick={() => setLocationOpen(!locationOpen)}
                    >

                        {locationOpen ? (

                            <div className="card-text-content">
                                <h3>Lokalizacja</h3>
                                <p>Ul. Olimpijska 1</p>
                                <a
                                    href="https://www.google.com/maps/place/MOVEABILITY/@53.7822737,20.4427674,19.25z/data=!4m15!1m8!3m7!1s0x46e27ee39b032a27:0x9b757de379d46f62!2sOlimpijska+1,+10-164+Olsztyn!3b1!8m2!3d53.782428!4d20.4437381!16s%2Fg%2F11cpjmnn7r!3m5!1s0x46e27ed90860c20d:0x2015610d16d18d5e!8m2!3d53.7822516!4d20.4424293!16s%2Fg%2F11gfhx06jp?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="location-button"
                                >
                                    Zobacz na mapie
                                </a>
                            </div>

                        ) : (

                            <img
                                src="https://imglink.cc/cdn/FQCNW5Fo7u.png"
                                alt="Lokalizacja"
                                className="contact-icon-image location-icon"
                            />

                        )}

                    </div>

                    {/* GODZINY */}
                    <div
                        className="Contact-card"
                        id="hours-card"
                        onClick={() => setHoursOpen(!hoursOpen)}
                    >

                        {hoursOpen ? (

                            <div className="card-text-content">
                                <h3>Godziny</h3>
                                <p>pn.-pt. 08:15-21:00</p>
                            </div>

                        ) : (

                            <img
                                src="https://imglink.cc/cdn/CnSseZg6Uf.png"
                                alt="Godziny"
                                className="contact-icon-image clock-icon"
                            />

                        )}

                    </div>

                </div>

                {/* PRAWA STRONA */}
                <div className="Contact-right">

                    <div className="Contact-card" id="sociale1">

                        <a
                            href="https://www.instagram.com/moveability_adam_rybaczyk/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <img
                                src="https://imglink.cc/cdn/c2ZyTzCsyu.png"
                                alt="Instagram"
                                className="contact-icon-image social-icon"

                            />

                        </a>

                    </div>

                    <div className="Contact-card" id="sociale2">

                        <a
                            href="https://www.facebook.com/Moveability.Olsztyn?locale=pl_PL"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <img
                                src="https://imglink.cc/cdn/UcJg87OAwc.png"
                                alt="Facebook"
                                className="contact-icon-image social-icon"
                            />

                        </a>

                    </div>

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