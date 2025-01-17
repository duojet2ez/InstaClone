import './Login.css'

export default function Login(){
    return(
        <>
            <div className="login-container">
                <div className="login-form">
                    <h1>Log in:</h1>
                    <p>Username</p>
                    <input
                        type="text"
                        placeholder="Enter username"
                    />
                    <p>Password</p>
                    <input
                        type="password"
                        placeholder="Enter password"
                    /> 
                    <br />
                    <br />
                    <button>Log in</button>
                    <button>Sign Up</button>
                </div>
            </div>
        </>
    )
}