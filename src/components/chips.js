import DivImageStyled from './divImageStyled'

const Chips = (score, minStake, playerID) => {
  const numberOfChips = Math.floor(score/minStake)
  let chips = {}
  
  for (let i = 0; i < numberOfChips; i++) {
    <DivImageStyled 
      key={`${playerID}-chip-${i}`}
      divClass="chipDiv"
      imageClass="chipImage"
      divStyle={}
      imageSrc=""
      />
  }
  
}
 
export default Chips;