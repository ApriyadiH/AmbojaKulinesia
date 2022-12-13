import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import ListRating from "../pages/ListRating";
import ListRegion from "../pages/ListRegion";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Food/:id" element={<Detail />} />
        <Route path="Food/:region" element={<ListRegion />} />
        <Route path="Food/rating" element={<ListRating />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;