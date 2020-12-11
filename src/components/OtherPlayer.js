import React from 'react'
import OtherPlayerCards from './OtherPlayerCards'
import Profile from './Profile'
import PlayersTurnMessage from './PlayersTurnMessage'
//функциональный компонент, получающий в свойства данные карт для отображения
//используется в интерфейсе игрока для обозначения других игроков, их карт и действий с ними 

function OtherPlayer(props) {

        const profile = props.profile
        const showCards = props.showCards
        const cards = props.cards
        const handoutCards = props.handoutCards
        const deckCoordinates = props.deckCoordinates ? props.deckCoordinates : {top: `100px` , left: `100px`}
        const inGame = props.inGame

        if(inGame) {

            return (
                <div>
                    <Profile profile={profile}/>
                    <OtherPlayerCards cards={cards} showCards={showCards} handoutCards={handoutCards} deckCoordinates={deckCoordinates}/>
                    <PlayersTurnMessage turn="check" />
                </div>
            )
        } else {
            return <div></div>
        }
}

export default OtherPlayer