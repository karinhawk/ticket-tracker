import React from 'react'
import { useState } from "react";
import "./FormButton.scss"



const FormButton = (props) => {

  const [showForm, setShowForm] = useState(false);
  const [inputtedName, setInputtedName] = useState("");
  const [inputtedRole, setInputtedRole] = useState("");

  const handleForm = () => {
    setShowForm(!showForm)
  }

  const retrieveName = event => {
    setInputtedName(event.target.value);
  }

  const retrieveRole = event => {
    setInputtedRole(event.target.value);
  }

  const storeInfo = (event) => {
    event.preventDefault();
    console.log(inputtedName);
    console.log(inputtedRole);
  }

  const handleClearForm = (event) => {
    event.preventDefault();
    setInputtedName("");
    setInputtedRole("");
  }

  return (
    <>
      <div className='toggle-div'>
        <button className='form__button toggle' onClick={handleForm}>Click to add more employees!</button>
      </div>
      {showForm && <form className='form' autoComplete='off'>
        <div className='form__div-label'>
          <label className='form__label'>Enter your name-
            <input className='form__input' type="text" id='name-input' value={inputtedName} onInput={retrieveName} />
          </label>
          <label className='form__label'>Enter your role-
            <input className='form__input' type="text" id='role-input' value={inputtedRole} onInput={retrieveRole} />
          </label>
        </div>
        <div className="form__div-button">
          <button className='form__button' onClick={storeInfo}>Submit</button>
          <button className='form__button' onClick={handleClearForm}>Clear</button>
        </div>
      </form>}
    </>
  )
}

export default FormButton