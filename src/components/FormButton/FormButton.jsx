import React from 'react'
import { useState } from "react";
import team from "../../team.js";

const FormButton = () => {

  const [showForm, setShowForm] = useState(false);

  const handleForm = () => {
    setShowForm(!showForm)
  }

  const handleNewNameRole = (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("name-input");
    const roleInput = document.getElementById("role-input");
    let newName = nameInput.value;
    let newRole = roleInput.value;
    console.log(newName);
    console.log(newRole);
    createObject(newName, newRole)
  }

  const createObject = (newName, newRole) => {
    console.log(newName);
    console.log(newRole);

    const currentId = team.length;
    console.log(currentId);
    const newId = currentId + 1;
    console.log(newId);

    const newEmployee = {
      id: newId,
      name: newName,
      role: newRole,
    }
    team.push(newEmployee)
    console.log(team);
  }

  const handleClearForm = (e, newName, newRole) => {
    e.preventDefault();
    console.log(newName);
    newName = "";
    newRole = "";
  }



  return (
    <>
      <button className='form__button' onClick={handleForm}>Click to add more employees!</button>
      {showForm && <form className='form' autoComplete='off'>
        <label>Enter your name:
          <input className='form__input' type="text" id='name-input'/>
        </label>
        <label className='form__input'>Enter your role:
          <input type="text" id='role-input'/>
        </label>
        <button className='form__button' onClick={handleNewNameRole}>Submit</button>
        <button className='form__button' onClick={handleClearForm}>Clear</button>
      </form>}
    </>
  )
}

export default FormButton