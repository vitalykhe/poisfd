//Poker table
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

import React, { useState } from 'react';
import './App.css';
import Player from './components/Player'
import { minStake, maxStake } from './components/stakes'
import OtherPlayer from './components/OtherPlayer'
import Players from './components/playersProfiles' //позже вместо импорта будем подгружать их с BE

const activeplayerplaces = ["playerplace-1","playerplace-3","playerplace-5", "playerplace-8"]

function App() {
	// const [playerplaceCardsIDs, updateplayerplace] = useState(playingHand);
  	return (
		  <div className='container-fluid table-area'>
				<div className="row">
					<div className="playerplace" id="playerplace-1">
			  			<OtherPlayer cards={[53,54]} name="Hiho" turn="check" playerProfile={Players.Owl}/>
					</div>
					<div className="playerplace" id="playerplace-2">

					</div>
					<div className="dealer" id="dealer">
						<img className="card" src="assets/card_backside.png"/>
						Banker
					</div>
					<div className="playerplace" id="playerplace-3">
					playerplace3
					</div>
					<div className="playerplace" id="playerplace-4">
					playerplace4
					</div>
				</div>
				<div className="row">
					<div className="playerplace" id="playerplace-5">
					<OtherPlayer cards={[53,54]} playerProfile={Players.Susan} />
					playerplace5
					</div>
					<div className="cardsArea">
					cardsArea
					</div>
					<div className="playerplace" id="playerplace-6">
					playerplace6
					</div>
				</div>
				<div className="row">
					<div className="playerplace" id="playerplace-7">
					playerplace7
					</div>
					<div className="playerplace" id="playerplace-8">
					playerplace8
					</div>
					<div className="playerplace" id="playerplace-9">

						<Player 
							inGame={true} 
							fold={false} 
							check={false} 
							stake={minStake} 
							showHand={false}
							cards={[1,17]}
						/>
					</div>

					<div className="playerplace" id="playerplace-10">
						playerplace10
					</div>

				</div>
			</div>
    );
}

export default App;
