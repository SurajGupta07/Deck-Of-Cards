import { useCard } from "../contexts/cards-context";
import { Card } from "./Card";
import { useCardActions } from "../hooks/useCardActions";
export const AllCards = () => {
    const { cardsData, status, pickedCards } = useCard();
    const {drawCards, shuffleDeck} = useCardActions();
    return (
        <div>
            <div className="cards-container">
                {cardsData &&
                    cardsData.length > 0 &&
                    cardsData.map((card) => <Card {...card} />)}
            </div>
            <div className="items--container">
                <button className="item--btn" onClick={shuffleDeck}>Shuffle</button>
                <button className="item--btn" onClick={() => drawCards(5)}>Draw Cards</button>
            </div>
            {status && <div className="status">{status}</div>}
            <div className="selectedCards--container">
                {pickedCards &&
                    pickedCards.length > 0 &&
                    pickedCards.map((card) => <Card {...card} />)}
            </div>
        </div>
    );
};
