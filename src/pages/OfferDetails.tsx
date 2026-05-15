import { useParams } from "react-router-dom";
import { offers } from "../data/offers";

const OfferDetails = () => {
    const { title } = useParams();

    const offer = offers.find(item => item.title === title);

    if (!offer) {
        return <h2>Nie znaleziono oferty</h2>;
    }

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

                    <p>
                        {offer.details}
                    </p>

                    <button className="offer-details-btn">
                        Poproś o kontakt
                    </button>

                </div>

            </div>

        </section>
    );
};

export default OfferDetails;