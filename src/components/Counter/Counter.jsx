import React from 'react'
import './Counter.scss'

const Counter = () => {

    let tally = 0;
    
    const handleIncrease = () => {
        tally ++
    }
    const handleDecrease = () => {
        tally --
    }

    return (
        <div className="counter">
            <h2 className="counter__heading">Counter</h2>
            <h2 className='counter__tally'>{tally}</h2>
            <div className='counter__buttons'>
                <button className='counter__button decrease' onClick={handleIncrease()}>-</button>
                <button className='counter__button increase' onClick={handleDecrease()}>+</button>
            </div>
        </div>
    )
}

export default Counter