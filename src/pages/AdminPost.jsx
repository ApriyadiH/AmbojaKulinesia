// Import Library
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// import component
import AdminPostsLists from "../components/postRequest/AdminPostLists";
import AddPost from "../components/postRequest/AddPost";
import EditPost from "../components/postRequest/EditPost";

const AdminPost = () => {
    return (
        <div className="container">
            <div className='row'>
                <div className="col">
                    <AdminPostsLists />
                </div>
                <div className="col">
                    <AddPost />
                    <EditPost />
                </div>
            </div>
        </div>
    )
};

export default AdminPost;