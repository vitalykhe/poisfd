import React from 'react'
import Card from './card.js'
import cardsCollection from './cardsCollection'

//функциональный компонент, получающий в свойства данные карт для отображения
//используется в интерфейсе игрока для обозначения других игроков, их карт и действий с ними 

function OtherPlayer(props) {
        let style={
            width: "30%"
        }
        // const playerImageStyle={
        //     background-image: url(playerProfile.image)
        // }
        const playerProfile = props.playerProfile
        const playerCardsIDs = props.cards
        const playerCards = cardsCollection
                                .filter( card => playerCardsIDs.indexOf(card.cardId) !== -1 )
                                  .map((card) => {
                                        return <Card key={card.cardId} card={card} style={style}/>
                                  }
                                )
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <p>
                            {playerProfile.name}
                            
                        </p>

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {playerCards}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>{props.turn}</p>
                    </div>
                </div>
            </div>
        )
}

export default OtherPlayer