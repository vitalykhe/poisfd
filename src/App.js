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
// import PovPlayer from './components/PovPlayer'
// import { minStake, maxStake } from './components/stakes'
import OtherPlayer from './components/OtherPlayer'
import getCards from './functions/getCards'


function App() {

	let [placesCoordinates, setPlacesCoordinares] = React.useState({})
	const boardRefs = React.useRef({})

	let [boardState, setBoardState] = React.useState({
		playerplace1 : {
			player: {
				id: 123,
				name: "Foxie",
        image: "assets/profiles/foxie.jpeg",
				turn: null,
				score: 200
			},
			isActive: true,
			showCards: false
		},
		playerplace9 : {
			player: {
				id: 113,
				name: "Wolfie",
        image: "assets/profiles/wolfie.jpeg",
				turn: null,
				score: 200		
			},
			isActive: true,
			showCards: true
		},
		playerplace3 : {
			player: {
				id: 133,
				name: "Clumsy",
        image: "assets/profiles/clumsy.jpeg",
				turn: null,
				score: 200		
			},
			isActive: true,
			showCards: false
		},
		playerplace5 : {
			player: {
				id: 143,
				name: "Susan",
        image: "assets/profiles/susan.jpeg",
				turn: null,
				score: 200		
			},
			isActive: true,
			showCards: false
		},
	})

	const	addToRefs = (el) => {
		if(el !== null && el.id ) {
			boardRefs.current[el.id] = el
		}
		// console.log(boardRefs.current)
	}

	React.useLayoutEffect(() => {
		const updateRefItemsCoordinates = () => {
			let myObj = {}
			Object.getOwnPropertyNames(boardRefs.current).forEach(el => {
				myObj[el] = boardRefs.current[el].getBoundingClientRect()
			})
			setPlacesCoordinares( myObj )
			console.log(placesCoordinates)
		}
		window.addEventListener('resize', updateRefItemsCoordinates)
		updateRefItemsCoordinates()
		return () => window.removeEventListener('resize', updateRefItemsCoordinates)
	}, [])

	const [handoutCards, setHandoutCards] = React.useState(false)

	return (
		<div className='container-fluid table-area'>
			<div className="row">
				<div className="playerplace" id="playerplace1" ref={addToRefs}>
					<OtherPlayer 
						playerplace={boardState.playerplace1}
						handoutCards={handoutCards}
						deckCoordinates={placesCoordinates["deck"]}
						placeCoordinates={placesCoordinates["playerplace1"]}
						cards={getCards(boardState.playerplace1.showCards)}
						showCards={boardState.playerplace1.showCards}
					/>
				</div>
				<div className="playerplace" id="playerplace2" ref={addToRefs}>
					{/* {JSON.stringify(placesCoordinates)} */}
				</div>
				<div className="dealer" id="deck" ref={addToRefs}>
					<img className="dealer" src="assets/dealer.png" alt="dealer"/>
				</div>
				<div className="playerplace" id="playerplace3" ref={addToRefs}>
					<button onClick={() => {setHandoutCards(handoutCards => !handoutCards)}}>HandOut</button>
				</div>
				<div className="playerplace" id="playerplace4" ref={addToRefs}>
				</div>
			</div>	
			<div className="row">
				<div className="playerplace" id="playerplace5" ref={addToRefs} >
				<OtherPlayer 
						playerplace={boardState.playerplace5}
						deckCoordinates={placesCoordinates["deck"]}
						placeCoordinates={placesCoordinates["playerplace5"]}
						handoutCards={handoutCards}
						cards={getCards(boardState.playerplace5.showCards)}
						showCards={boardState.playerplace5.showCards}
					/>
				</div>
				<div className="cardsArea">
				</div>
				<div className="playerplace" id="playerplace6" ref={addToRefs}>
				</div>
			</div>
			<div className="row">
				<div className="playerplace" id="playerplace7" ref={addToRefs}>

				</div>
				<div className="playerplace" id="playerplace8" ref={addToRefs}>
				</div>
				<div className="playerplace" id="playerplace9" ref={addToRefs}>
					<OtherPlayer 
						playerplace={boardState.playerplace9}
						deckCoordinates={placesCoordinates["deck"]}
						placeCoordinates={placesCoordinates["playerplace9"]}
						handoutCards={handoutCards}
						cards={getCards(boardState.playerplace9.showCards)}
						showCards={boardState.playerplace9.showCards}
					/>
				</div>
				<div className="playerplace" id="playerplace0" ref={addToRefs}>
				</div>
			</div>
		</div>
	)
}
export default App;
