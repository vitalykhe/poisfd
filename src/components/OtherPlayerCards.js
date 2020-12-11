import React from 'react';
import cardsCollection from './cardsCollection'
import Card from './card.js'
import {Transition} from 'react-transition-group'



export default function OtherPlayerCards(props) {
    const handoutCards = props.handoutCards
    const deckCoordinates = props.deckCoordinates ? props.deckCoordinates : {top: `100px` , left: `100px`}
    console.log("deck top: " + deckCoordinates.top);
    console.log("deck left: " + deckCoordinates.left);
    
    const transitionStyles = {
        entering: { 
            opacity: 1,
            // // transform: 'rotate(360deg)',
            // top: `${deckCoordinates.top-42}px`, 
            // left: `${deckCoordinates.left+1}px`, 
            // // 'transition-duration': '500ms',
            // 'transition-function' : 'ease-out',
        },
        entered:  { 
            // opacity: 1,
            // transform:  'rotate(360deg) translateX(90px) translateY(-70px)', 
            // top: `${deckCoordinates.top-41}px`, 
            // left: `${deckCoordinates.left}px`, 
            // 'transition-duration': '500ms' 
        },
        exiting:  { opacity: 1,'transition-duration': '500ms' },
        exited:  { opacity: 1, top: `${deckCoordinates.top-40}px`, left: `${deckCoordinates.left}px`, },
      }

    return (
        // <TransitionGroup className="otherPlayerCards">
        //  {
            cardsCollection.filter( card => props.cards.indexOf(card.cardId) !== -1 )
            .map((card,index) => 
            (
                <Transition 
                    timeout={5000} 
                    key={index} 
                    in={handoutCards} 
                    // mountOnEnter unmountOnExit
                    >
                    {
                        state => 
                            
                            <Card 
                                card={card} 
                                className={`otherPlayerCard-${index} ${state}`}
                                style={transitionStyles[state]}
                            
                            />
                    }
                </Transition>
            )
            )
        //  }
        // </TransitionGroup>
    )

}