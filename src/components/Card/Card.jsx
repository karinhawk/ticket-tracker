import React from 'react'
import Counter from '../../components/Counter/Counter.jsx';
import './Card.scss'

const Card = () => {
    return (
        <div className="card">
            <div className='card__id-div'>
                <h2 className='card__name'>name</h2>
                <h2 className='card__role'>role</h2>
            </div>
            <Counter />
        </div>
    )
}

export default Card