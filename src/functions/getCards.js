export default function getCards(showCards) {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max) + 1)
  }
  if (showCards) {
    //здесь будет реализация запроса к state
    let someCard = getRandomInt(51)
    return [someCard, 51 - someCard]
  } else {
    return [53,54]
  }
}