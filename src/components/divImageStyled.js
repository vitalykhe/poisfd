import React from 'react'

export default function DivImageStyled(props){
	
	const divClass = props.divClass
	const divStyle = props.style
	const imageSrc = props.imageSrc
	const imageClass = props.imageClass

	return (
		<div className={divClass} style={{...divStyle}}>
			<img
				src={imageSrc}
				className={imageClass}
				alt={divClass}
			/>
		</div>
	)
}
