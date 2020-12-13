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


	let [playersPlacesCoordinates, setPlayersPlacesCoordinares] = React.useState({})

		const boardRefs = React.useRef({})

	const	addToRefs = (item) => {
		if(item && item.id  && !boardRefs.current[item.id]) {
			boardRefs.current[item.id] = item.getBoundingClientRect()
			// console.log(boardRefs.current) 
			// Консоль браузера почему-то ссылается на конечный объект 
			// т.е выводит его полностью со всеми добавленными рефами
			// однако, если в этом месте указать конкретный ключ(boardRefs.current[playerplace5]), к примеру
			// то видно, что код работает ожидаемо
		}
			// console.log(boardRefs.current[item] + " cannot be added to refs array due to IF conditions")
	}

	// React.useEffect(() => {
	// 		updateDeckCoordinares(deckRef.current.getBoundingClientRect())
	// 	},
	// 	[] 
	// )
	
	React.useLayoutEffect(() => {
		function updateRefItemsCoordinates() {
			Object.keys(boardRefs.current).map(el => {
				setPlayersPlacesCoordinares(playersPlacesCoordinates[el] = boardRefs.current[el])
			})
			console.log(playersPlacesCoordinates)
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
				<div className="playerplace" id="playerplace1" ref={addToRefs}>
					<OtherPlayer 
						cards={otherPlayerCards.Foxie} 
						name="Hiho" 
						turn="check" 
						profile={profiles.Owl} 
						showCards={true} 
						handoutCards={handoutCards} 
						deckCoordinates={boardRefs["deck"]}
						inGame={false}
					/>
				</div>
				<div className="playerplace" id="playerplace2" ref={addToRefs}>
				</div>
				<div className="dealer">
					<img ref={addToRefs} id="deck" className="card" src="assets/card_backside.png" alt="Deck"/>
					<button onClick={() => {performHandoutCards(handoutCards => !handoutCards)}}>HandOut</button>
				</div>
				<div className="playerplace" id="playerplace3" ref={addToRefs}>
				</div>
				<div className="playerplace" id="playerplace4" ref={addToRefs}>
				</div>
			</div>	
			<div className="row">
				<div className="playerplace" id="playerplace5" ref={addToRefs} >
					<OtherPlayer
						cards={otherPlayerCards.Susan} 
						name="Hiho" 
						turn="check" 
						profile={profiles.Susan} 
						showCards={true}  
						handoutCards={handoutCards}
						deckCoordinates={boardRefs["deck"]}
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
					<PovPlayer 
						inGame={true} 
						fold={false} 
						check={false} 
						stake={minStake} 
						showHand={false}
						cards={[44,17]}
					/>
				</div>
				<div className="playerplace" id="playerplace0" ref={addToRefs}>
				</div>
			</div>
		</div>
	)
}
export default App;
