import Clubs from "../assets/clubs.png";
import Diamonds from "../assets/diamond.png";
import Hearts from "../assets/hearts.png";
import Spades from "../assets/spades.png";
import { useCard } from "../contexts/cards-context";

export const useCardActions = () => {
    const {
        cardsData,
        setStatus,
        setSelectedCards,
        setCardsData,
        pickedCards,
        setPickedCards,
    } = useCard();
    const imageURL = ({ suit }) => {
        let imgSrc = "";
        if (suit === "hearts") imgSrc = Hearts;
        else if (suit === "diamonds") imgSrc = Diamonds;
        else if (suit === "clubs") imgSrc = Clubs;
        else {
            imgSrc = Spades;
        }
        return imgSrc;
    };

    const drawCards = (cardsLeft) => {
        setPickedCards([]);
        if (cardsData.length < cardsLeft) {
            setStatus("No more picks left");
            return;
        }
        for (let i = 0; i < cardsLeft; i++) {
            let mycard =
                cardsData[Math.floor(Math.random() * cardsData.length)];
            setPickedCards((cards) => [...cards, mycard]);
        }
        let leftOutCards = cardsData.filter((card) => {
            for (let i = 0; i < pickedCards.length; i++) {
                if (
                    card.value === pickedCards[i].value &&
                    card.suit === pickedCards[i].suit
                )
                    return false;
            }
            return true;
        });
        setSelectedCards(pickedCards);
        setCardsData(leftOutCards);
    };

    const shuffleDeck = () => {
        let shuffledNewDeck = cardsData
            .map((value) => ({ value, sort: Math.random() }))
            .sort((one, two) => one.sort - two.sort)
            .map(({ value }) => value);
        setCardsData(shuffledNewDeck);
        setPickedCards(null);
        setStatus("");
    };

    return {
        imageURL,
        drawCards,
        shuffleDeck,
    };
};
