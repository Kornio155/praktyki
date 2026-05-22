import { useState } from "react";
import "../styleSheets/ContactModal.css";

// import emailjs from "@emailjs/browser";

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

    // 🕵️ honeypot
    const [company, setCompany] = useState("");

    if (!isOpen) return null;

    const handlePhoneChange = (value: string) => {
        setPhone(value.replace(/\D/g, "").slice(0, 9));
    };

    const checkCooldown = () => {
        const lastSend = localStorage.getItem("last_send_time");
        if (lastSend && Date.now() - Number(lastSend) < 60_000) {
            alert("Poczekaj chwilę przed kolejną wiadomością");
            return false;
        }
        return true;
    };

    const checkEmailLimit = (email: string) => {
        const lastEmail = localStorage.getItem(`last_email_${email}`);
        if (lastEmail && Date.now() - Number(lastEmail) < 24 * 60 * 60_000) {
            alert("Już wysłałeś wiadomość w ciągu ostatnich 24h");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 🧨 honeypot
        if (company) return;

        if (!checkCooldown()) return;

        if (contactType === "email") {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(email)) return alert("Zły email");

            if (!checkEmailLimit(email)) return;
        }

        if (contactType === "phone" && !/^\d{9}$/.test(phone)) {
            return alert("Zły telefon");
        }

        const templateParams = {
            name,
            contact_type: contactType,
            email,
            phone: contactType === "phone" ? `+48${phone}` : "",
            message,
        };

        try {
            // await emailjs.send(...)

            localStorage.setItem("last_send_time", String(Date.now()));
            if (email) {
                localStorage.setItem(
                    `last_email_${email}`,
                    String(Date.now())
                );
            }

            alert("Wysłano!");
            onClose();
        } catch (err) {
            console.error(err);
            alert("Błąd wysyłki");
        }

        console.log("EMAILJS PAYLOAD:", templateParams);
    };

    return (
        <div className="cm-overlay" onClick={onClose}>
            <div className="cm-box" onClick={(e) => e.stopPropagation()}>
                <button className="cm-close" onClick={onClose}>
                    ×
                </button>

                <h2>Poproś o kontakt</h2>

                <form onSubmit={handleSubmit} className="cm-form">
                    {/* 🧨 HONEYPOT */}
                    <input
                        name="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        style={{ display: "none" }}
                        autoComplete="off"
                    />

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
                            <input value={email} onChange={(e) => setEmail(e.target.value)} />
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