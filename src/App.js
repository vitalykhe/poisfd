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

function App() {

	let [deckCoordinates, setDeckCoordinares] = React.useState({})
	let [playersPlacesCoordinates, setPlayersPlacesCoordinares] = React.useState({})

	const deckRef = React.useRef()
	const playerPlacesRefs = React.useRef({})

	const	addToRefsArr = (item) => {
		if(item && item.id  && !playerPlacesRefs.current[item.id]) {
			playerPlacesRefs.current[item.id] = item.getBoundingClientRect()
			// console.log(playerPlacesRefs.current) 
			// Консоль браузера почему-то ссылается на конечный объект 
			// т.е выводит его полностью со всеми добавленными рефами
			// однако, если в этом месте указать конкретный ключ(playerPlacesRefs.current[playerplace5]), к примеру
			// то видно, что код работает ожидаемо
		}
			// console.log(playerPlacesRefs.current[item] + " cannot be added to refs array due to IF conditions")
	}

	// React.useEffect(() => {
	// 		updateDeckCoordinares(deckRef.current.getBoundingClientRect())
	// 	},
	// 	[] 
	// )
	
	React.useLayoutEffect(() => {
		function updateRefItemsCoordinates() {
			let temp = {}
			Object.keys(playerPlacesRefs.current).map(el => {
				setPlayersPlacesCoordinares(...{el: playerPlacesRefs.current[el]})
			})
	}

		window.addEventListener('resize', updateRefItemsCoordinates)

		updateRefItemsCoordinates()

		return () => window.removeEventListener('resize', updateRefItemsCoordinates)

	}, [])
	
	

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
				<div className="playerplace" id="playerplace1" ref={addToRefsArr}>
					<OtherPlayer 
						cards={otherPlayerCards.Foxie} 
						name="Hiho" 
						turn="check" 
						profile={profiles.Owl} 
						showCards={true} 
						handoutCards={handoutCards} 
						deckCoordinates={deckCoordinates}
						inGame={false}
					/>
				</div>
				<div className="playerplace" id="playerplace2" ref={addToRefsArr}>
				</div>
				<div className="dealer">
					<img ref={deckRef} id="dealer" className="card" src="assets/card_backside.png" alt="Deck"/>
					<button onClick={() => {performHandoutCards(handoutCards => !handoutCards)}}>HandOut</button>
				</div>
				<div className="playerplace" id="playerplace3" ref={addToRefsArr}>
				</div>
				<div className="playerplace" id="playerplace4" ref={addToRefsArr}>
				</div>
			</div>	
			<div className="row">
				<div className="playerplace" id="playerplace5" ref={addToRefsArr} >
					<OtherPlayer
						cards={otherPlayerCards.Susan} 
						name="Hiho" 
						turn="check" 
						profile={profiles.Susan} 
						showCards={true}  
						handoutCards={handoutCards}
						deckCoordinates={deckCoordinates}
					/>
				</div>
				<div className="cardsArea">
				</div>
				<div className="playerplace" id="playerplace6" ref={addToRefsArr}>
				</div>
			</div>
			<div className="row">
				<div className="playerplace" id="playerplace7" ref={addToRefsArr}>
				</div>
				<div className="playerplace" id="playerplace8" ref={addToRefsArr}>
				</div>
				<div className="playerplace" id="playerplace9" ref={addToRefsArr}>
					<PovPlayer 
						inGame={true} 
						fold={false} 
						check={false} 
						stake={minStake} 
						showHand={false}
						cards={[44,17]}
					/>
				</div>
				<div className="playerplace" id="playerplace0" ref={addToRefsArr}>
				</div>
			</div>
		</div>
	)
}
export default App;
