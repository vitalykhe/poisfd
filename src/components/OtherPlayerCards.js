import React, {useEffect} from 'react';
import cardsCollection from './cardsCollection'
import Card from './card.js'
import {Transition} from 'react-transition-group'



export default function OtherPlayerCards(props) {
    const handoutCards = props.handoutCards
    // const deckCoordinates = props.deckCoordinates || {top: `100px` , left: `100px`}
    // console.log(deckCoordinates);

    const transitionStyles = {
        // entering: { top: deckCoordinates.top, left: deckCoordinates.left },
        entered:  { opacity: 1,},
        exiting:  { opacity: 1, },
        exited:  { opacity: 1,},
      }

    return (
        // <TransitionGroup className="otherPlayerCards">
        //  {
            cardsCollection.filter( card => props.cards.indexOf(card.cardId) !== -1 )
            .map((card,index) => 
            (
                <Transition timeout={2000} key={index} in={handoutCards} unmountOnExit mountOnEnter>
                    {
                        state => 
                            
                            <Card card={card} className={`otherPlayerCard-${index} ${state}`}  
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