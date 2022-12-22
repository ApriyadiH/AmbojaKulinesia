// Import library
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";

const FoodListRegion = () => {
  const {region} = useParams();
  const format_region = region.toLowerCase().split('_').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');

  const [foods, setFoods] = useState(null);

  const fetchFoods = async (region) => {
    const { data } = await axios.get(`https://ambojakulinesiaserver.vercel.app/food/region/${region}`);
    setFoods(data.data);
  };

  console.log(foods)
  console.log(format_region)

  useEffect(() => {
    fetchFoods(region);
  }, [region]);

  return (
    <StContainer className="container-fluid">
      <StCardTitle>
        <h4>{format_region}</h4>
      </StCardTitle>
      <StCardContainer>
        <StScrollBar>
          <div className="container-fluid">
            <div className="row row-cols-md-4">
              {foods?.map((food) => (
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
              )}
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
