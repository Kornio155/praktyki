import { useState } from "react";
import "../styleSheets/ContactForm.css";

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [contactType, setContactType] = useState<"email" | "phone">("email");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState(
        "Cześć! proszę o kontakt w sprawie współpracy!"
    );

    const handlePhoneChange = (value: string) => {
        const numbersOnly = value.replace(/\D/g, "").slice(0, 9);
        setPhone(numbersOnly);
    };

    const handleClose = () => setIsOpen(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (name.trim().length < 2) {
            alert("Podaj poprawne imię");
            return;
        }

        if (contactType === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Podaj poprawny adres email");
                return;
            }
        }

        if (contactType === "phone") {
            if (!/^\d{9}$/.test(phone)) {
                alert("Numer telefonu musi mieć 9 cyfr");
                return;
            }
        }

        console.log({
            name,
            contactType,
            email,
            phone: `+48${phone}`,
            message,
        });

        alert("Formularz wysłany!");
        handleClose();
    };

    return (
        <section className="cf-section">
            <div className="cf-container">
                {!isOpen ? (
                    <button
                        className="cf-button"
                        onClick={() => setIsOpen(true)}
                    >
                        Poproś o kontakt
                    </button>
                ) : (
                    <div className="cf-box">
                        <button className="cf-close" onClick={handleClose}>
                            ×
                        </button>

                        <h2>Poproś o kontakt</h2>

                        <form onSubmit={handleSubmit} className="cf-form">
                            <div className="cf-group">
                                <label>Imię*</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="cf-group">
                                <label>Forma kontaktu*</label>

                                <div className="cf-choice">
                                    <button
                                        type="button"
                                        className={`cf-option ${contactType === "email" ? "active" : ""}`}
                                        onClick={() => setContactType("email")}
                                    >
                                        Email
                                    </button>

                                    <button
                                        type="button"
                                        className={`cf-option ${contactType === "phone" ? "active" : ""}`}
                                        onClick={() => setContactType("phone")}
                                    >
                                        Telefon
                                    </button>
                                </div>
                            </div>

                            {contactType === "email" ? (
                                <div className="cf-group">
                                    <label>Email*</label>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        required
                                    />
                                </div>
                            ) : (
                                <div className="cf-group">
                                    <label>Telefon*</label>
                                    <div className="cf-phone">
                                        <span className="cf-prefix">+48</span>
                                        <input
                                            value={phone}
                                            onChange={(e) =>
                                                handlePhoneChange(e.target.value)
                                            }
                                            maxLength={9}
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="cf-group">
                                <label>Wiadomość</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>

                            <button className="cf-submit" type="submit">
                                Wyślij
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </section>
    );
}