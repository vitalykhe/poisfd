// Сущности BE/логика FE:
// основной движок(крупье) - в компоненте App, управляющий состоянием
// управляет на BE всей игровой логикой и содержит состояние
// Компоненты BE: Колода карт(Deck), Player, Game?? - пока не понятно
//
// Игрок - держит свои 2 карты производит действия:
// сделать ставку(начало игры), поднять ставку, сбросить(пас)

// Интерфейс FE:
//  Table(state) -> OtherPlayer(func) -> PlayerCards(func)
//							-> PovPlayer(func или state?)
// 									Кнопки: сброс карт(пас), ставка 


import React from 'react';
import './App.css';
import PovPlayer from './components/PovPlayer'
import { minStake, maxStake } from './components/stakes'
import OtherPlayer from './components/OtherPlayer'
import profiles from './components/profiles' //позже вместо импорта будем подгружать их с BE

const activeplayerplaces = ["playerplace-1","playerplace-3","playerplace-5", "playerplace-8"]

function App() {

	const [deckCoordinates, updateDeckCoordinares] = React.useState({})

	const deckRef = React.useRef(null)

	React.useEffect(() => {
			updateDeckCoordinares(deckRef.current.getBoundingClientRect())
			console.log(deckRef)
		},
	 [] )

	const [handoutCards, performHandoutCards] = React.useState(false)

	const [otherPlayerCards, setOtherPlayerCards] = React.useState(
		{
			Owl: [13, 18],
			Foxie: [1, 29],
			Susan: [33,3]
		}
	)
  	return (
		  <div className='container-fluid table-area'>
				<div className="row">
					<div className="playerplace" id="playerplace-1">
						
						<OtherPlayer 
							cards={otherPlayerCards.Foxie} 
							name="Hiho" 
							turn="check" 
							profile={profiles.Owl} 
							showCards={true} 
							handoutCards={handoutCards} 
							deckCoordinates={deckCoordinates} 
						/>
					</div>
					<div className="playerplace" id="playerplace-2">
					</div>
					<div className="dealer">
						<img ref={deckRef} id="dealer" className="card" src="assets/card_backside.png" alt="Deck"/>
						<button onClick={() => {performHandoutCards(handoutCards => !handoutCards)}}>HandOut</button>
					</div>
					<div className="playerplace" id="playerplace-3">
					</div>
					<div className="playerplace" id="playerplace-4">
					</div>
				</div>
				<div className="row">
					<div className="playerplace" id="playerplace-5">
						<OtherPlayer 
							cards={otherPlayerCards.Susan} 
							name="Hiho" 
							turn="check" 
							profile={profiles.Susan} 
							showCards={true}  
							handoutCards={handoutCards}
						/>
					</div>
					<div className="cardsArea">
					</div>
					<div className="playerplace" id="playerplace-6">
					</div>
				</div>
				<div className="row">
					<div className="playerplace" id="playerplace-7">
					</div>
					<div className="playerplace" id="playerplace-8">
					</div>
					<div className="playerplace" id="playerplace-9">
						<PovPlayer 
							inGame={true} 
							fold={false} 
							check={false} 
							stake={minStake} 
							showHand={false}
							cards={[44,17]}
						/>
					</div>
					<div className="playerplace" id="playerplace-10">
					</div>
				</div>
			</div>
    );
}
export default App;
