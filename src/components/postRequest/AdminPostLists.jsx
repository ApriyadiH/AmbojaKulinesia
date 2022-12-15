import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import './UserRequestList.css';
import { useDispatch } from 'react-redux';
import { editPost } from '../../redux/modules/editPostSlice';

const AdminPostsLists = () => {
    const dispatch = useDispatch();

    // ini nanti diganti pakai axios get, status approved aja
    const postLists = [
        {
            postId: 'xuhd272dkwjkfh',
            foodName: 'Pempek',
            region: 'South Sumatra',
            imageUrls: [
                { imageId: '2872eygfd28dg', imageUrl: 'url1' },
                { imageId: '228hddwhs28dg', imageUrl: 'url2' },
                { imageId: 'sd222ygfd28dg', imageUrl: 'url3' }],
            description: 'Pempek is a savoury Indonesian fish cake delicacy, made of fish and tapioca, from Palembang, South Sumatra.'
        },
        {
            postId: 'xsa27dhsj28d',
            foodName: 'Nasi Pecel Madiun',
            region: 'East Java',
            imageUrls: [
                { imageId: '2232rfssd28dg', imageUrl: 'url1' },
                { imageId: '282121fd28dg', imageUrl: 'url2' }
            ],
            description: 'Nasi pecel is made from rice, vegetables, peanut sauce, and soybeancake.'
        },
        {
            postId: 'daqjj381qsqad',
            foodName: 'Batagor',
            region: 'West Java',
            imageUrls: [
                { imageId: '2we22gfd28dg', imageUrl: 'url1' },
                { imageId: '28wqeygfd28dg', imageUrl: 'url2' }
            ],
            description: 'Batagor is well known food in Bandung.'
        },
        {
            postId: 'wqhuwq82u092',
            foodName: 'Brem',
            region: 'East Java',
            imageUrls: [
                { imageId: '22e2ygfd28dg', imageUrl: 'url1' },
                { imageId: 'wj2022ygfd2g', imageUrl: 'url2' }
            ],
            description: 'Brem is wellknown snack from Madiun.'
        },
        {
            postId: 'jaquh937hdd',
            foodName: 'Cilok',
            region: 'West Java',
            imageUrls: [
                { imageId: 'sqj298e2fvsx', imageUrl: 'url1' },
                { imageId: 'sqj298e2fvsx', imageUrl: 'url1' }
            ],
            description: 'Cilok is well known snack from Sundaneese.'
        },
        {
            postId: 'uq2h91hdwf3',
            foodName: 'Bolu Lembang',
            region: 'West Java',
            imageUrls: [
                { imageId: '11edcfffd28dg', imageUrl: 'url1' },
                { imageId: 'dafh982q9fjkd', imageUrl: 'url2' },
                { imageId: 'djwjq028ujdhw', imageUrl: 'url3' }
            ],
            description: 'Bolu lembang is cake from Lembang, Bandung.'
        },
        {
            postId: 'jadnjkdwquoi',
            foodName: 'Brownis Amanda',
            region: 'West Java',
            imageUrls: [
                { imageId: '2e2ygfd28dwwdg', imageUrl: 'url1' },
                { imageId: '21wqgeygfd28dg', imageUrl: 'url2' }
            ],
            description: 'Brownis is wellknown cake for Indonesian people specifically in Java'
        },
        {
            postId: 'ashqhhwff',
            foodName: 'Rendang',
            region: 'West Sumatra',
            imageUrls: [
                { imageId: 'djqo32jqiofd32', imageUrl: 'url1' },
                { imageId: '27ehdajhndkih8', imageUrl: 'url2' }
            ],
            description: "Rendang is delicious meat that become most of Indonesian people's favorite. "
        }
    ];

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
        // axios delete disini
    };

    return (
        <div className='userRequest-container'>
            <div className='userRequest-header'>
                <h5>Post List</h5>
            </div>
            <div className='userRequest-body admin-post'>
                <div className='adminpost-map'>
                    {postLists.map((request) => (
                        <div className='content-row adminpost-cntn' key={`id-${request.postId}`}>
                            <div>{request.foodName}</div>
                            <div>
                                <i className="bi bi-pencil-square" onClick={() => { editPostHandler(request) }}></i>
                                <i className="bi bi-trash" onClick={() => {deletePost(request.postId)}}></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default AdminPostsLists;