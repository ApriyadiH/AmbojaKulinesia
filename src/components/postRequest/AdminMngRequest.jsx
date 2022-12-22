import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './AdminMngRequest.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminMngRequest = () => {
    const [pendingLists, setPendingLists] = useState([]);
    const [errMessage, setErrMessage] = useState('');

    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.token;

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    useEffect(() => {
        axios.get(
            "https://ambojakulinesiaserver.vercel.app/admin/request",
            // "http://localhost:8000/api/admin/request",
            config
        ).then((response) => {
            const { data } = response.data
            setPendingLists(data);
            setErrMessage('');
        }).catch((error) => {
            setErrMessage(error.response.data.message);
        })
    });

    const [selectedReq, setSelectedReq] = useState({
        foodName: '',
        region: '',
        imageUrls: [],
        description: ''
    });

    const isAvailableReq = () => {
        if (pendingLists.length > 0) {
            document.getElementById('req-available').style.display = 'flex';
            document.getElementById('req-unavailable').style.display = 'none';
        } else {
            document.getElementById('req-available').style.display = 'none';
            document.getElementById('req-unavailable').style.display = 'flex';
        }
    };

    useEffect(() => {
        isAvailableReq();
    })

    const showbox = (req) => {
        document.getElementById("box1").classList.add('col-6');
        document.getElementById("box1").classList.remove('box1-width');
        document.getElementById("box2").style.display = 'block';

        setSelectedReq({
            ...selectedReq,
            foodName: req.foodName,
            region: req.region,
            imageUrls: req.imageUrls,
            description: req.description
        })
    };

    const hidebox = () => {
        document.getElementById("box1").classList.remove('col-6');
        document.getElementById("box1").classList.add('box1-width');
        document.getElementById("box2").style.display = 'none';

        setSelectedReq({
            ...selectedReq,
            foodName: '',
            region: '',
            imageUrls: [],
            description: ''
        })
    };

    const approved = (postId) => {
        axios.patch(
            "https://ambojakulinesiaserver.vercel.app/admin/request/approve",
            // "http://localhost:8000/api/admin/request/approve",
            { postId: postId },
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
        }).catch((error) => {
            setErrMessage(error.response.data.message);
        })
    };

    const reject = (postId) => {
        axios.patch(
            "https://ambojakulinesiaserver.vercel.app/admin/request/reject",
            // "http://localhost:8000/api/admin/request/reject",
            { postId: postId },
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
        }).catch((error) => {
            setErrMessage(error.response.data.message);
        })
    };

    return (
        <div className='row'>
            <div className='box1 box1-width' id='box1'>
                <div className='request-header'>
                    <h5>Manage Request</h5>
                </div>
                <div className='request-body' id='req-unavailable' style={{ 'display': 'none' }}>
                    {errMessage && <div className='errormessage2'>{errMessage}</div>}
                    <h6>There is no request...</h6>
                </div>
                <div className='request-body' id='req-available'>
                    {errMessage && <div className='errormessage2'>{errMessage}</div>}
                    <div className='request-map'>
                        {pendingLists.map((request) => (
                            <div className='cntn-row' key={`id-${request.postId}`}>
                                <div onClick={() => { showbox(request) }} className='title'>{request.foodName}</div>
                                <div className='check'>
                                    <i className="bi bi-check-circle-fill apprv" onClick={() => { approved(request.postId) }}></i>
                                    <i className="bi bi-x-circle-fill rejct" onClick={() => { reject(request.postId) }}></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='box2 col-6' id='box2' style={{ 'display': 'none' }}>
                <div className='detail-header'>
                    <i className="bi bi-caret-left-square-fill" onClick={hidebox}></i>
                    <div>Request Detail</div>
                </div>
                <div className='detail-body'>
                    <h4>{selectedReq.foodName}</h4>
                    <div className='region-box'>{selectedReq.region}</div>

                    <div id="carouselAdminReq" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {selectedReq.imageUrls.map((url, index) => (
                                <div key={`id-${index}`}>
                                    {index === 0 ? (
                                        <div className="carousel-item active" >
                                            <img src={url} className="d-block w-100 imgheight" alt={selectedReq.foodName} />
                                        </div>
                                    ) : (
                                        <div className="carousel-item" >
                                            <img src={url} className="d-block w-100 imgheight" alt={selectedReq.foodName} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselAdminReq" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselAdminReq" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className='desc'>{selectedReq.description}</div>

                </div>
            </div>
            <ToastContainer />
        </div>
    )
};

export default AdminMngRequest;