class Player {
    this.cards = [];
    construtor(cardsOnStart){
		this.cards = cardsOnStart;
	}
	dropCardsGetFromDeck(cardsToDrop, cardsFromDeck){
		let newHand =  this.cards.map(card => {
			if (card === cardsToDrop[0]){  card = cardsFromDeck[0] }
			else if (card === cardsToDrop[1]) { card = cardsFromDeck[1] }
			return card;
		})
		this.cards = newHand;
	}
}

const player = new Player([1,2,3,4,5])
//player.dropCardsGetFromDeck([1,2], [7,8])

console.log(player.cards)