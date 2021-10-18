import { useState, useContext } from "react";
import { createContext } from "react";
import { cardsDetails } from "../db/cardsDB";

export const CardContext = createContext();

export function CardProvider({ children }) {
    const [cardsData, setCardsData] = useState(cardsDetails);
    const [selectedCards, setSelectedCards] = useState(null);
    const [status, setStatus] = useState("");
    const [pickedCards, setPickedCards] = useState([]);

    return (
        <CardContext.Provider
            value={{
                cardsData,
                setCardsData,
                selectedCards,
                setSelectedCards,
                status,
                setStatus,
                pickedCards,
                setPickedCards
            }}
        >
            {children}
        </CardContext.Provider>
    );
}

export function useCard() {
    return useContext(CardContext);
}
