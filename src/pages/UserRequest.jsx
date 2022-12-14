// Import Library
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// import component
import Navbar from "../components/general/Navbar";
import UserRequestList from "../components/general/UserRequestList";
import AddPost from "../components/general/AddPost";

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
                </div>
            </div>
        </div>
    )
};

export default UserRequest;