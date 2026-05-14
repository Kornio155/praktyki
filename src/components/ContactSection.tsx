import React, {useState} from "react";
import ContactModal from "./ContactModal.tsx";
import "../styleSheets/ContactSection.css";
const ContactSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>

<section id="contact" className="Contact" >
    {/* LEWA STRONA */}
    <div className="Contact-left">
        {[
            { title: 'Email', desc: 'kontakt.mvab@gmail.com' },
            { title: 'Telefon', desc: '+48 695 275 809' },
            {
                title: 'Lokalizacja',
                desc: 'Ul. Olimpijska 1',
                button: true
            },
            { title: 'Dojazd', desc: 'Oferuję dojazd do klienta' }
        ].map((item, index) => (
            <div className="Contact-card" key={index}>
                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                {item.button && (
                    <button
                        className="location-on-map-btn"
                        onClick={() =>
                            window.open(
                                "https://www.google.com/maps/place/MOVEABILITY/@53.7824221,20.4407337,16.75z/data=!4m6!3m5!1s0x46e27ed90860c20d:0x2015610d16d18d5e!8m2!3d53.7822516!4d20.4424293!16s%2Fg%2F11gfhx06jp?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
                                "_blank"
                            )
                        }
                    >
                        Sprawdź lokalizację
                    </button>
                )}
            </div>
        ))}
    </div>
    {/* PRAWA STRONA */}
    <div className="Contact-right">
        <div className="Contact-card" id="sociale1">
            <a href="https://www.instagram.com/moveability_adam_rybaczyk/">
                <img src="https://i.postimg.cc/fTQk4PM1/icons8-instagram-logo-100.png" alt="Instagram" />
            </a>
        </div>
        <div className="Contact-card" id="sociale2">
            <a href="https://www.facebook.com/Moveability.Olsztyn?locale=pl_PL">
                <img src="https://i.postimg.cc/9McqjNds/icons8-facebook-logo-100.png" alt="Facebook" />
            </a>
        </div>
        <div className="Big-card">
            <h3>Poproś o kontakt</h3>
            <p>
                Skontaktuj się mailowo lub telefonicznie, aby ustalić szczegóły współpracy.
            </p>

            <button
                className="big-card-btn"
                onClick={() => setIsModalOpen(true)}
            >
                Otwórz formularz
            </button>
        </div>
    </div>
</section>
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
            </>)}

export default ContactSection;