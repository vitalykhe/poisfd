import React, {useState} from 'react'
import Card from './card.js'
import cardsCollection from './cardsCollection'

//получаем состояние активного игрока откуда нибудь(бэкенд)

const activeHandInitialState = {
    cards: [1,12],
    stake: 0,
    pass: false
}

function Player () {
    
    const [activeHandState, updateActiveHand] = useState(activeHandInitialState)

    const makeStake = (value) => {
        updateActiveHand(stake => stake + value);
    }

        const playerCardsIDs = activeHandState.cards
        const playerCards = cardsCollection
                                .filter( card => playerCardsIDs.indexOf(card.cardId) !== -1 )
                                  .map((card, index) => 
                                    <div className="cardPlaceholder"><Card key={card.cardId} card={card} cardSeq={index} /></div>)
        return (
            <div className="cards">
                {playerCards}
            </div>
        )

}

export default Player