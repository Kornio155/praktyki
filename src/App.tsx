import React from 'react'
import './App.css'
import { useState } from 'react'


const App: React.FC = () => {
    const [openCard, setOpenCard] = useState<number | null>(null)

    const offers = [
        {
            title: 'Treningi medyczne',
            desc: 'wróć do sprawności bez bólu',
            details: 'Jeśli jesteś po urazie, masz przeciążenia lub dolegliwości bólowe, ten trening pomoże Ci poprawić sprawność, zmniejszyć ból i bezpiecznie wrócić do aktywności, żebyś znów mógł czuć się pewnie we własnym ciele i funkcjonować bez ograniczeń.'
        },
        {
            title: 'Treningi funkcjonalne',
            desc: 'zdrowe funkcjonowanie na co dzień',
            details: 'dużo siedzisz? ten trening jest dla ciebie. świetnie sprawdzi się jako rekompensata siedzącego trybu życia. Trening funkcjonalny omoże Ci lepiej "funkcjonować" w codziennych czynnościach'
        },
        {
            title: 'Odchudzanie',
            desc: 'tłuszcz się pali!',
            details: 'Jeśli Twoim celem jest pozbycie się nadmiernych kilogramów, , ten trening połączy intensywną pracę z dopasowaniem do Twoich możliwości, dzięki czemu efekty będą widoczne, a proces bezpieczny.'
        },
        {
            title: 'Treningi motoryczne',
            desc: 'lepsze wyniki w twojej dyscyplinie',
            details: 'Jeśli jesteś sportowcem lub osobą regularnie trenującą, ten trening pomoże Ci rozwinąć siłę, szybkość, moc i koordynację czyli efekty Twojej pracy'
        },
        {
            title: 'Treningi ogólnorozwojowe',
            desc: 'coś więcej niż siła',
            details: 'popraw kondycję, siłę, sprawność i samopoczucie!  ten wszechstronny trening da Ci solidną bazę do lepszej sprawności, większej energii na co dzień i zdrowszego stylu życia. \n' +
                'Niekonwencjonalne ćwiczenia z dziedzin streetmovement, animaln movement lub gimnastyki pomogą ci się rozwinąć, i dodadzą nutkę świetnej zabawy!'
        },
        {
            title: 'Gry i zabawy',
            desc: 'aktywność, integracja, dobra zabawa!',
            details: 'Jeśli szukasz aktywnej formy zajęć dla grup zapraszam do kontaktu! Prowadzę szereg gier i zabaw ruchowych, które zapewnią ruch, integrację i pozytywne doświadczenia w dobrej atmosferze w każdej ekipie!'
        }
    ]

    const toggleCard = (index: number) => {
        setOpenCard(openCard === index ? null : index)}
    return (
        <div className="app">

            {/* NAVBAR */}
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
                    onClick={() =>
                        document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth"
                        })
                    }
                >
                    Umów trening
                </button>

            </nav>

            {/* HERO */}
            <section className="hero">
                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <h1>
                        IT'S TIME TO <br />
                        BE HEALTHY <br />
                        AND IN <br />
                        GREAT SHAPE
                    </h1>

                    <p>
                        Personal training, mobility & performance
                    </p>

                    <button className="btn hero-btn">
                        Skontaktuj się już dziś
                    </button>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="Contact" > {/* LEWA STRONA */}
                <div className="Contact-left">
                    {[ { title: 'Email' , desc: 'kontakt.mvab@gmail.com' },
                        { title: 'Telefon', desc: '+48 695 275 809' },
                        { title: 'Lokalizacja', desc: 'Ul. Olimpijska 1' },
                        { title: 'Dojazd', desc: 'Oferuję dojazd do klienta' } ]
                        .map((item, index) => (
                            <div className="Contact-card" key={index}><h3>{item.title}</h3> <p>{item.desc}</p> </div>
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
                        <h3>Umów trening</h3>
                        <p> Skontaktuj się mailowo lub telefonicznie, aby ustalić szczegóły współpracy. </p>
                    </div>
                </div>
            </section>

            {/* OFFER */}
            <section id="offer" className="offer">

                <h2>Nasze Oferty</h2>

                <div className="offer-grid">

                    {offers.map((item, index) => (

                        <div className="card" key={index}>
                            {openCard === index ? (
                                <div className="card-inner details-card">
                                    <h3>{item.title}</h3>
                                    <p>{item.details}</p>

                                    <button className="details-btn" onClick={() => toggleCard(index)}>
                                        Zamknij
                                    </button>
                                </div>
                            ) : (
                                <div className="card-inner">
                                    <h3>{item.title}</h3>

                                    <div className="img-wrapper">
                                        <img
                                            className="offer-grid-img"
                                            src={`https://picsum.photos/300/200?random=${index}`}
                                        />
                                    </div>

                                    <p className="card-desc">{item.desc}</p>

                                    <button className="details-btn" onClick={() => toggleCard(index)}>
                                        Pokaż szczegóły
                                    </button>
                                </div>
                            )}
                        </div>

                    ))}

                </div>

            </section>

            {/* LOCATION */}
            <section className="location">
                <h2>Lokalizacja</h2>
                <p>
                    Tu bym dał krótki opis jaka ta lokalizacja
                    ładna nie jest, jakiego to sprzętu tam nie ma itp
                </p>

                <button
                    className="btn dark"
                    onClick={() =>
                        window.open(
                            "https://www.google.com/maps/place/MOVEABILITY/@53.7824221,20.4407337,16.75z/data=!4m6!3m5!1s0x46e27ed90860c20d:0x2015610d16d18d5e!8m2!3d53.7822516!4d20.4424293!16s%2Fg%2F11gfhx06jp?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
                            "_blank"
                        )
                    }
                >Sprawdź lokalizacje</button>
            </section>

            {/* BEFORE AFTER */}
            <section id="before-after" className="section before-after">
                <h2>Przed i po</h2>

                <div className="ba-slider">
                    <div className="ba-track">
                        {[1, 2, 3, 4, 1, 2, 3, 4].map((item, index) => (
                            <div className="ba-item" key={index}>
                                <img
                                    src={`https://picsum.photos/300/300?random=${item}`}
                                    alt="before after"
                                />
                                <p>
                                    Opis treningów klienta oraz jego
                                    <br />
                                    wiek i imię
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section className="section contact">
                <h2>Lokalizacja</h2>

                <div className="contact-grid">

                    <div>
                        <p>Olimpijska, 10-001 Olsztyn</p>
                        <p>Możliwy też dojazd do klienta</p>

                        <p>
                            +48 695 275 809 <br />
                            Kontakt.mvab@gmail.com
                        </p>
                    </div>

                    <div>
                        <h3>Godziny otwarcia</h3>
                        <p>Poniedziałek – Piątek</p>
                        <p>8:15 - 21:00</p>
                        <p>Weekend: zamknięte</p>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default App