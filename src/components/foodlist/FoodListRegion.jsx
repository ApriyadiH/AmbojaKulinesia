// Import library
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";

const FoodListRegion = () => {
  const {region} = useParams();
  const foods = [
    {
      postId:"1", 
      foodName: "Surabi Bandungggg ggggggggggggggggg ggggggggggg gggggggg gggg gggg g ggggggg",
      likes: "60",
      foodImage: "https://cdn-cas.orami.co.id/parenting/images/5-surabi.width-1000.jpg"
    },
    {
      postId:"2",
      foodName: "Batagor",
      likes: "90",
      foodImage: "https://cdn-cas.orami.co.id/parenting/images/makanan_khas_Sunda-batagor.width-1000.jpg"
    },
    {
      postId:"3",
      foodName: "Cimol",
      likes: "60",
      foodImage: "https://cdn-cas.orami.co.id/parenting/images/2-cilok.width-1000.jpg"
    },
    {
      postId:"4",
      foodName: "Mie Kocok Bandung",
      likes: "40",
      foodImage: "https://cdn-cas.orami.co.id/parenting/images/mie_kocok2.width-1000.jpg"
    },
    {
      postId:"5",
      foodName: "Seblak",
      likes: "70",
      foodImage: "https://cdn-cas.orami.co.id/parenting/images/seblak_1.width-1000.jpg"
    },
    {
      postId:"6",
      foodName: "Bandros",
      likes: "20",
      foodImage: "https://cdn-cas.orami.co.id/parenting/images/Bandros.width-1000.jpg"
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
        <h4>{region.toLowerCase().split('_').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')}</h4>
      </StCardTitle>
      <StCardContainer>
        <StScrollBar>
          <div className="container-fluid">
            <div className="row row-cols-md-4">
              {foods.map((food,index) => {
                return (
                  <div className="p-2" key={food.postId}>
                    <StCard className="col">
                      <div className="row">
                        <div className="col-md-6">
                          <StImage src={food.foodImage} alt={food.foodName}/>
                        </div>
                        <StNameLikes className="col-md-6">
                          <div>
                            <StName>{food.foodName}</StName>
                          </div>
                          <div className="row">
                            <i className="bi bi-heart-fill mx-2 col-1" style={{color:"red"}}></i>
                            <p className="col">{food.likes}</p>
                          </div>
                        </StNameLikes>
                      </div>
                    </StCard>
                  </div>
                )
              })}
            </div>
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
  padding:  10px 10px 10px;
  
  border: 0px;
  border-radius: 15px ;
  background-Color: #d9d9d9;
`

const StImage = styled.img`
  width:100%;
  height: 30vh;
  object-fit: cover; 

  border-radius: 13px;
  
  display: block;
`

const StNameLikes = styled.div`
  
`

const StName = styled.h5`
  padding-bottom: 10px;
  overflow: hidden; 
  text-overflow: ellipsis;
  display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
  `
