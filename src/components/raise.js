import React, {useState} from 'react'

function Raise() {
    return (
        <div className="form-group">
            <input type="range"  list="tickmarks" step="20"/>
            <datalist id="tickmarks">
                <option value="100" label="100"/>
                <option value="500" label="500"/>
            </datalist>
        </div>
    )
}

export default Raise