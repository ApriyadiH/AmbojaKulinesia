import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useEffect } from 'react';
import './UserRequestList.css';
import { useDispatch } from 'react-redux';
import { editPost } from '../../redux/modules/editPostSlice';

const UserRequestList = () => {
    const dispatch = useDispatch();

    // ini nanti diganti pakai axios get
    const requestLists = [
        {
            postId: 'xuhd272dkwjkfh',
            foodName: 'Pempek',
            region: 'South Sumatra',
            imageUrls: [
                { imageId: '2872eygfd28dg', imageUrl: 'https://www.piknikdong.com/wp-content/uploads/2021/02/Cara-Membuat-Pempek.jpg' },
                { imageId: '228hddwhs28dg', imageUrl: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/09/04/4062442039.jpeg' },
                { imageId: 'sd222ygfd28dg', imageUrl: 'https://img.okezone.com/content/2020/12/03/298/2321042/resep-pempek-dos-udang-rebon-rasanya-jos-n1FGhLyt0x.jpg' }
            ],
            description: 'Pempek is a savoury Indonesian fish cake delicacy, made of fish and tapioca, from Palembang, South Sumatra.',
            status: 'approved'
        },
        {
            postId: 'xsa27dhsj28d',
            foodName: 'Nasi Pecel Madiun',
            region: 'East Java',
            imageUrls: [
                {imageId: '2232rfssd28dg', imageUrl:'url1'},
                {imageId: '282121fd28dg', imageUrl:'url2'}
            ],
            description: 'Nasi pecel is made from rice, vegetables, peanut sauce, and soybeancake.',
            status: 'approved'
        },
        {
            postId: 'daqjj381qsqad',
            foodName: 'Batagor',
            region: 'West Java',
            imageUrls: [
                {imageId: '2we22gfd28dg', imageUrl:'url1'},
                {imageId: '28wqeygfd28dg', imageUrl:'url2'}
            ],
            description: 'Batagor is well known food in Bandung.',
            status: 'approved'
        },
        {
            postId: 'daqjj3sswsqad',
            foodName: 'Batagor1',
            region: 'West Java',
            imageUrls: [
                {imageId: '22e2ygfd28dg', imageUrl:'url1'}
            ],
            description: 'Batagor is well known food in Bandung.',
            status: 'approved'
        },
        {
            postId: 'daqj24e2sqad',
            foodName: 'Batagor2',
            region: 'West Java',
            imageUrls: [
                {imageId: 'dq8722gfd28dg', imageUrl:'url1'}
            ],
            description: 'Batagor is well known food in Bandung.',
            status: 'approved'
        },
        {
            postId: 'daq3r31qsqad',
            foodName: 'Batagor3',
            region: 'West Java',
            imageUrls: [
                {imageId: '11edcfffd28dg', imageUrl:'url1'}
            ],
            description: 'Batagor is well known food in Bandung.',
            status: 'approved'
        },
        {
            postId: 'dhwyqu2729',
            foodName: 'Croissant',
            region: 'West JavaSpecial Capital Region of Jakarta',
            imageUrls: [
                {imageId: '2e2ygfd28dwwdg', imageUrl:'url1'},
                {imageId: '21wqgeygfd28dg', imageUrl:'url2'}
            ],
            description: 'Croissant is a modern food loved by many Indonesian people.',
            status: 'rejected'
        }
    ];

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
        //axios delete disini
    }

    return (
        <div className='userRequest-container'>
            <div className='userRequest-header'>
                <h5>Request List</h5>
            </div>
            <div className='userRequest-body'>
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
                                    <i className="bi bi-trash" onClick={() => {deleteRequest(request.postId)}}></i>
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
                                    <i className="bi bi-trash" onClick={() => {deleteRequest(request.postId)}}></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default UserRequestList;