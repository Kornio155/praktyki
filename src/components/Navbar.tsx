import React, { useState } from "react";
import ContactModal from "./ContactModal";

const Navbar: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <nav className="navbar">

                <a href="#" className="logo">
                    <img src="https://imglink.cc/cdn/1iRVnCicOP.svg" />
                </a>

                <ul className="navbar-links">
                    <li><a href="#contact">Kontakt</a></li>
                    <li><a href="#offer">Oferta</a></li>
                    <li><a href="#before-after">Efekty</a></li>
                    <li>O mnie</li>
                </ul>

                <button
                    className="navbar-btn"
                    onClick={() => setIsModalOpen(true)}
                >
                    Poproś o kontakt
                </button>
            </nav>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default Navbar;