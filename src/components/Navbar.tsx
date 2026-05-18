import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

const Navbar: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <nav className="navbar">

                <Link to="/" className="logo">
                    <img src="https://imglink.cc/cdn/1iRVnCicOP.svg" />
                </Link>

                <ul className="navbar-links">
                    <li><a href="/#contact">Kontakt</a></li>
                    <li><a href="/#offer">Oferta</a></li>
                    <li><a href="/#before-after">Efekty</a></li>
                    <li><a href="/#about">O mnie</a></li>
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