import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import AdminPost from "../pages/AdminPost";
import NamaPages2 from "../pages/NamaPages2";
import NamaPages2 from "../pages/NamaPages2";
import Homepage from "../pages/Homepage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="admindashboard" element={<AdminDashboard />} />
        <Route path="adminpost" element={<AdminPost />} />
        <Route path="NamaPages2" element={<NamaPages2 />} />
        <Route path="NamaPages2" element={<NamaPages2 />} />
        <Route path="NamaPages2" element={<NamaPages2 />} />
        <Route path="NamaPages2" element={<NamaPages2 />} />
        <Route path="NamaPages2" element={<NamaPages2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;