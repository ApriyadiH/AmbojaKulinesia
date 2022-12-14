// Import library
import React, { useEffect, useState } from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";

const FoodListRegion = () => {
  const [foods, setFoods] = useState(
    {}
  );

  // const fetchFoods = async () => {
  //   const { data } = await axios.get("http://localhost:3001/ayam");
  //   setFoods(data);
  // };

  // useEffect(() => {
  //   fetchFoods();
  // }, []);

  return (
    <StContainer className="container-fluid">
      <StTitle>
        West Java
      </StTitle>
      <StCardContainer>
        <StCard className="card" width="20%">
          <StCardElement width="50%">
            <StImage src="https://tse4.mm.bing.net/th?id=OIP.oBMZKC_z74_SK7wFWTvf7gHaGm&pid=Api" className="d-block w-100" alt="pempek"/>
          </StCardElement>
          <StCardElement>
            <StNameLikes>
              <div>
                <h5>ayam</h5>
              </div>
              <div className="d-flex direction-row">
                <i className="bi bi-heart-fill mx-2" style={{color:"red"}}></i>
                <p>Likes</p>
              </div>
              <button type="button" className="btn btn-primary"> Detail </button>
            </StNameLikes>
          </StCardElement>
        </StCard>
        <StCard className="card" width="20%">
          <StCardElement width="50%">
            <StImage src="https://tse4.mm.bing.net/th?id=OIP.YEN0T1YzBxntg4MXQtI3dwHaFj&pid=Api" className="d-block w-100" alt="pempek"/>
          </StCardElement>
          <StCardElement width="50%">
            <StNameLikes>
              <div>
                <h5>ayaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaam</h5>
              </div>
              <div className="d-flex direction-row">
                <i className="bi bi-heart-fill mx-2" style={{color:"red"}}></i>
                <p>Likes</p>
              </div>
              <button type="button" className="btn btn-primary"> Detail </button>
            </StNameLikes>
          </StCardElement>
        </StCard>
        <StCard className="card" width="20%">
          <StCardElement width="50%">
            <StImage src="https://tse4.mm.bing.net/th?id=OIP.YEN0T1YzBxntg4MXQtI3dwHaFj&pid=Api" className="d-block w-100" alt="pempek"/>
          </StCardElement>
          <StCardElement>
            <StNameLikes>
              <div>
                <h5>ayam</h5>
              </div>
              <div className="d-flex direction-row">
                <i className="bi bi-heart-fill mx-2" style={{color:"red"}}></i>
                <p>Likes</p>
              </div>
              <button type="button" className="btn btn-primary"> Detail </button>
            </StNameLikes>
          </StCardElement>
        </StCard>
        <StCard className="card" width="20%">
          <StCardElement width="50%">
            <StImage src="https://tse4.mm.bing.net/th?id=OIP.YEN0T1YzBxntg4MXQtI3dwHaFj&pid=Api" className="d-block w-100" alt="pempek"/>
          </StCardElement>
          <StCardElement>
            <StNameLikes>
              <div>
                <h5>ayam</h5>
              </div>
              <div className="d-flex direction-row">
                <i className="bi bi-heart-fill mx-2" style={{color:"red"}}></i>
                <p>Likes</p>
              </div>
              <button type="button" className="btn btn-primary"> Detail </button>
            </StNameLikes>
          </StCardElement>
        </StCard>
      </StCardContainer>
    </StContainer>
  );
};

export default FoodListRegion;

const StContainer = styled.div`
  padding:  10px 20px 10px  ;
`

const StTitle = styled.h4`
  padding: 10px;
  font-size: calc(1.275rem + 0.3vw);
`
const StCardContainer = styled.div`
  border: 0px;
  padding:  10px 10px 10px;
  height: 70vh;
  overflow-y: scroll;


  display:flex;
  flex-direction:row;
`

const StCard = styled.div`
  border: 0px;
  background-Color: #ececec;
  padding:  10px 10px 10px;
  margin: 20px 20px 20px 20px ;
  width: ${props => props.width};
  max-height: 300px;

  display:flex;
  flex-direction:row;
`

const StCardElement = styled.div`
  width: ${props => props.width};
  padding:  10px 10px 10px;
`

const StImage = styled.img`
  height: 100px;
  object-fit: cover; 
`

const StNameLikes = styled.div`
  display:flex;
  flex-direction:column;
`