// Import Library
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// import component
import AdminMngRequest from "../components/postRequest/AdminMngRequest";
import Navbar from "../components/general/Navbar";

const AdminRequest = () => {
    return (
        <div>
            <Navbar />
            <AdminMngRequest />
        </div>
    )
};

export default AdminRequest;