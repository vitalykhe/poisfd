import React, {useState} from 'react'
import {Transition} from 'react-transition-group'
import Card from './components/card'
import cardsCollection from './components/cardsCollection'

function Test(){

    const x = 200
    const y = -200

    const transitionStyles = {
        entering: { opacity: 1, },
        entered:  { opacity: 1, transform: `translateX(0) translateY(0)`},
        exiting:  { opacity: 1, },
        exited:  { opacity: 1, transform: `translateX(${x}px) translateY(${y}px) rotate(180deg)`},
      };

    const [cardsVisible, setCardsVisible] = useState(false);

    return(
        <div className="container-fluid">
                <button onClick={()=> setCardsVisible(!cardsVisible)}>{cardsVisible ? "hide" : "show"}</button>
                <div className="wrap dealer">
                    <Transition in={cardsVisible} timeout={400}>
                        {
                            state => 
                                (<Card className={`card closed ${state}`} card={cardsCollection[53]} style={{
                                    ...transitionStyles[state]
                                  }}/>)
                        }
                    </Transition>
                </div>
                <div className="wrap">
                </div>
        </div>
    )
}

export default Test

// export default function HooksTest() {

//     const convert = (val, reverse) => {
//         let output = 0;
//         reverse ? output = val/130 : output = val*130
//         return output
//     }

//     const [values, setValues] = useState({rub: 0, bit: 0})

//     return (
//         <div>
//             <input type="number" id="rub" value={values.rub} onChange={e => 
//                 setValues({rub: e.target.value, bit: convert(e.target.value, true)})
//             }/>
//             <input type="number" id="bit" value={values.bit} onChange={e =>
//                 setValues({rub: convert(e.target.value, false), bit: e.target.value})
//             }/>
//         </div>
//     )
// }

