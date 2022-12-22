// Import Library
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// import component
import UserRequestList from "../components/postRequest/UserRequestList";
import AddPost from "../components/postRequest/AddPost";
import EditPost from "../components/postRequest/EditPost";

const UserRequest = () => {
    return (
        <div className="container">
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