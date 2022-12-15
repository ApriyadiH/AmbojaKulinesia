// Import Library
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// import component
import Navbar from "../components/general/Navbar";
import AddPost from "../components/general/AddPost";
import UserRequestList from "../components/general/UserRequestList";
import EditPost from "../components/general/EditPost";

const UserRequest = () => {
    return (
        <div className="container">
            <Navbar />
            <div className='row'>
                <div className="col">
                    <UserRequestList />
                </div>
                <div className="col">
                    <AddPost />
                    <EditPost />
                </div>
            </div>
        </div>
    )
};

export default UserRequest;