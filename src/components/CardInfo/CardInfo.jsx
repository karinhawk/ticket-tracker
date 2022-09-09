import React from 'react'
import "./CardInfo.scss"

const CardInfo = (props) => {
  const { name, role } = props
  return (
    <div className='card__id-div'>
      <h2 className='card__name'>{name}</h2>
      <h2 className='card__role'>{role}</h2>
    </div>
  )
}

export default CardInfo