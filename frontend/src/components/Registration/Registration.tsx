import './Registration.css'



function Registration() {
    return (
        <div className="registration-container">
            <div className="registration-form">
                <h1>Sign Up:</h1>
                <p>Name</p>
                <input
                    type="text"
                    placeholder="Enter your full name"
                />
                <p>Username</p>
                <input
                    type="text"
                    placeholder="Enter your username"
                />
                <p>Password</p>
                <input
                    type="password"
                    placeholder="Enter your password"
                />
                <p>Confirm Password</p>
                <input
                    type="password"
                    placeholder="Confirm your password"
                />
                <br />
                <br />
                <button>Sign Up</button>
                <button onClick ={() => {
                    //to do  
                }}>Log in</button>

            </div>
        </div>
    )
}

export default Registration