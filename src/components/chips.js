import DivImageStyled from './divImageStyled'


const Chips = (player, score, minStake) => {
  const numberOfChips = Math.floor(score/minStake)

  for (let i = 0; i < numberOfChips; i++) {
    const elements = <DivImageStyled 
      key={`player-chip-${i}`}  
      
    />
  }

  return ( 
    
  )
}
 
export default Chips;