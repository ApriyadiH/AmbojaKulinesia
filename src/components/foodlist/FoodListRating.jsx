// Import library
import React, { useEffect, useState } from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";


const FoodListRating = () => {
  const [foods, setFoods] = useState(null)
  const fetchFoods = async () => {
    const { data } = await axios.get("https://ambojakulinesiaserver.vercel.app/food/rating");
    setFoods(data.data);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <StContainer className="container-fluid">
      <StCardTitle>
        <h4>Best Culinary from Indonesia</h4>
      </StCardTitle>
      <StCardContainer>
        <StScrollBar>
        {foods?.map((food,indexutama) => {
          return (
            <StCard className="container-fluid" key={food.postId}>
              <div className="row">

                {/* Carousel */}
                <div className="col-md-4">
                  <div id={food.foodName} className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <StCarouselImage src={food.foodImage[0]} className="d-block w-100" alt=""/>
                        <StTriangle className="top-0 start-0"></StTriangle>
                        <StRankNumber className="top-0 start-0">{indexutama+1}</StRankNumber>
                      </div>
                  
                      if({food.foodImage.length > 1}) {
                        food.foodImage.slice(1).map((foodImageElement,index) => {
                            return (
                              <div className="carousel-item" key={index}>
                                <StCarouselImage src={foodImageElement} className="d-block w-100" alt=""/>
                                <StTriangle className="top-0 start-0"></StTriangle>
                                <StRankNumber className="top-0 start-0">{indexutama+1}</StRankNumber>
                              </div>
                            )
                          })
                      }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={"#"+food.foodName} data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={"#"+food.foodName} data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                {/* Name, Region, Likes */}
                <StNameLikes className="col-md-2">
                  <div>
                    <h5>{food.foodName}</h5>
                  </div>
                  <div>
                    <h5>{food.region}</h5>
                  </div>
                  <div className="d-flex direction-row">
                    <i className="bi bi-heart-fill px-2" style={{color:"red"}}></i>
                    <p>{food.likes}</p>
                  </div>
                </StNameLikes>

                {/* Description */}
                <StDescription className="col-md-6">
                  {food.description}
                </StDescription>
              </div>
            </StCard>
            )
          })}
        </StScrollBar>
      </StCardContainer>
    </StContainer>
  );
};

export default FoodListRating;

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
  
  background-Color: #ececec;

  display:flex;
  flex-direction:row;
`

const StCarouselImage = styled.img`
  width: 100%;
  height: 40vh;

  object-fit: cover; 
  position: relative;
`

const StTriangle = styled.div`
  width:0;
  height:0;

  border-top: 50px solid #6d6d6d;
  border-left: 50px solid #6d6d6d;
  border-right: 50px solid transparent;
  border-bottom: 50px solid transparent;

  position: absolute;
`

const StRankNumber = styled.div`
  padding-top: 5px;
  padding-left: 15px;
  
  color: white;
  font-size: calc(2rem + 0.3vw);
  font-weight: bold;

  position: absolute;
`

const StNameLikes = styled.div`
  display:flex;
  flex-direction:column;
`

const StDescription = styled.div`
  font-size: calc(1rem + 0.3vw);
`
