import React from 'react';


//some hardcode here with static css classes 
const getNeighbours = (e) => {
    const className = e.target.className;
    const cssClasses = ["c0", "c1", "c2", "c3", "c4"]
    const i = cssClasses.indexOf(className.substring(className.length - 2))
    
    if( i > 0 || i < cssClasses.length - 1) { return [i - 1, i + 1] }
    else if ( i == 0 ) { return [i + 1] } 
    else if ( i == cssClasses.length - 1 ) { return [i - 1] }
}

export default function onCardMouseOver(e){
    
}
