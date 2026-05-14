import ContactModal from "./ContactModal.tsx";
import {useState} from "react";

const ContactForm: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    /* useState'y do formularza */
    const [name, setName] = useState("");
    const [contactType, setContactType] =
        useState<"email" | "phone">("email");

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [message, setMessage] = useState(
        "Cześć! proszę o kontakt w sprawie współpracy!"
    );
    /* koniec useState'ów do formularza */

    /* funkcje do formularza */

    const handlePhoneChange = (value: string) => {
        const numbersOnly =
            value.replace(/\D/g, "").slice(0, 9);

        setPhone(numbersOnly);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log({
            name,
            contactType,
            email,
            phone,
            message,
        });
    };
    return(
        <>
        <section className="ContactForm">

        <div className="contact-form-container">

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

                        <span className="phone-prefix">
                            +48
                        </span>

                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) =>
                                handlePhoneChange(e.target.value)
                            }
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

</section>
<ContactModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
/> </>)}
export default ContactForm;