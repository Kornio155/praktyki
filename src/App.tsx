import React from 'react'
import './App.css'

const App: React.FC = () => {
    return (
        <div className="app">

            {/* HERO */}
            <section className="hero">
                <div className="hero-left">
                    <h1>
                        It's time to <br />
                        be healthy <br />
                        and in <br />
                        great shape
                    </h1>

                    <button className="btn">Skontaktuj się już dziś</button>
                </div>

                <div className="hero-right">
                    <img src="https://picsum.photos/800/1000" alt="trainer" />
                </div>
            </section>

            {/* Contact */}
            <section className="Contact"> {/* LEWA STRONA */}
                <div className="Contact-left">
                    {[ { title: 'Email', desc: 'twoj@email.pl' },
                        { title: 'Telefon', desc: '+48 000 000 000' },
                        { title: 'Lokalizacja', desc: 'Ul. Olimpijska 1' },
                        { title: 'Dojazd', desc: 'Oferuję dojazd do klienta' } ]
                        .map((item, index) => (
                            <div className="Contact-card" key={index}><h3>{item.title}</h3> <p>{item.desc}</p> </div>
                        ))}
                </div>
                {/* PRAWA STRONA */}
                <div className="Contact-right">
                    <div className="Contact-card">
                        <h3>Instagram</h3>
                        <p>@moveability</p>
                    </div>
                    <div className="Contact-card">
                        <h3>Facebook</h3>
                        <p>MoveAbility</p>
                    </div>
                    <div className="Big-card">
                        <h3>Umów trening</h3>
                        <p> Skontaktuj się mailowo lub telefonicznie, aby ustalić szczegóły współpracy. </p>
                    </div>
                </div>
            </section>

            {/* OFFER */}
            <section className="offer">
                <h2>Pełna Oferta</h2>

                <div className="offer-grid">
                    {[
                        { title: 'Treningi medyczne', desc: 'Jakiś krótki opis' },
                        { title: 'Treningi funkcjonalne', desc: 'Jakiś krótki opis' },
                        { title: 'Odchudzanie', desc: 'Jakiś krótki opis' },
                        { title: 'Treningi motoryczne', desc: 'I tu też jakiś krótki opis' }
                    ].map((item, index) => (
                        <div className="card" key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

                <button className="btn">Skontaktuj się z nami</button>
            </section>

            {/* LOCATION */}
            <section className="location">
                <h2>Lokalizacja</h2>
                <p>
                    Tu bym dał krótki opis jaka ta lokalizacja
                    ładna nie jest, jakiego to sprzętu tam nie ma itp
                </p>

                <button className="btn dark" >Sprawdź lokalizacje</button>
            </section>

            {/* BEFORE AFTER */}
            <section className="section before-after">
                <h2>Przed i po</h2>

                <div className="ba-grid">
                    {[1, 2, 3, 4].map((item) => (
                        <div className="ba-item" key={item}>
                            <img src={`https://picsum.photos/300/300?random=${item}`} alt="before after" />
                            <p>
                                Opis treningów klienta oraz jego<br />
                                wiek i imię
                            </p>
                        </div>
                    ))}
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