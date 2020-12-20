import React from 'react';
import cardsCollection from './cardsCollection'
import Card from './card.js'
import {Transition} from 'react-transition-group'

export default function PlayerCards(props) {
    const {
        cards,
        handoutCards,
        sourceCoordinates,
        targetCoordinates, 
        showCards,
    } = props

    //transition parameters

    let isCardOnBottomClass = ""
    let cardsOnBottomStyles = {}
    if(showCards === true) { 
        isCardOnBottomClass = "cardOnBottom"
    }

    let dx = sourceCoordinates.x - targetCoordinates.x
    let dy = targetCoordinates.y - sourceCoordinates.y
    let offsetX = sourceCoordinates.width/4
    let offsetY = sourceCoordinates.height/4
 
    const transitionStyles = {
        entering: { 
            opacity: 0,
            transform: `translateX(${dx+offsetX}px) translateY(${-dy - offsetY}px) rotate(360deg)`,
            transitionDuration: '300ms',
        },
        entered:  { 
            opacity: 1,
            transitionFunction : 'ease-out',
            transitionDuration: '900ms'
        },
        exiting:  { 
            opacity: 1,
            transitionDuration: '600ms',
            transform: `translateX(${dx + offsetX}px) translateY(${-dy-offsetY}px) rotate(360deg)`,
        },
        exited:  { 
            opacity: 0, 
        },
      }

    return (
           cardsCollection
            .filter( card => cards.indexOf(card.cardId) !== -1 )
            .map((card,index) => 
            (
                <Transition 
                    timeout={1000} 
                    key={index} 
                    in={handoutCards} 
                    // mountOnEnter unmountOnExit
                    >
                    {
                        state => 
                            <Card 
                                card={card} 
                                className={`otherPlayerCard-${index} ${isCardOnBottomClass} ${state}`}
                                style={{...transitionStyles[state], ...cardsOnBottomStyles}}
                            />
                    }
                </Transition>
            )
            )
    )

}