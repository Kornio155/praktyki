import React from "react";

const FooterContact: React.FC = () => {
    return (
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
    );
};

export default FooterContact;