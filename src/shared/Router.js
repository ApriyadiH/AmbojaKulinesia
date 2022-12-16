import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/general/Navbar";
import Test from "../components/Test";

import Homepage from "../pages/Homepage";
import Detail from "../pages/Detail";
import ListRating from "../pages/ListRating";
import ListRegion from "../pages/ListRegion";
import UserSettings from "../pages/UserSettings";
import UserRequest from "../pages/UserRequest";
import AdminPost from "../pages/AdminPost";
import AdminRequest from "../pages/AdminRequest";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Router = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="Food/detail/:id" element={<Detail />} />
          <Route path="Food/region/:region" element={<ListRegion />} />
          <Route path="Food/rating" element={<ListRating />} />
          <Route path="User/setting" element={<UserSettings />} />
          <Route path="User/request" element={<UserRequest />} />
          <Route path="Admin/post" element={<AdminPost />} />
          <Route path="Admin/request" element={<AdminRequest />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;