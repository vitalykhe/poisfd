import React, {useState, useEffect} from 'react'
import Card from './card.js'
import PlayerCards from './PlayerCards'
import cardsCollection from './cardsCollection'

//получаем состояние активного игрока откуда нибудь(бэкенд)

function PovPlayer(props) {

    const activeHandInitialState = {
        inGame: props.inGame,
        fold: props.fold,
        check: props.check,
        showHand: props.showHand,
        cards: props.cards,
        stake: props.minStake
    }

    const [activeHandState, updateActiveHand] = useState(activeHandInitialState)

    useEffect(()=>{
        //действия  после изменения игроком состояния компонента
        //отправка на BE 
        //эффекты 
    })
    
    const makeStake = (value) => {
        updateActiveHand( stake => stake + value,);
    }
    const doFlop = () => {
        updateActiveHand( fold => !fold);
    }
    const sayCheck = () => {
        updateActiveHand( check => !check);
    }
    const showHand = () => {
        updateActiveHand( showHand => !showHand);
    }

        const playerCardsIDs = activeHandState.cards
        const playerCards = cardsCollection
                                .filter( card => playerCardsIDs.indexOf(card.cardId) !== -1 )
                                  .map((card, index) => 
                                    <Card key={card.cardId} card={card}/>)
        return (
            <div>
                <div className="row">
                    <div className="col">
                        {playerCards}
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <span className="badge badge-primary">Primary</span>
                        <span className="badge badge-secondary">Secondary</span>
                        <span className="badge badge-success">Success</span>
                        <input type="range" list="tickmarks" step="20"/>
                            <datalist id="tickmarks">
                                <option value="100" label="100"/>
                                <option value="500" label="500"/>
                            </datalist>
                    </div>
                </div>
            </div>
                    

        )

}

export default PovPlayer