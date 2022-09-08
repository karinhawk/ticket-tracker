import './App.scss';
import Card from './components/Card/Card';
import FormButton from './components/FormButton/FormButton';
import Heading from './components/Heading/Heading';
import team from './team.js'

function App() {

  const mappedCards = team.map((employee) => {
    return (
      <Card key={employee.id} name = {employee.name} role = {employee.role}/>
    )
  })

  return (
    <div className="app">
      <Heading />
      <FormButton />
      <div className='cards'>
      {mappedCards}
      </div>
    </div>
  );
}

export default App;



//track number of tickets coworkers have completed
//each employee is a user on the site and each can increment and decrement their amount of tickets

//folders: components
//in components have folders for header; card; counter; 
//things in card must import counter
//app must import all