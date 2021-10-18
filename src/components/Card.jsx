import { useCardActions } from "../hooks/useCardActions";

export const Card = ({ suit, value }) => {
    const { imageURL } = useCardActions();
    const imageValue = imageURL({ suit });

    return (
        <div className="cards">
            <div className="top-item">
                <div>{value}</div>
                <img src={imageValue} alt="suit" style={{width: '20px'}}/>
            </div>
            <div>
                <img src={imageValue} alt="suit" className="center-img"/>
            </div>
            <div className="bottom-item">
                <div>{value}</div>
                <img src={imageValue} alt="suit" style={{width: '20px'}}/>
            </div>
        </div>
    );
};
