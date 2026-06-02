import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";
import logo from '../assets/logo.svg'
import '../styleSheets/NavBar.css'


const Navbar: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="navbar">

                <Link
                    to="/"
                    className="logo"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setMenuOpen(false); // 🔥 Zamyka menu po kliknięciu w logo
                    }}
                >
                    <img src={logo} alt="Logo" />
                </Link>

                <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
                    <li>
                        <a href="/#contact" onClick={() => setMenuOpen(false)}>
                            Kontakt
                        </a>
                    </li>

                    <li>
                        <a href="/#offer" onClick={() => setMenuOpen(false)}>
                            Oferta
                        </a>
                    </li>

                    <li>
                        <a href="/#before-after" onClick={() => setMenuOpen(false)}>
                            Efekty
                        </a>
                    </li>

                    <li>
                        <Link
                            to="/about"
                            onClick={() => setMenuOpen(false)}
                        >
                            O mnie
                        </Link>
                    </li>

                    {/* Przycisk mobilny na samym dole listy linków */}
                    <button
                        className="navbar-btn mobile-btn mobile-special-btn"
                        onClick={() => {
                            setIsModalOpen(true);
                            setMenuOpen(false); // Zamyka menu po otwarciu modala
                        }}
                    >
                        Poproś o kontakt
                    </button>
                </ul>

                <button
                    className="navbar-btn desktop-btn"
                    onClick={() => setIsModalOpen(true)}
                >
                    Poproś o kontakt
                </button>

                <button
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>

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