import React from 'react'
import "./CardInfo.scss"

const CardInfo = (props) => {
  const {name, role} = props
  return (
    <div className='card__id-div'>
    <h2 className='card__name'>{props.name}</h2>
    <h2 className='card__role'>{props.role}</h2>
</div>
  )
}

export default CardInfo