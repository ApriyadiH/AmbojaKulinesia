import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './Login.css';
import { userLogin } from '../../redux/modules/userSlice';
import axios from "axios";

const loginSchema = yup.object({
    email: yup.string().email("Email is not valid").required("Email is required"),
    password: yup.string().required("Password is required")
})

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const togglePass1 = () => {
        let inputType = document.getElementById("password");
        let icon = document.getElementById("passinput-icon1");
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
        resolver: yupResolver(loginSchema)
    });

    const login = async (values) => {
        // dispatch(userLogin(values))
        //     .then((data) => {
        //         console.log(data)
        //     })
        try {
            const response = await axios.post(
                "https://ambojakulinesiaserver.vercel.app/api/login",
                // "http://localhost:8000/api/login",
                values
            );
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className='login-container header-cntr'>
                <h4>Login</h4>
            </div>

            <div className='login-container content-cntr' id='myprofile'>
                <form className='login' onSubmit={handleSubmit(login)}>
                    <div className='row'>
                        <label className='col-3'>Email</label>
                        <input className='col-9 login-input2' id="email" name="email" {...register("email")} />
                        <span className='col-3'></span>
                        <span className='col-9'>{errors?.email?.message}</span>
                    </div>
                    <div className='row'>
                        <label className='col-3'>Password</label>
                        <div className='col-9 pass-input2'>
                            <input type='password' id='password' className='respass-input' {...register("password")} />
                            <i id='passinput-icon1' className="bi bi-eye-slash-fill" onClick={togglePass1}></i>
                        </div>
                        <span className='col-3'></span>
                        <span className='col-9'>{errors?.password?.message}</span>
                    </div>
                    <div className='login-btn my-2 '>
                        <button type='submit' className='btn btn-primary btn-width'>Login</button>
                    </div>
                </form>
            </div>
        </div >
    )
};

export default Login;