import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Components/TestComponents/Counter";
import UserComponent from "./Components/User/UserComponent";


function App() {
  return (
    <div className="App">

      <Counter></Counter>
        <UserComponent />

    </div>
  );
}

export default App;
