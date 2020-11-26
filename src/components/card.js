import React from 'react'

export default function Card(props){ 
	const cardClass = "card c" + props.cardSeq;
	return (
	<div className={cardClass} id={props.card.cardId} onMouseOver={props.onMouseOver}>
		<img
			src={props.card.cardImg}
			className="card-img-top"
			alt={props.card.cardRank}
		/>
	</div>
	) }
