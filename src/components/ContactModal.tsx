import { useState } from "react";
import "../ContactModal.css";

type ContactModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ContactModal({
                                         isOpen,
                                         onClose,
                                     }: ContactModalProps) {
    const [name, setName] = useState<string>("");
    const [contactType, setContactType] = useState<"email" | "phone">("email");

    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");

    const [message, setMessage] = useState<string>(
        "Cześć! proszę o kontakt w sprawie współpracy!"
    );

    if (!isOpen) return null;

    const handlePhoneChange = (value: string) => {
        const numbersOnly = value.replace(/\D/g, "").slice(0, 9);
        setPhone(numbersOnly);
    };

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

        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="contact-modal"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>

                <h2>Poproś o kontakt</h2>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label>Imię*</label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Twoje imię"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Forma kontaktu*</label>

                        <div className="contact-choice">
                            <label>
                                <input
                                    type="radio"
                                    checked={contactType === "email"}
                                    onChange={() => setContactType("email")}
                                />
                                Email
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    checked={contactType === "phone"}
                                    onChange={() => setContactType("phone")}
                                />
                                Telefon
                            </label>
                        </div>
                    </div>

                    {contactType === "email" ? (
                        <div className="form-group">
                            <label>Email*</label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="twoj@email.com"
                                required
                            />
                        </div>
                    ) : (
                        <div className="form-group">
                            <label>Numer telefonu*</label>

                            <div className="phone-input-wrapper">
                                <span className="phone-prefix">+48</span>

                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => handlePhoneChange(e.target.value)}
                                    placeholder="123456789"
                                    maxLength={9}
                                    required
                                />
                            </div>
                        </div>
                    )}

                    <div className="form-group">
                        <label>Wiadomość</label>

                        <textarea
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Cześć! proszę o kontakt w sprawie współpracy!"
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        Wyślij
                    </button>
                </form>
            </div>
        </div>
    );
}