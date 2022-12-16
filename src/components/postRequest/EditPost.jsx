import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useEffect, useState } from "react";
import nextId from "react-id-generator";
import { useDispatch, useSelector } from 'react-redux';
import { cancelEdit, deleteUrl, saveEdit } from '../../redux/modules/editPostSlice';
import './AddPost.css';

const EditPost = () => {
    const imgUrlId = nextId();
    const dispatch = useDispatch();

    const {
        postId,
        foodName,
        region,
        imageUrls,
        description,
        editpostDisplay
    } = useSelector((state) => state.editPost);

    const [posts, setPosts] = useState({
        region: '',
        foodName: '',
        imageUrl: '',
        description: ''
    });

    const imageUrlList = imageUrls.slice(1);
    const [imageList, setImageList] = useState([]);

    const display = () => {
        document.getElementById("editpost").style.display = editpostDisplay;
    };

    useEffect(() => {
        display()
    })

    useEffect(() => {
        setPosts({
            region: region,
            foodName: foodName,
            imageUrl: imageUrls[0],
            description: description
        })
    }, [region, foodName, imageUrls, description]);

    const onChangeValue = (event) => {
        const { name, value } = event.target;
        setPosts({ ...posts, [name]: value })
    };

    const deleteImgUrl = (id) => {
        dispatch(deleteUrl(id))
    };

    const addImageInput = () => {
        setImageList([...imageList, { imageId: imgUrlId, imageUrl: '' }]);
    };

    const reduceImageUrl = (id) => {
        let newImgs = imageList.filter((img) => (img.imageId !== id));
        setImageList(newImgs);
    };

    const handleUrlChange = (event, id) => {
        let updateImageUrl = imageList.filter((img) => {
            if (img.imageId === id) {
                img.imageUrl = event.target.value
            }
            return img
        });
        setImageList(updateImageUrl);
    };

    let UrlList = [];
    for (const url of imageUrls) {
        UrlList = [...UrlList, url]
    };
    for (const url of imageList) {
        UrlList = [...UrlList, url.imgUrl]
    };

    const saveEditPost = () => {
        // axios put disini
        dispatch(saveEdit())
    };

    const cancelEditPost = () => {
        dispatch(cancelEdit())
    };

    return (
        <div className='addpost-container' id='editpost'>
            <div className='addpost-header'>
                <h5>Edit Culinary</h5>
            </div>
            <form className='addpost-body'>
                <div className='row'>
                    <label className='col-4'>Region</label>
                    <select className='col-8 select-region' name='region' value={posts.region} onChange={onChangeValue}>
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
                        <option value='Special Capital Region of Jakarta'>Special Capital Region of Jakarta</option>
                        <option value='Special Region of Yogyakarta'>Special Region of Yogyakarta</option>
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
                    <input className='col-8 addpost-input' name="foodName" value={posts.foodName} onChange={onChangeValue} required />
                </div>
                <div>
                    <div className='row'>
                        <label className='col-4'>Image</label>
                        <div className='col-8 img-col'>
                            <input
                                className='addpost-input img-input'
                                placeholder='Put image URL here'
                                name="imageUrl"
                                value={posts.imageUrl}
                                onChange={onChangeValue}
                                required
                            />
                            <i className="bi bi-plus-circle-fill" onClick={addImageInput}></i>
                        </div>
                    </div>
                    {imageUrlList.map((img, index) => (
                        <div className='row additional-imgurl' key={`id-${index}`}>
                            <label className='col-4'>Image</label>
                            <div className='col-8 img-col'>
                                <div className='imgurl'>{img}</div>
                                <i className="bi bi-dash-circle-fill" onClick={() => { deleteImgUrl(index + 1)}}></i>
                            </div>
                        </div>
                    )
                    )}
                    {imageList.map((img) => (
                        <div className='row additional-imgurl' key={`id-${img.imageId}`}>
                            <label className='col-4'>Image</label>
                            <div className='col-8 img-col'>
                                <input 
                                className='addpost-input img-input' 
                                placeholder='Put image URL here' 
                                value={img.imageUrl} 
                                onChange={event => handleUrlChange(event, img.imageId)} 
                                required 
                                />
                                <i className="bi bi-dash-circle-fill" onClick={() => { reduceImageUrl(img.imageId) }}></i>
                            </div>
                        </div>
                    )
                    )}
                </div>
                <div className='row'>
                    <label className='col-4'>Description</label>
                    <textarea className='col-8 addpost-input' rows='4' name="description" value={posts.description} onChange={onChangeValue} required />
                </div>
                <div className='editpost-btn'>
                    <div className='btn btn-danger save-btn' onClick={cancelEditPost}>Cancel</div>
                    <button type='submit' className='btn btn-primary save-btn' onClick={saveEditPost}>Save</button>
                </div>
            </form>
        </div>
    )
};

export default EditPost;