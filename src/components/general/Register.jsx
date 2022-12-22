import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './Login.css';
import axios from 'axios';
import { useState } from 'react';

const passwordRules = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,20}$/;

const registerSchema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Email is not valid").required("Email is required"),
    password: yup
        .string()
        .matches(passwordRules, "Password must contain at least 8 characters, one uppercase, and one number")
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password must match")
        .required("Required")
});

const Register = () => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('');

    const togglePass1 = () => {
        let inputType = document.getElementById("password1");
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
        let inputType = document.getElementById("password2");
        let icon = document.getElementById("passinput-icon2");
        if (inputType.type === 'password') {
            inputType.type = 'text';
            icon.className = 'bi bi-eye-fill';
        } else {
            inputType.type = 'password';
            icon.className = 'bi bi-eye-slash-fill';
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(registerSchema)
    });

    const signup = async (values) => {
        try {
            await axios.post(
                "https://ambojakulinesiaserver.vercel.app/signup",
                // "http://localhost:8000/api/signup",
                values
            )
                .then((response) => {
                    setErrorMsg('');
                    navigate('/Login');
                })
        } catch (error) {
            setErrorMsg(error.response.data.message);
        }
    }

    return (
        <div>
            <div className='register-container header-cntr'>
                <h4>Register</h4>
            </div>

            <div className='register-container content-cntr' id='myprofile'>
                {errorMsg && <div className='errormessage2'>{errorMsg}</div>}

                <form className='login' onSubmit={handleSubmit(signup)}>
                    <div className='row'>
                        <label className='col-4'>Username</label>
                        <input className='col-8 login-input3' id="username" name="username" {...register("username")} />
                        <span className='col-4'></span>
                        <span className='col-8'>{errors?.username?.message}</span>
                    </div>
                    <div className='row'>
                        <label className='col-4'>Email</label>
                        <input className='col-8 login-input3' id="email" name="email" {...register("email")} />
                        <span className='col-4'></span>
                        <span className='col-8'>{errors?.email?.message}</span>
                    </div>
                    <div className='row'>
                        <label className='col-4'>Password</label>
                        <div className='col-8 pass-input3'>
                            <input type='password' id='password1' className='respass-input' {...register("password")} />
                            <i id='passinput-icon1' className="bi bi-eye-slash-fill" onClick={togglePass1}></i>
                        </div>
                        <span className='col-4'></span>
                        <span className='col-8'>{errors?.password?.message}</span>
                    </div>
                    <div className='row'>
                        <label className='col-4'>Confirm Password</label>
                        <div className='col-8 pass-input3'>
                            <input type='password' id='password2' className='respass-input' {...register("confirmPassword")} />
                            <i id='passinput-icon2' className="bi bi-eye-slash-fill" onClick={togglePass2}></i>
                        </div>
                        <span className='col-4'></span>
                        <span className='col-8'>{errors?.confirmPassword?.message}</span>
                    </div>
                    <div className='login-btn my-2 '>
                        <button type='submit' className='btn btn-primary btn-width2'>Signup</button>
                    </div>
                </form>
                <div className='linktoregister'>
                    <span>Already have an account?</span>
                    <Link to='/Login'>Login</Link>
                </div>
            </div>
        </div >
    )
}

export default Register;