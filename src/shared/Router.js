import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Detail from "../pages/Detail";
import ListRating from "../pages/ListRating";
import ListRegion from "../pages/ListRegion";
import UserSettings from "../pages/UserSettings";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Food/:id" element={<Detail />} />
        <Route path="Food/:region" element={<ListRegion />} />
        <Route path="Food/rating" element={<ListRating />} />
        <Route path="User/setting" element={<UserSettings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;