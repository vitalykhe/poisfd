import convert from './convert'
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

export default function reducer(state, action) { 

    switch (action.type) {
        case CHANGE_RUB_VALUE:
            return { rub: action.payload, bitcoin: convert(action.payload, 1300000, true) };
        case CHANGE_BITCOIN_VALUE:
            return { rub: convert(action.payload, 1300000, false), bitcoin: action.payload };
        default:
            return state;
        }        
}
