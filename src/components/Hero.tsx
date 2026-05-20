import React, {useState} from "react";
import ContactModal from "./ContactModal";
import '../styleSheets/HeroSection.css'

import fullLogo from '../assets/logo_calosc.svg'

const Hero: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <section className="hero">
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <img src={fullLogo}/>

                <p>
                    Treningi personalne, medyczne, funkcjonalne, motoryczne
                </p>

                <button className="btn hero-btn"
                        onClick={() => setIsModalOpen(true)}
                >
                    Poproś o kontakt
                </button>
            </div>
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default Hero;