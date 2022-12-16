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
                'https://www.piknikdong.com/wp-content/uploads/2021/02/Cara-Membuat-Pempek.jpg',
                'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/09/04/4062442039.jpeg',
                'https://img.okezone.com/content/2020/12/03/298/2321042/resep-pempek-dos-udang-rebon-rasanya-jos-n1FGhLyt0x.jpg'
            ],
            description: 'Pempek is a savoury Indonesian fish cake delicacy, made of fish and tapioca, from Palembang, South Sumatra.'
        },
        {
            postId: 'xsa27dhsj28d',
            foodName: 'Nasi Pecel Madiun',
            region: 'East Java',
            imageUrls: [
                'url1',
                'url2'
            ],
            description: 'Nasi pecel is made from rice, vegetables, peanut sauce, and soybeancake.'
        },
        {
            postId: 'daqjj381qsqad',
            foodName: 'Batagor',
            region: 'West Java',
            imageUrls: [
                'url1',
                'url2'
            ],
            description: 'Batagor is well known food in Bandung.'
        },
        {
            postId: 'wqhuwq82u092',
            foodName: 'Brem',
            region: 'East Java',
            imageUrls: [
                'url1',
                'url2'
            ],
            description: 'Brem is wellknown snack from Madiun.'
        },
        {
            postId: 'jaquh937hdd',
            foodName: 'Cilok',
            region: 'West Java',
            imageUrls: [
                'url1',
                'url2'
            ],
            description: 'Cilok is well known snack from Sundaneese.'
        },
        {
            postId: 'uq2h91hdwf3',
            foodName: 'Bolu Lembang',
            region: 'West Java',
            imageUrls: [
                'url1',
                'url2',
                'url3'
            ],
            description: 'Bolu lembang is cake from Lembang, Bandung.'
        },
        {
            postId: 'jadnjkdwquoi',
            foodName: 'Brownis Amanda',
            region: 'West Java',
            imageUrls: [
                'url1',
                'url2'
            ],
            description: 'Brownis is well known cake for Indonesian people specifically in Java'
        },
        {
            postId: 'ashqhhwff',
            foodName: 'Rendang',
            region: 'West Sumatra',
            imageUrls: [
                'url1',
                'url2'
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
                            <div className='usereditdel'>
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