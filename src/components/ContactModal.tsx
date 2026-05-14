import { useState } from "react";
import "../styleSheets/ContactModal.css";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: Props) {
    const [name, setName] = useState("");
    const [contactType, setContactType] = useState<"email" | "phone">("email");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState(
        "Cześć! proszę o kontakt w sprawie współpracy!"
    );

    if (!isOpen) return null;

    const handlePhoneChange = (value: string) => {
        setPhone(value.replace(/\D/g, "").slice(0, 9));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (name.trim().length < 2) return alert("Imię za krótkie");

        if (contactType === "email") {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(email)) return alert("Zły email");
        }

        if (contactType === "phone" && !/^\d{9}$/.test(phone)) {
            return alert("Zły telefon");
        }

        console.log({
            name,
            contactType,
            email,
            phone: `+48${phone}`,
            message,
        });

        alert("OK");
        onClose();
    };

    return (
        <div className="cm-overlay" onClick={onClose}>
            <div className="cm-box" onClick={(e) => e.stopPropagation()}>
                <button className="cm-close" onClick={onClose}>
                    ×
                </button>

                <h2>Poproś o kontakt</h2>

                <form onSubmit={handleSubmit} className="cm-form">
                    <div className="cm-group">
                        <label>Imię</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="cm-group">
                        <label>Kontakt</label>

                        <div className="cm-choice">
                            <button
                                type="button"
                                className={`cm-option ${contactType === "email" ? "active" : ""}`}
                                onClick={() => setContactType("email")}
                            >
                                Email
                            </button>

                            <button
                                type="button"
                                className={`cm-option ${contactType === "phone" ? "active" : ""}`}
                                onClick={() => setContactType("phone")}
                            >
                                Telefon
                            </button>
                        </div>
                    </div>

                    {contactType === "email" ? (
                        <div className="cm-group">
                            <label>Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    ) : (
                        <div className="cm-group">
                            <label>Telefon</label>

                            <div className="cm-phone">
                                <span className="cm-prefix">+48</span>

                                <input
                                    value={phone}
                                    onChange={(e) => handlePhoneChange(e.target.value)}
                                    maxLength={9}
                                />
                            </div>
                        </div>
                    )}

                    <div className="cm-group">
                        <label>Wiadomość</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    <button className="cm-submit">Wyślij</button>
                </form>
            </div>
        </div>
    );
}