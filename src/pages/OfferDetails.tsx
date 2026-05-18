import { useParams } from "react-router-dom";
import { offers } from "../data/offers";
import "../styleSheets/OfferDetailsPage.css";

const OfferDetails = () => {
    const { title } = useParams();

    const offer = offers.find(item => item.title === title);

    if (!offer) {
        return <h2>Nie znaleziono oferty</h2>;
    }

    const perks = offer.perks ?? [];

    return (
        <section className="offer-details">

            <div className="offer-details-container">

                <div className="offer-details-image-wrapper">
                    <img
                        className="offer-details-image"
                        src={`https://picsum.photos/1200/500?random=${offer.title}`}
                        alt={offer.title}
                    />
                </div>

                <div className="offer-details-content">

                    <span className="offer-details-tag">
                        Nasza Oferta
                    </span>

                    <h1>{offer.title}</h1>

                    <p>{offer.details}</p>

                    <button className="offer-details-btn">
                        Poproś o kontakt
                    </button>

                </div>

                <div className="offer-perks-orbit">
                    <div className="orbit">

                        {perks.map((item, index) => {
                            const angle =
                                (index / perks.length) * 2 * Math.PI - Math.PI / 2;

                            const radius = 120 + perks.length * 2;

                            const x = Math.cos(angle);
                            const y = Math.sin(angle);

                            return (
                                <div
                                    key={index}
                                    className="orbit-item"
                                    style={{
                                        "--x": x,
                                        "--y": y,
                                        "--radius": `${radius}px`,
                                    } as React.CSSProperties}
                                >
                                    <div className="orbit-icon">
                                        {item.icon}
                                    </div>

                                    <span className="orbit-label">
                                        {item.label}
                                    </span>

                                    <div className="orbit-tooltip">
                                        {item.details}
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>

            </div>

        </section>
    );
};

export default OfferDetails;