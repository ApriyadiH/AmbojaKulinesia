// Import library
import React, { useEffect, useState } from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";

const FoodListRegion = () => {
  const region = "West Java"
  const foods = [
    {
      postId:"1",
      foodName: "Surabi Bandung",
      likes: "60",
      image: "https://cdn-cas.orami.co.id/parenting/images/5-surabi.width-1000.jpg"
    },
    {
      postId:"2",
      foodName: "Batagor",
      likes: "90",
      image: "https://cdn-cas.orami.co.id/parenting/images/makanan_khas_Sunda-batagor.width-1000.jpg"
    },
    {
      postId:"3",
      foodName: "Cimol",
      likes: "60",
      image: "https://cdn-cas.orami.co.id/parenting/images/2-cilok.width-1000.jpg"
    },
    {
      postId:"4",
      foodName: "Mie Kocok Bandung",
      likes: "40",
      image: "https://cdn-cas.orami.co.id/parenting/images/mie_kocok2.width-1000.jpg"
    },
    {
      postId:"5",
      foodName: "Seblak",
      likes: "70",
      image: "https://cdn-cas.orami.co.id/parenting/images/seblak_1.width-1000.jpg"
    },
    {
      postId:"6",
      foodName: "Bandros",
      likes: "20",
      image: "https://cdn-cas.orami.co.id/parenting/images/Bandros.width-1000.jpg"
    },
  ]


  // const [foods, setFoods] = useState(
  //   []
  // );

  // const fetchFoods = async () => {
  //   const { data } = await axios.get("http://localhost:3001/ayam");
  //   setFoods(data);
  // };

  // useEffect(() => {
  //   fetchFoods();
  // }, []);

  return (
    <StContainer className="container-fluid">
      <StCardTitle>
        <h4>{region}</h4>
      </StCardTitle>
      <StCardContainer>
        <StScrollBar>
          <div className="row">
            {foods.map((food) => {
              return (
              <StCard className="container col-md-3">
                <StCardElement width="50%">
                  <StImage src={food.image} className="d-block w-100" alt={food.foodName}/>
                </StCardElement>
                <StCardElement>
                  <StNameLikes>
                    <div>
                      <h5>{food.foodName}</h5>
                    </div>
                    <div className="d-flex direction-row">
                      <i className="bi bi-heart-fill mx-2" style={{color:"red"}}></i>
                      <p>{food.likes}</p>
                    </div>
                    <button type="button" className="btn btn-primary"> Detail </button>
                  </StNameLikes>
                </StCardElement>
              </StCard>
            )
            })}
          </div>
        </StScrollBar>
      </StCardContainer>
    </StContainer>
  );
};

export default FoodListRegion;

const StContainer = styled.div`
  padding:  10px 20px 10px  ;
`

const StCardTitle = styled.div`
  margin-top: 20px;
  padding: 20px 30px;

  background-color: #6d6d6d;
  border-radius: 15px 15px 0px 0px;

  color: white;
  font-weight: bold;
  font-size: calc(1.275rem + 0.3vw);
`

const StCardContainer = styled.div`
  padding:  10px 10px 10px;

  background-Color: #ececec;

  border: 0px;
  border-radius: 0px 0px 15px 15px;
`

const StScrollBar = styled.div`
  margin-right: 10px;
  margin-bottom: 20px;
  height: 60vh;

  overflow-y: scroll;
  overflow-x: hidden;
`

const StCard = styled.div`
  border: 0px;
  background-Color: #ececec;
  padding:  10px 10px 10px;
  margin: 20px 20px 20px 20px ;
  width: ;
  max-height: 300px;

  display:flex;
  flex-direction:row;
`

const StCardElement = styled.div`
  width: ${props => props.width};
  padding:  10px 10px 10px;
  background-color: #d9d9d9;
`

const StImage = styled.img`
  height: 100px;
  object-fit: cover; 
`

const StNameLikes = styled.div`
  display:flex;
  flex-direction:column;
`