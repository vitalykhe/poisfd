import React from 'react'

export default function Card(props){
	
	const className = props.className || "card"
	const style = props.style

	return (
	
		<div className={className} style={{...style}}>
			<img
				src={props.card.cardImg}
				className="card-img-top"
				alt={props.card.cardRank}
			/>
		</div>
	)
}
