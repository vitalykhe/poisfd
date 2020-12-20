export default  transitionStyles = {
  entering: { 
      opacity: 0,
      transform: `translateX(${dx+offsetX}px) translateY(${-dy - offsetY}px) rotate(360deg)`,
      // top: `${sourceCoordinates.top-42}px`, 
      // left: `${sourceCoordinates.left+1}px`, 
      transitionDuration: '300ms',
  },
  entered:  { 
      opacity: 1,
      // transform:  `rotate(360deg)`, 
      transitionFunction : 'ease-out',
      transitionDuration: '900ms'
  },
  exiting:  { 
      opacity: 1,
      transitionDuration: '600ms',
      transform: `translateX(${dx + offsetX}px) translateY(${-dy-offsetY}px) rotate(360deg)`,
  },
  exited:  { 
      opacity: 0, 
      // transitionDuration: '0ms',
      // top: `${sourceCoordinates.top-40}px`, left: `${sourceCoordinates.left}px`, 
      // transform: `translateX(${targetCoordinates.x}px) translateY(${-targetCoordinates.y}px)`
  },
}