// Import Library
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// import component
import Navbar from "../components/general/Navbar";
import AdminPostsLists from "../components/general/AdminPostLists";
import AddPost from "../components/general/AddPost";

const AdminPost = () => {
    return (
        <div className="container">
            <Navbar />
            <div className='row'>
                <div className="col">
                    <AdminPostsLists />
                </div>
                <div className="col">
                    <AddPost />
                </div>
            </div>
        </div>
    )
};

export default AdminPost;