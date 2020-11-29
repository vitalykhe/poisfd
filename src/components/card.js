import React from 'react'

export default function Card(props){

	return (
	
		<div className="card" style={props.style}>
			<img
				src={props.card.cardImg}
				className="card-img-top"
				alt={props.card.cardRank}
			/>
		</div>
	)
}
