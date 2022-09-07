import React from 'react'
import Counter from '../../components/Counter/Counter.jsx';
import './Card.scss'

const Card = (props) => {
    return (
        <div className="card">
            <div className='card__id-div'>
                <h2 className='card__name'>{props.name}</h2>
                <h2 className='card__role'>{props.role}</h2>
            </div>
            <Counter />
        </div>
    )
}
export default Card