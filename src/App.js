//Poker table

import React, { useState } from 'react';
import './App.css';
import Player from './components/Player'

// Сущности BE/логика FE:
// Крупье - основной движок, управляющий состоянием
// Действия: управляет колодой(раздает на стол), знает и открывает карты игроков, 
// определяет победителя, зачисляет выигрыш

// Колода карт. Все карты и остаток карт после раздачи

// Игрок - держит свои 2 карты производит действия:
// сделать ставку(начало игры), поднять ставку, сбросить(пас)

// Интерфейс FE:

// Карты: элемент, отображающий карты игрока

// Кнопки: сброс карт(пас), ставка 

// Поле: другие игроки с картами, крупье с колодой



// const handsNumber = 5;

// const playingHand = [1,3,4,6,7]
// const cardsOnTable = cardsCollection
//                         .filter( card => playerCardsIDs.indexOf(card.cardId) !== -1 )
//                             .map((card, index) => 
//                             <div className="cardPlaceholder">
// 								<Card key={card.cardId} card={card} cardSeq={index} />
// 							</div>)

function App() {
	
	// const [playerCardsIDs, updatePlayer] = useState(playingHand);


	
  	return (
			<div className='container-fluid table-area'>
				<div className="row">
					<div className="col">
					Player
					</div>
					<div className="col">
					Croupie
					</div>
					<div className="col">
					Player
					</div>
				</div>
				<div className="row">
					<div className="col">
					Player
					</div>
					<div className="col">
					cardsArea
					</div>
					<div className="col">
					player
					</div>
				</div>
				<div className="row">
					<div className="col">
					Player
					</div>
					<div className="col">
					player
					</div>
					<div className="col">
					player
					</div>
					<div className="col">
					Player
					</div>
					<div className="col">
					player
					</div>
					<div className="col">
					player
					</div>
				</div>
				{/* <Player playerCardsIDs={playerCardsIDs}/> */}
			</div>
		
		

    );
}

export default App;
