import './App.scss';
import Card from './components/Card/Card';
import Heading from './components/Heading/Heading';

function App() {
  return (
    <div className="app">
      <Heading />
      <Card />
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