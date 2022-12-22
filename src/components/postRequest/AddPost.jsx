import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useEffect, useState } from "react";
import nextId from "react-id-generator";
import { useSelector } from 'react-redux';
import axios from 'axios';
import './AddPost.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPost = () => {
    const imgUrlInputId = nextId();
    const [imageUrl, setImageUrl] = useState('');

    const [images, setImages] = useState([]);

    const [foodPosts, setFoodPosts] = useState({
        region: '',
        foodName: '',
        description: ''
    });

    const [errMessage, setErrMessage] = useState('');

    const { addpostDisplay } = useSelector((state) => state.editPost);

    const display = () => {
        document.getElementById("addpost").style.display = addpostDisplay;
    };

    useEffect(() => {
        display()
    });

    const onChangeImgUrl = (event) => {
        setImageUrl(event.target.value);
    };

    const addImageInput = () => {
        setImages([...images, { id: imgUrlInputId, imgUrl: '' }]);
    };

    const reduceImageInput = (id) => {
        let newImgs = images.filter((img) => (img.id !== id));
        setImages(newImgs);
    };

    const handleChange = (event, id) => {
        let updateImageUrl = images.filter((img) => {
            if (img.id === id) {
                img.imgUrl = event.target.value
            }
            return img
        });
        setImages(updateImageUrl);
    };

    let imageUrls = [imageUrl];
    for (const img of images) {
        imageUrls = [...imageUrls, img.imgUrl]
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFoodPosts({ ...foodPosts, [name]: value })
    };

    const requestData = { ...foodPosts, imageUrls: imageUrls };
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.token;

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post(
            "https://ambojakulinesiaserver.vercel.app/post",
            // "http://localhost:8000/api/post",
            requestData,
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
            setImageUrl('');
            setImages([]);
            setFoodPosts({
                region: '',
                foodName: '',
                description: ''
            });
            setErrMessage('');
        }).catch((error) => {
            setErrMessage(error.response.data.message);
        })
    };

    return (
        <div className='addpost-container' id='addpost'>
            <div className='addpost-header'>
                <h5>Add Culinary</h5>
            </div>
            <form className='addpost-body' onSubmit={submitHandler}>
                {errMessage && <div className='errormessage3'>{errMessage}</div>}
                <div className='row'>
                    <label className='col-4'>Region</label>
                    <select className='col-8 select-region' name='region' value={foodPosts.region} onChange={onChangeHandler}>
                        <option defaultValue>Choose Region...</option>
                        <option value='Aceh'>Aceh</option>
                        <option value='Bali'>Bali</option>
                        <option value='Bangka Belitung Islands'>Bangka Belitung Islands</option>
                        <option value='Banten'>Banten</option>
                        <option value='Bengkulu'>Bengkulu</option>
                        <option value='Central Java'>Central Java</option>
                        <option value='Central Kalimantan'>Central Kalimantan</option>
                        <option value='Central Sulawesi'>Central Sulawesi</option>
                        <option value='East Java'>East Java</option>
                        <option value='East Kalimantan'>East Kalimantan</option>
                        <option value='East Nusa Tenggara'>East Nusa Tenggara</option>
                        <option value='Gorontalo'>Gorontalo</option>
                        <option value='Jambi'>Jambi</option>
                        <option value='Lampung'>Lampung</option>
                        <option value='Maluku'>Maluku</option>
                        <option value='North Kalimantan'>North Kalimantan</option>
                        <option value='North Maluku'>North Maluku</option>
                        <option value='North Sulawesi'>North Sulawesi</option>
                        <option value='North Sumatra'>North Sumatra</option>
                        <option value='Papua'>Papua</option>
                        <option value='Riau'>Riau</option>
                        <option value='Riau Islands'>Riau Islands</option>
                        <option value='Southeast Sulawesi'>Southeast Sulawesi</option>
                        <option value='South Kalimantan'>South Kalimantan</option>
                        <option value='South Sulawesi'>South Sulawesi</option>
                        <option value='South Sumatra'>South Sumatra</option>
                        <option value='Special Capital Region of Jakarta'>Jakarta</option>
                        <option value='Special Region of Yogyakarta'>Yogyakarta</option>
                        <option value='West Java'>West Java</option>
                        <option value='West Kalimantan'>West Kalimantan</option>
                        <option value='West Nusa Tenggara'>West Nusa Tenggara</option>
                        <option value='West Papua'>West Papua</option>
                        <option value='West Sulawesi'>West Sulawesi</option>
                        <option value='West Sumatra'>West Sumatra</option>
                        <option value='Multiple Region'>Multiple Region</option>
                    </select>
                </div>
                <div className='row'>
                    <label className='col-4'>Culinary Name</label>
                    <input className='col-8 addpost-input' name="foodName" value={foodPosts.foodName} onChange={onChangeHandler} required />
                </div>
                <div>
                    <div className='row'>
                        <label className='col-4'>Image</label>
                        <div className='col-8 img-col'>
                            <input className='addpost-input img-input' placeholder='Put image URL here' value={imageUrl} onChange={onChangeImgUrl} required />
                            <i className="bi bi-plus-circle-fill" onClick={addImageInput}></i>
                        </div>
                    </div>
                    {images.map((img) => (
                        <div className='row additional-imgurl' key={`id-${img.id}`}>
                            <label className='col-4'>Image</label>
                            <div className='col-8 img-col'>
                                <input className='addpost-input img-input' placeholder='Put image URL here' value={img.imgUrl} onChange={event => handleChange(event, img.id)} required />
                                <i className="bi bi-dash-circle-fill" onClick={() => { reduceImageInput(img.id) }}></i>
                            </div>
                        </div>
                    )
                    )}
                </div>
                <div className='row'>
                    <label className='col-4'>Description</label>
                    <textarea className='col-8 addpost-input' rows='4' name="description" value={foodPosts.description} onChange={onChangeHandler} required />
                </div>
                <button type='submit' className='btn btn-primary submit-btn'>Submit</button>
            </form>
            <ToastContainer />
        </div>
    )
};

export default AddPost;