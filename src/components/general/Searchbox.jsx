// Import library
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from "react";

const Searchbox = () => {
  return (
    <div className="container">
        <h1>Search box</h1>
        <p><input type="text" placeholder="Search here"/></p>
        <button type="button" class="btn btn-outline-primary">Search</button>
    </div>
  );
};

export default Searchbox;