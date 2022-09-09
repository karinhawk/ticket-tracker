import React from 'react'
import whiteCross from "../../assets/images/white-cross.png";
import add from "../../assets/images/add.png"
import "./Form.scss"



const FormButton = (props) => {

  const { handleForm, handleSubmit, showForm } = props;

  return (
    <>
      <div className='toggle-div'>
        <img src={add} className='toggle' onClick={handleForm}/>
      </div>
      {showForm && <form className='form' autoComplete='off' onSubmit={handleSubmit}>
        <div className='form__page'>
          <div className='form__content'>
          <img
          src={whiteCross}
          alt="Close form"
          className="form__cross"
          onClick={handleForm}
        />
            <div className='form__div-label'>
              <label className='form__label' htmlFor="newName">Enter your name-
                <input className='form__input' name="newName" type="text" id='name-input' />
              </label>
              <label className='form__label' htmlFor="newRole">Enter your role-
                <input className='form__input' name="newRole" type="text" id='role-input' />
              </label>
            </div>
            <div className="form__div-button">
              <button className='form__button' >Submit</button>
            </div>
          </div>
        </div>
      </form>}
    </>
  )
}

export default FormButton