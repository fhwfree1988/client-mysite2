import React, {FC, useState} from 'react';
import './Login.css';
import PropTypes from 'prop-types';

//https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
//https://www.bezkoder.com/spring-boot-react-jwt-auth/
//https://snyk.io/blog/10-react-security-best-practices/
//https://developer.okta.com/blog/2019/03/06/simple-user-authentication-in-react
async function loginUser(credentials: any) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

type tokenProps = {
    myToken: any;
}
const Login = ({myToken}:tokenProps) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e :any) => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        myToken(token);
    }

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={(e:any) => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={(e:any) => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes={
    myToken: PropTypes.func.isRequired
}

export default Login;