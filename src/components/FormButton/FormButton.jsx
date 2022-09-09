import React from 'react'
import "./FormButton.scss"



const FormButton = (props) => {

  const { handleForm, handleSubmit, showForm } = props;

  return (
    <>
      <div className='toggle-div'> 
        <button className='form__button toggle' onClick={handleForm}>Click to add more employees!</button>
      </div>
      {showForm && <form className='form' autoComplete='off' onSubmit={handleSubmit}>
        <div className='form__div-label'>
          <label className='form__label' htmlFor="newName">Enter your name-
            <input className='form__input' name="newName" type="text" id='name-input'/>
          </label>
          <label className='form__label' htmlFor="newRole">Enter your role-
            <input className='form__input' name="newRole" type="text" id='role-input'/>
          </label>
        </div>
        <div className="form__div-button">
          <button className='form__button'>Submit</button>
          <button className='form__button'>Clear</button>
        </div>
      </form>}
    </>
  )
}

export default FormButton