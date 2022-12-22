// Import library
import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";

const Homepage = () => {
  return (
    <div className="container-fluid pt-5">
      <div className='row'>
        <StMapContainer className='col-md-10'>
          <StMap src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Indonesia%2C_administrative_divisions_-_en_-_monochrome.svg/1280px-Indonesia%2C_administrative_divisions_-_en_-_monochrome.svg.png" alt="Indonesia map"></StMap>
        </StMapContainer>
        {/* <div className='col-md-2'>
          <h1>Best Culinary</h1>
        </div> */}
      </div>
    </div>
  );
};

export default Homepage;

const StMapContainer = styled.div`
`

const StMap = styled.img`
  width: 95%;
  border-radius: 15px;
  display:block;
  margin: auto;
`