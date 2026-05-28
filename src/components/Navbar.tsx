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
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <img src={logo} />
                </Link>

                <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
                    <li><a href="/#contact">Kontakt</a></li>
                    <li><a href="/#offer">Oferta</a></li>
                    <li><a href="/#before-after">Efekty</a></li>
                    <li><Link to="/about">O mnie</Link></li>

                    <button
                        className="navbar-btn mobile-btn"
                        onClick={() => setIsModalOpen(true)}
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