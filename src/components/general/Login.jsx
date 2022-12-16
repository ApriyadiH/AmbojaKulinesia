//import library
import React, { useState } from 'react';

//import component
import './Login.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // send a request to the server to verify the user's credentials
        if (email === 'test@example.com' && password === 'password') {
            // credentials are valid, redirect the user to the protected area of the app
            window.location = '/protected';
        } else {
            // credentials are invalid, show an error message
            setError('Invalid email or password');
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <div class = "container">
            <div class="custom-box">
            <label>
                Email:
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <br />
            {error && <p>{error}</p>}
            <button type="submit">Log in</button>
            </div>
            </div>
        </form>
    );
}

export default LoginForm;