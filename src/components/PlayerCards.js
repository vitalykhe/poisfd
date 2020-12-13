import React from 'react';
import cardsCollection from './cardsCollection'
import Card from './card.js'
import {Transition} from 'react-transition-group'



export default function PlayerCards(props) {
    const {
        cards,
        handoutCards,
        deckCoordinates,
        placeCoordinates, 
        showCards,
    } = props

    console.log(showCards)

    let additionalStyles = {}
    // if(playerplace["showCards"] === true) {  additionalStyles = { 'z-index' : '-1' } }

    let dx = deckCoordinates.x - placeCoordinates.x
    let dy = placeCoordinates.y - deckCoordinates.y
    let offsetX = deckCoordinates.width/4
    let offsetY = deckCoordinates.height/4

    // console.log("deck top: " + deckCoordinates);
    // console.log("placeCoordinates left: " + placeCoordinates);
    
    const transitionStyles = {
        entering: { 
            opacity: 1,
            transform: `translateX(${dx+offsetX}px) translateY(${-dy - offsetY}px) rotate(360deg)`,
            // top: `${deckCoordinates.top-42}px`, 
            // left: `${deckCoordinates.left+1}px`, 
            'transitionDuration': '1000ms',
            'transition-function' : 'ease-out',
        },
        entered:  { 
            opacity: 1,
            // transform:  `rotate(360deg)`, 
            // top: `${deckCoordinates.top-41}px`, 
            // left: `${deckCoordinates.left}px`, 
            'transitionDuration': '1000ms'
        },
        exiting:  { 
            opacity: 1,
            'transitionDuration': '600ms',
            transform: `translateX(${dx + offsetX}px) translateY(${-dy-offsetY}px) rotate(360deg)`,
        },
        exited:  { 
            opacity: 1, 
            'transitionDuration': '0ms',
            // top: `${deckCoordinates.top-40}px`, left: `${deckCoordinates.left}px`, 
            // transform: `translateX(${placeCoordinates.x}px) translateY(${-placeCoordinates.y}px)`
        },
      }

    return (
        // <TransitionGroup className="otherPlayerCards">
        //  {
            cardsCollection.filter( card => cards.indexOf(card.cardId) !== -1 )
            .map((card,index) => 
            (
                <Transition 
                    timeout={5000} 
                    key={index} 
                    in={handoutCards} 
                    mountOnEnter unmountOnExit
                    >
                    {
                        state => 
                            
                            <Card 
                                card={card} 
                                className={`otherPlayerCard-${index} ${state}`}
                                style={{...transitionStyles[state], ...additionalStyles}}
                            
                            />
                    }
                </Transition>
            )
            )
        //  }
        // </TransitionGroup>
    )

}