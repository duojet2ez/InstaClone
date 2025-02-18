import { useState } from 'react'
import './Login.css'
import { Link, NavLink } from 'react-router';


export default function Login(){
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    function handleLogin(){
        //TODO make a post request to node with the username and password for verification
        console.log(`attempted username login: ${username}, attempted password: ${password}`);
        
    }
    return(
        <>
            <div className="login-container">
                <div className="login-form">
                    <h1>Log in:</h1>
                    <p>Username</p>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange = {(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <p>Password</p>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange = {(e) => {
                            setPassword(e.target.value);
                        }}
                    /> 
                    <br />
                    <br />
                    <button onClick = {handleLogin}>Log in</button>
                    <Link to ="/register" >
                        <button>Sign Up</button>
                    </Link>
                </div>
            </div>
        </>
    )
}