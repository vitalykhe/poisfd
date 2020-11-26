import { CHANGE_RUB_VALUE, CHANGE_BITCOIN_VALUE} from './actionTypes'

export const changeRubValue = (newValue) => {
    return {
      type: CHANGE_RUB_VALUE,
      payload: newValue
    }
  }
  
export const changeBitcoinValue = (newValue) => {
    return {
      type: CHANGE_BITCOIN_VALUE,
      payload: newValue
    }
  }