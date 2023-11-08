import React from "react";

function CreateCard(card) {
    return (
        <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label="Tense Biceps">
                    {card.emoji}
                </span>
                <span>{card.name}</span>
            </dt>
            <dd>{card.meaning}</dd>
        </div>
    );
}

export default CreateCard;