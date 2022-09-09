import './App.scss';
import Card from './components/Card/Card';
import FormButton from './components/Form/Form';
import Heading from './components/Heading/Heading';
import employeesArr from './team.js'
import { useState } from "react";

function App() {

  const [showForm, setShowForm] = useState(false);
  const [employees, setEmployees] = useState([...employeesArr]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newName = event.target[0].value;
    const newRole = event.target[1].value;

    const newId = employees.length + 1;
    setEmployees(employees.concat([{
      id: newId,
      name: newName,
      role: newRole,
    }]))
    handleForm();
  }

  const handleForm = () => {
    setShowForm(!showForm)
  }

  const mappedCards = employees.map((employee) => {
    return (
      <Card key={employee.id} name={employee.name} role={employee.role} />
    )
  })

  return (
    <div className="app">
      <Heading />
      <FormButton showForm={showForm} handleForm={handleForm} handleSubmit={handleSubmit} />
      <div className='cards'>
        {mappedCards}
      </div>
    </div>
  );
}

export default App;