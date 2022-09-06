import React from 'react'
import './Counter.scss'

const Counter = () => {
    return (
        <div className="counter">
            <h2 className="counter__heading">Counter</h2>
            <h2 className='counter__tally'>0</h2>
            <div className='counter__buttons'>
                <button className='counter__button decrease'>-</button>
                <button className='counter__button increase'>+</button>
            </div>
        </div>
    )
}

export default Counter