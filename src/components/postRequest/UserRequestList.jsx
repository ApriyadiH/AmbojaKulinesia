import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useEffect } from 'react';
import './UserRequestList.css';
import { useDispatch } from 'react-redux';
import { editPost } from '../../redux/modules/editPostSlice';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const UserRequestList = () => {
    const dispatch = useDispatch();

    const [requestLists, setRequestLists] = useState([]);
    const [errMessage, setErrMessage] = useState('');

    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.token;

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    useEffect(() => {
        axios.get(
            "https://ambojakulinesiaserver.vercel.app/user/request",
            // "http://localhost:8000/api/user/request",
            config
        ).then((response) => {
            const { data } = response.data
            setRequestLists(data);
            setErrMessage('');
        }).catch((error) => {
            setErrMessage(error.response.data.message);
        })
    });

    const approvedReq = requestLists.filter((req) => (req.status === 'approved'));
    const pendingReq = requestLists.filter((req) => (req.status === 'pending'));
    const rejectedReq = requestLists.filter((req) => (req.status === 'rejected'));

    const condition = () => {
        if (approvedReq.length > 0) {
            document.getElementById("no-approved").style.display = 'none';
            document.getElementById("approved-list").style.display = 'flex';
        } else {
            document.getElementById("no-approved").style.display = 'flex';
            document.getElementById("approved-list").style.display = 'none';
        }

        if (pendingReq.length > 0) {
            document.getElementById("no-pending").style.display = 'none';
            document.getElementById("pending-list").style.display = 'flex';
        } else {
            document.getElementById("no-pending").style.display = 'flex';
            document.getElementById("pending-list").style.display = 'none';
        }

        if (rejectedReq.length > 0) {
            document.getElementById("no-rejected").style.display = 'none';
            document.getElementById("rejected-list").style.display = 'flex';
        } else {
            document.getElementById("no-rejected").style.display = 'flex';
            document.getElementById("rejected-list").style.display = 'none';
        }
    };

    useEffect(() => {
        condition()
    })

    const editRequest = (req) => {
        dispatch(editPost({
            postId: req.postId,
            foodName: req.foodName,
            region: req.region,
            imageUrls: req.imageUrls,
            description: req.description
        }))
    };

    const deleteRequest = (postId) => {
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
    }

    return (
        <div className='userRequest-container'>
            <div className='userRequest-header'>
                <h5>Request List</h5>
            </div>
            <div className='userRequest-body'>
                {errMessage && <div className='errormessage3'>{errMessage}</div>}
                <h5>Approved</h5>
                <div id='no-approved' style={{ 'display': 'none' }}>
                    <h6>There is no approved request...</h6>
                </div>
                <div id='approved-list' className='approved'>
                    {approvedReq.map((request) => (
                        <div className='approved-row' key={`id-${request.postId}`}>
                            <div className='status-box'><i className="bi bi-check-lg approved-check"></i></div>
                            <div className='content-row'>
                                <div>{request.foodName}</div>
                                <div>
                                    <i className="bi bi-pencil-square" onClick={() => { editRequest(request) }}></i>
                                    <i className="bi bi-trash" onClick={() => { deleteRequest(request.postId) }}></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <h5>Pending</h5>
                <div id='no-pending' style={{ 'display': 'none' }}>
                    <h6>There is no pending request...</h6>
                </div>
                <div id='pending-list' className='pending'>
                    {pendingReq.map((request) => (
                        <div className='approved-row' key={`id-${request.postId}`}>
                            <div className='status-box'><i className="bi bi-clock-history"></i></div>
                            <div className='content-row'>
                                <div>{request.foodName}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <h5>Rejected</h5>
                <div id='no-rejected' style={{ 'display': 'none' }}>
                    <h6>There is no rejected request...</h6>
                </div>
                <div id='rejected-list' className='rejected'>
                    {rejectedReq.map((request) => (
                        <div className='approved-row' key={`id-${request.postId}`}>
                            <div className='status-box'><i className="bi bi-x-lg reject-check"></i></div>
                            <div className='content-row'>
                                <div>{request.foodName}</div>
                                <div>
                                    <i className="bi bi-trash" onClick={() => { deleteRequest(request.postId) }}></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer />
        </div>
    )
};

export default UserRequestList;