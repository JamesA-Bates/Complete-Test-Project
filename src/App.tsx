import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people : {
    name  : string,
    age   : number,
    url   : string,
    note? : string
  }[]
}

function App() {
 
  const [people, setPeople] = useState<IState["people"]>([
    {
      name : "LeBron James",
      url : "https://i.insider.com/5cb8b133b8342c1b45130629?width=700",
      age : 36,
      note : "This is a note"
    }
  ])

  people.map(person => {
    person.age
  })

  return (
    <div className="App">
      <h1>
        People Invited to my Party
      </h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
