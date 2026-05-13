import React from 'react'
import './App.css'
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import OfferSection from "./components/Offer.tsx";
import BeforeAfterSection from "./components/BeforeAfterSection.tsx";
import FooterContact from "./components/FooterContact.tsx";
import ContactForm from "./components/ContactForm.tsx";
import ContactSection from "./components/ContactSection.tsx";


const App: React.FC = () => {

    /*-----------------------------------------------*/

    return (
        <div className="app">
            <Navbar/>

            <Hero/>

            <ContactSection/>

            <OfferSection/>

            <BeforeAfterSection/>

            <ContactForm/>

            <FooterContact/>
        </div>
    )
}

export default App