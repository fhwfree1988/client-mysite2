import React from 'react';
import './App.css';
import {Route, useLocation} from 'react-router-dom';
import Dashboard from './Components/Login/Component/Dashboard';
import Preferences from './Components/Login/Component/Preferences';
import Login from "./Components/Login/Login";

function setToken(userToken:any) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = !tokenString || tokenString.toString() ==""?null: JSON.parse(tokenString);
    return userToken?.token
}

function App() {
    const token = getToken();
    //const [token, setToken] = useState();
    let location = useLocation();
    alert(location);
    if(!token || token.toString().trim().length==0) {
        return <Login myToken={setToken} />
    }
    return (
        <div className="wrapper">
            <h1>Application</h1>
            <Route path="/dashboard" element={<Dashboard/>}>
                {/*<Dashboard />*/}
            </Route>
            <Route path="/preferences" element={<Preferences/>}>
                {/* <Preferences />*/}
            </Route>
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
