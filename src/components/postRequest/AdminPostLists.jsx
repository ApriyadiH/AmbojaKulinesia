import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useEffect } from 'react';
import './UserRequestList.css';
import { useDispatch } from 'react-redux';
import { editPost } from '../../redux/modules/editPostSlice';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminPostsLists = () => {
    const dispatch = useDispatch();

    const [postLists, setPostLists] = useState([]);
    const [errMessage, setErrMessage] = useState('');

    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.token;

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    useEffect(() => {
        axios.get(
            "https://ambojakulinesiaserver.vercel.app/admin/post",
            // "http://localhost:8000/api/admin/post",
            config
        ).then((response) => {
            const { data } = response.data
            setPostLists(data);
            setErrMessage('');
        }).catch((error) => {
            setErrMessage(error.response.data.message);
        })
    });

    const editPostHandler = (req) => {
        dispatch(editPost({
            postId: req.postId,
            foodName: req.foodName,
            region: req.region,
            imageUrls: req.imageUrls,
            description: req.description
        }))
    };

    const deletePost = (postId) => {
        axios.delete(
            "https://ambojakulinesiaserver.vercel.app/post",
            // "http://localhost:8000/api/post",
            {
                data: { postId: postId },
                headers: { Authorization: `Bearer ${token}` }
            }
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
        }).catch((error) => {
            setErrMessage(error.response.data.message);
        })
    };

    return (
        <div className='userRequest-container'>
            <div className='userRequest-header'>
                <h5>Post List</h5>
            </div>
            <div className='userRequest-body admin-post'>
                {errMessage && <div className='errormessage3'>{errMessage}</div>}
                <div className='adminpost-map'>
                    {postLists.map((request) => (
                        <div className='content-row adminpost-cntn' key={`id-${request.postId}`}>
                            <div>{request.foodName}</div>
                            <div className='usereditdel'>
                                <i className="bi bi-pencil-square" onClick={() => { editPostHandler(request) }}></i>
                                <i className="bi bi-trash" onClick={() => { deletePost(request.postId) }}></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer />
        </div>
    )
};

export default AdminPostsLists;