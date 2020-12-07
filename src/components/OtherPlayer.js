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
        
        return (
            <div>
                <Profile profile={profile}/>
                <OtherPlayerCards cards={cards} showCards={showCards} handoutCards={handoutCards}/>
                <PlayersTurnMessage turn="check" />
            </div>
        )
}

export default OtherPlayer