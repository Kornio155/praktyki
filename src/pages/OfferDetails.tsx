import { useParams } from "react-router-dom";
import { offers } from "../data/offers";

const OfferDetails = () => {
    const { id } = useParams();

    const offer = offers[Number(id)];

    if (!offer) {
        return <h2>Nie znaleziono oferty</h2>;
    }

    return (
        <section>
            <h1>{offer.title}</h1>

            <img
                src={`https://picsum.photos/600/300?random=${id}`}
                alt={offer.title}
            />

            <p>{offer.details}</p>
        </section>
    );
};

export default OfferDetails;