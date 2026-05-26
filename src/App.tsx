import React from 'react'
import './App.css'
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import OfferSection from "./components/Offer.tsx";
import BeforeAfterSection from "./components/BeforeAfterSection.tsx";
import FooterContact from "./components/FooterContact.tsx";
import ContactForm from "./components/ContactForm.tsx";
import ContactSection from "./components/ContactSection.tsx";
import About from "./pages/About.tsx";
import OfferDetails from "./pages/OfferDetails";
import { useEffect } from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    useLocation
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

const Home = () => (
    <>
        <Hero />
        <ContactSection />
        <OfferSection />
        <BeforeAfterSection />
        <ContactForm />
    </>
);

const AppContent = () => {
    const location = useLocation();

    const showFooter = location.pathname === "/";

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);

            if (element) {
                // małe opóźnienie pomaga po renderze strony
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location])

    return (
        <div className="app">
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap"
                rel="stylesheet"
            />

            <ScrollToTop />

            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/offer/:slug" element={<OfferDetails />} />
            </Routes>

            {showFooter && <FooterContact />}
        </div>
    );
};

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
};

export default App;