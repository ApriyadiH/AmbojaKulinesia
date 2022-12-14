import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import './UserSetting.css';

const UserSetting = () => {
    const usernameFromRedux = 'User1';
    const emailFromRedux = 'user1@gmail.com';
    const [username, setUsername] = useState(usernameFromRedux);
    const [email, setEmail] = useState(emailFromRedux);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const editUsername = () => {
        document.getElementById("username").style.display = 'none';
        document.getElementById("username-edit").style.display = 'flex';
    };

    const cancelEditUsername = () => {
        document.getElementById("username").style.display = 'flex';
        document.getElementById("username-edit").style.display = 'none';
        setUsername(usernameFromRedux);
    };

    const saveNewUsername = () => {
        // axios disini
        document.getElementById("username").style.display = 'flex';
        document.getElementById("username-edit").style.display = 'none';
    };

    const onChangeUsername = (event) => {
        setUsername(event.target.value);
    };

    const editEmail = () => {
        document.getElementById("email").style.display = 'none';
        document.getElementById("email-edit").style.display = 'flex';
    };

    const cancelEditEmail = () => {
        document.getElementById("email").style.display = 'flex';
        document.getElementById("email-edit").style.display = 'none';
        setEmail(emailFromRedux);
    };

    const saveNewEmail = () => {
        // axios disini
        document.getElementById("email").style.display = 'flex';
        document.getElementById("email-edit").style.display = 'none';
    };

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    };

    const resetPass = () => {
        document.getElementById("myprofile").style.display = 'none';
        document.getElementById("resetpass").style.display = 'flex';
        document.getElementById("userinfo-header").innerHTML = 'Reset Password';
    };

    const cancelResetPass = () => {
        document.getElementById("myprofile").style.display = 'block';
        document.getElementById("resetpass").style.display = 'none';
        document.getElementById("userinfo-header").innerHTML = 'My Profile';
        document.getElementById("pass-input1").type = 'password';
        document.getElementById("pass-input2").type = 'password';
        document.getElementById("passinput-icon1").className = 'bi bi-eye-slash-fill';
        document.getElementById("passinput-icon2").className = 'bi bi-eye-slash-fill';
        setPassword('');
        setConfirmPassword('');
    };

    const saveNewPass = () => {
        // axios disini
        document.getElementById("myprofile").style.display = 'block';
        document.getElementById("resetpass").style.display = 'none';
        document.getElementById("userinfo-header").innerHTML = 'My Profile';
        document.getElementById("pass-input1").type = 'password';
        document.getElementById("pass-input2").type = 'password';
        document.getElementById("passinput-icon1").className = 'bi bi-eye-slash-fill';
        document.getElementById("passinput-icon2").className = 'bi bi-eye-slash-fill';
        setPassword('');
        setConfirmPassword('');
    }

    const newPassword = (event) => {
        setPassword(event.target.value);
    };

    const confirmPass = (event) => {
        setConfirmPassword(event.target.value);
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

    const togglePass2 = () => {
        let inputType = document.getElementById("pass-input2");
        let icon = document.getElementById("passinput-icon2");
        if (inputType.type === 'password') {
            inputType.type = 'text';
            icon.className = 'bi bi-eye-fill';
        } else {
            inputType.type = 'password';
            icon.className = 'bi bi-eye-slash-fill';
        }
    };

    return (
        <div>
            <div className='userinfo-container header-cntr'>
                <h4 id='userinfo-header'>My Profile</h4>
            </div>

            <div className='userinfo-container content-cntr' id='myprofile'>
                <div className='userinfo row'>
                    <label className='col-2'>Username</label>
                    <div className='col-10 userinfo-btn' id='username'>
                        <div>{username}</div>
                        <div>
                            <button className='btn btn-secondary' onClick={editUsername}>Edit</button>
                        </div>
                    </div>
                    <div className='col-10 userinfo-btn' id='username-edit' style={{ 'display': 'none' }}>
                        <input value={username} className='userinfo-input' onChange={onChangeUsername} />
                        <div>
                            <button className='btn btn-danger' onClick={cancelEditUsername}>Cancel</button>
                            <button className='btn btn-primary' onClick={saveNewUsername}>Save</button>
                        </div>
                    </div>
                </div>
                <div className='userinfo row'>
                    <label className='col-2'>Email</label>
                    <div className='col-10 userinfo-btn' id='email'>
                        <div>{email}</div>
                        <div>
                            <button className='btn btn-secondary' onClick={editEmail}>Edit</button>
                        </div>
                    </div>
                    <div className='col-10 userinfo-btn' id='email-edit' style={{ 'display': 'none' }}>
                        <input type='email' value={email} className='userinfo-input' onChange={onChangeEmail} />
                        <div>
                            <button className='btn btn-danger' onClick={cancelEditEmail}>Cancel</button>
                            <button className='btn btn-primary' onClick={saveNewEmail}>Save</button>
                        </div>
                    </div>
                </div>
                <button className='btn btn-secondary reset-pass' onClick={resetPass}>Reset Password</button>
            </div>

            <div className='userinfo-container content-cntr respass-cntr' id='resetpass' style={{ 'display': 'none' }}>
                <div className='respass row'>
                    <label className='col-4'>New Password</label>
                    <div className='col-8 pass-input'>
                        <input type='password' id='pass-input1' value={password} className='respass-input' onChange={newPassword} required />
                        <i id='passinput-icon1' className="bi bi-eye-slash-fill" onClick={togglePass1}></i>
                    </div>
                </div>
                <div className='respass row'>
                    <label className='col-4'>Confirm Password</label>
                    <div className='col-8 pass-input'>
                        <input type='password' id='pass-input2' value={confirmPassword} className='respass-input' onChange={confirmPass} required />
                        <i id='passinput-icon2' className="bi bi-eye-slash-fill" onClick={togglePass2}></i>
                    </div>
                </div>

                <div className='respass-btn'>
                    <button className='btn btn-danger' onClick={cancelResetPass}>Cancel</button>
                    <button type='submit' className='btn btn-primary' onClick={saveNewPass}>Save New Password</button>
                </div>
            </div>
        </div >
    )
};

export default UserSetting;