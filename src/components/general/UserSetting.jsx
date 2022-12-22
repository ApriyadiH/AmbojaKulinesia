import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import './UserSetting.css';
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const passwordRules = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,20}$/;

const passwordSchema = yup.object({
    password: yup
        .string()
        .matches(passwordRules, "Password must contain at least 8 characters, one uppercase, and one number")
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password must match")
        .required("Required")
})

const UserSetting = () => {
    const { username, email } = useSelector((state) => state.user);
    const [username1, setUsername1] = useState(username);
    const [email1, setEmail1] = useState(email);
    const [errMessage, setErrMessage] = useState('');
    const [errMessage2, setErrMessage2] = useState('');

    const editUsername = () => {
        document.getElementById("username").style.display = 'none';
        document.getElementById("username-edit").style.display = 'flex';
    };

    const cancelEditUsername = () => {
        document.getElementById("username").style.display = 'flex';
        document.getElementById("username-edit").style.display = 'none';
        setUsername1(username);
    };

    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.token;

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const saveNewUsername = (username) => {
        axios.patch(
            "https://ambojakulinesiaserver.vercel.app/user/username",
            // "http://localhost:8000/user/username",
            { username: username },
            config
        ).then((response) => {
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setErrMessage('');
            setUsername1(username);
            document.getElementById("username").style.display = 'flex';
            document.getElementById("username-edit").style.display = 'none';
        }).catch((error) => {
            setErrMessage(error.response.data.message);
        })
    };

    const onChangeUsername = (event) => {
        setUsername1(event.target.value);
    };

    const editEmail = () => {
        document.getElementById("email").style.display = 'none';
        document.getElementById("email-edit").style.display = 'flex';
    };

    const cancelEditEmail = () => {
        document.getElementById("email").style.display = 'flex';
        document.getElementById("email-edit").style.display = 'none';
        setEmail1(email);
    };

    const saveNewEmail = (email) => {
        axios.patch(
            "https://ambojakulinesiaserver.vercel.app/user/email",
            // "http://localhost:8000/user/email",
            { email: email },
            config
        ).then((response) => {
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setErrMessage('');
            setEmail1(email);
            document.getElementById("email").style.display = 'flex';
            document.getElementById("email-edit").style.display = 'none';
        }).catch((error) => {
            setErrMessage(error.response.data.message);
        })
    };

    const onChangeEmail = (event) => {
        setEmail1(event.target.value)
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
    };

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(passwordSchema)
    });

    const saveNewPass = (values) => {
        axios.patch(
            "https://ambojakulinesiaserver.vercel.app/user/password",
            // "http://localhost:8000/user/password",
            values,
            config
        ).then((response) => {
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setErrMessage2('');
            document.getElementById("myprofile").style.display = 'block';
            document.getElementById("resetpass").style.display = 'none';
            document.getElementById("userinfo-header").innerHTML = 'My Profile';
            document.getElementById("pass-input1").type = 'password';
            document.getElementById("pass-input2").type = 'password';
            document.getElementById("passinput-icon1").className = 'bi bi-eye-slash-fill';
            document.getElementById("passinput-icon2").className = 'bi bi-eye-slash-fill';
        }).catch((error) => {
            setErrMessage2(error.response.data.message);
        })
    }

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
                {errMessage && <div className='errormessage2'>{errMessage}</div>}
                <div className='userinfo row'>
                    <label className='col-2'>Username</label>
                    <div className='col-10 userinfo-btn' id='username'>
                        <div>{username1}</div>
                        <div>
                            <button className='btn btn-secondary' onClick={editUsername}>Edit</button>
                        </div>
                    </div>
                    <div className='col-10 userinfo-btn' id='username-edit' style={{ 'display': 'none' }}>
                        <input value={username1} className='userinfo-input' onChange={onChangeUsername} required/>
                        <div>
                            <button className='btn btn-danger' onClick={cancelEditUsername}>Cancel</button>
                            <button className='btn btn-primary' onClick={() => { saveNewUsername(username1) }}>Save</button>
                        </div>
                    </div>
                </div>
                <div className='userinfo row'>
                    <label className='col-2'>Email</label>
                    <div className='col-10 userinfo-btn' id='email'>
                        <div>{email1}</div>
                        <div>
                            <button className='btn btn-secondary' onClick={editEmail}>Edit</button>
                        </div>
                    </div>
                    <div className='col-10 userinfo-btn' id='email-edit' style={{ 'display': 'none' }}>
                        <input type='email' value={email1} className='userinfo-input' onChange={onChangeEmail} required/>
                        <div>
                            <button className='btn btn-danger' onClick={cancelEditEmail}>Cancel</button>
                            <button className='btn btn-primary' onClick={() => { saveNewEmail(email1) }}>Save</button>
                        </div>
                    </div>
                </div>
                <button className='btn btn-secondary reset-pass' onClick={resetPass}>Reset Password</button>
            </div>

            <form onSubmit={handleSubmit(saveNewPass)} className='userinfo-container content-cntr respass-cntr' id='resetpass' style={{ 'display': 'none' }}>
                {errMessage2 && <div className='errormessage2'>{errMessage2}</div>}
                <div className='respass row'>
                    <label className='col-4'>New Password</label>
                    <div className='col-8 pass-input'>
                        <input type='password' id='pass-input1' className='respass-input2' {...register("password")} />
                        <i id='passinput-icon1' className="bi bi-eye-slash-fill" onClick={togglePass1}></i>
                    </div>
                    <span className='col-4'></span>
                    <span className='col-8'>{errors?.password?.message}</span>
                </div>
                <div className='respass row'>
                    <label className='col-4'>Confirm Password</label>
                    <div className='col-8 pass-input'>
                        <input type='password' id='pass-input2' className='respass-input2' {...register("confirmPassword")} />
                        <i id='passinput-icon2' className="bi bi-eye-slash-fill" onClick={togglePass2}></i>
                    </div>
                    <span className='col-4'></span>
                    <span className='col-8'>{errors?.confirmPassword?.message}</span>
                </div>

                <div className='respass-btn'>
                    <button className='btn btn-danger' onClick={cancelResetPass}>Cancel</button>
                    <button type='submit' className='btn btn-primary'>Save New Password</button>
                </div>
            </form>
            <ToastContainer />
        </div >
    )
};

export default UserSetting;