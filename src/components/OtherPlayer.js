import React from 'react'
import PlayerCards from './PlayerCards'
import Profile from './Profile'
import PlayersTurnMessage from './PlayersTurnMessage'
//функциональный компонент, получающий в свойства данные карт для отображения
//используется в интерфейсе игрока для обозначения других игроков, их карт и действий с ними 

function OtherPlayer(props) {
        const {player, isActive, showCards} = props.playerplace
        const handoutCards = props.handoutCards
        const cards = props.cards
        const sourceCoordinates = props.sourceCoordinates || {}
        const targetCoordinates = props.targetCoordinates || {}
        
        if(isActive) {
            return (
                <div>
                    <Profile player={player}/>
                    <PlayerCards 
                        cards={cards} 
                        handoutCards={handoutCards} 
                        sourceCoordinates={sourceCoordinates}
                        targetCoordinates={targetCoordinates}
                        showCards={showCards}
                    />
                    <PlayersTurnMessage turn="check" />
                </div>
            )
        } else {
            return <div></div>
        }
}

export default OtherPlayer