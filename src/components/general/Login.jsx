import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const usernameFromRedux = 'User1';
    const emailFromRedux = 'user1@gmail.com';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const togglePass1 = () => {
        let inputType = document.getElementById("pass-input1");
        let icon = document.getElementById("passinput-icon1");
        if (inputType.type === 'password') {
            inputType.type = 'text';
            icon.className = 'bi bi-eye-fill';
        } else {
            inputType.type = 'password';
            icon.className = 'bi bi-eye-slash-fill';
        }
    };

    const onClickLogin = () => {
        // Axios disini
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <div className='login-container header-cntr'>
                <h4>Login</h4>
            </div>

            <div className='login-container content-cntr' id='myprofile'>
                <div className='login'>
                    <div className='row'>
                        <label className='col-4'>Email</label>
                        <input className='col-8 login-input' name="email" value={email} onChange={onChangeEmail} required />
                    </div>
                    <div className='row'>
                        <label className='col-4'>Password</label>
                        <div className='col-8 pass-input'>
                            <input type='password' id='pass-input1' value={password} className='respass-input' onChange={onChangePassword} required />
                            <i id='passinput-icon1' className="bi bi-eye-slash-fill" onClick={togglePass1}></i>
                        </div>
                    </div>
                    <div className='login-btn my-2 '>
                        <button type='submit' className='btn btn-primary' onClick={onClickLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default Login;