// Import library
import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";

const Searchbox = () => {
  return (
    <div className="container-fluid d-flex flex-row-reverse bg-light">
        <StInput type="text" placeholder="Search here"></StInput>
        <StButton type="button"><i class="bi bi-search"></i></StButton>
    </div>
  );
};

export default Searchbox;

const StInput = styled.input`
  width: 30vh;
  padding: 5px 15px;
  margin: 10px;
  border: none;
  border-radius: 10px;  
`

const StButton = styled.button`
  border: none;
  background-color: transparent;
`