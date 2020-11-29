import React from 'react'
import Card from './card'

const cardsuit = "assets/card_backface.jpg";

function dealCards(destinationArray, flop) {
    
    //create cards elements
    const dealerCards = [];
    let numberOfCards;
    flop ? numberOfCards = destinationArray.length : numberOfCards = destinationArray.length*2

    for(let i=0; i < numberOfCards; i++) {
      dealerCards.push(<Card />);
    }
    
    document.getElementById("dealer").innerHTML = dealCards;

    destinationArray.forEach( dest => {
      document.getElementById("dealer")
      let destXY = document.getElementById(el).getBoundingClientRect();
    })
    
    let playersCoordinates = [];
    
    Array.prototype.forEach.call(players, (element) => {
      console.log(element.id);
      console.log(element.getBoundingClientRect().x);
      playersCoordinates.push(element.getBoundingClientRect())
    })
    
    console.log(playersCoordinates);
    
    function onCardClick(e){
    
      let x = playersCoordinates[3].x - e.target.getBoundingClientRect().x;
      let y = playersCoordinates[3].y -e.target.getBoundingClientRect().y;
      let stylet = "translate(" + x + "px ," + y + "px)";
      console.log(stylet);
      
      e.target.style.transform = stylet;
      console.log(e.target);
    }
}
