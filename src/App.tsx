import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Components/TestComponents/Counter";
import UserComponent from "./Components/User/UserComponent";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Login/Component/Dashboard';
import Preferences from './Components/Login/Component/Preferences';
import Login from "./Components/Login/Login";


function App() {
    const [token, setToken] = useState();

    if(!token) {
        return <Login myToken={setToken} />
    }
    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/preferences">
                        <Preferences />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}


/*function App() {
  return (
    <div className="App">
      {/!*<Counter></Counter>
      <UserComponent />*!/}
    </div>
  );
}*/

export default App;
