import React from 'react'
import { useState } from "react";
import './Counter.scss'

const Counter = () => {

    const [tally, setTally] = useState(0);

    const handleIncrease = () => {
        setTally(tally+1)
    }
    const handleDecrease = () => {
        setTally(tally-1)
        if (tally == 0) {
            setTally(tally)
        }
    }

    return (
        <div className="counter">
            <h2 className="counter__heading">Counter</h2>
            <h2 className='counter__tally'>{tally}</h2>
            <div className='counter__buttons'>
                <button className='counter__button decrease' onClick={handleDecrease}>-</button>
                <button className='counter__button increase' onClick={handleIncrease}>+</button>
            </div>
        </div>
    )
}

export default Counter