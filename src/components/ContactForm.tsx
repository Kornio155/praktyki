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

    const [company, setCompany] = useState("");
    const [loading, setLoading] = useState(false);

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
        const key = email.toLowerCase();
        const lastEmail = localStorage.getItem(`last_email_${key}`);

        if (lastEmail && Date.now() - Number(lastEmail) < 24 * 60 * 60_000) {
            alert("Już wysłałeś wiadomość w ciągu ostatnich 24h");
            return false;
        }
        return true;
    };

    const resetForm = () => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("Cześć! proszę o kontakt w sprawie współpracy!");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (company) return;
        if (!checkCooldown()) return;

        if (name.trim().length < 2) {
            return alert("Podaj poprawne imię");
        }

        if (contactType === "email") {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(email)) return alert("Zły email");
            if (!checkEmailLimit(email)) return;
        }

        if (contactType === "phone" && !/^\d{9}$/.test(phone)) {
            return alert("Zły telefon");
        }

        // 🔥 POTWIERDZENIE PRZED WYSYŁKĄ
        const confirmed = window.confirm(
            "Czy dane są poprawne?\n\nPo wysłaniu nie będziesz mógł wysłać kolejnej wiadomości przez 12 godzin."
        );

        if (!confirmed) return;

        setLoading(true);

        try {
            const res = await fetch("/api/send-mail.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    contact_type: contactType,
                    email,
                    phone: contactType === "phone" ? `+48${phone}` : "",
                    message,
                    company,
                }),
            });

            const data = await res.json();

            if (!data.success) {
                throw new Error(data.message || "Błąd wysyłki");
            }

            localStorage.setItem("last_send_time", String(Date.now()));

            if (email) {
                localStorage.setItem(
                    `last_email_${email.toLowerCase()}`,
                    String(Date.now())
                );
            }

            alert("Formularz wysłany!");
            resetForm();
            setIsOpen(false);

        } catch (err) {
            console.error(err);
            alert("Błąd wysyłki");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="cf-section">
            <h2 className="cf-title">Skontaktuj się już dziś!</h2>

            <div className="cf-container">
                {!isOpen ? (
                    <button className="cf-button" onClick={() => setIsOpen(true)}>
                        Poproś o kontakt
                    </button>
                ) : (
                    <div className="cf-box">
                        <button className="cf-close" onClick={() => setIsOpen(false)}>
                            ×
                        </button>

                        <form onSubmit={handleSubmit} className="cf-form">

                            <input
                                name="company"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                style={{ display: "none" }}
                                autoComplete="off"
                            />

                            <div className="cf-group">
                                <label>Imię*</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div className="cf-group">
                                <label>Kontakt</label>

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
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            ) : (
                                <div className="cf-group">
                                    <label>Telefon*</label>
                                    <div className="cf-phone">
                                        <span className="cf-prefix">+48</span>

                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => handlePhoneChange(e.target.value)}
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="cf-group">
                                <label>Wiadomość</label>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>

                            <button className="cf-submit" disabled={loading}>
                                {loading ? "Wysyłanie..." : "Wyślij"}
                            </button>

                        </form>
                    </div>
                )}
            </div>
        </section>
    );
}