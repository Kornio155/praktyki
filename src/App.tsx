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

import { BrowserRouter, Routes, Route } from "react-router-dom";

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

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap"
                      rel="stylesheet"/>
                <ScrollToTop />

                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/offer/:slug" element={<OfferDetails />} />
                </Routes>

                <FooterContact />

            </div>
        </BrowserRouter>
    )
}

export default App