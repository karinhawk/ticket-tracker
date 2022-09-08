import React from 'react'
import Counter from '../../components/Counter/Counter.jsx';
import './Card.scss'
import CardInfo from "../CardInfo/CardInfo.jsx"

const Card = (props) => {
    const {name, role} = props
    return (
        <div className="card">
           <CardInfo name = {name} role = {role}/>
            <Counter />
        </div>
    )
}
export default Card