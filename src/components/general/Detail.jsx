// Import library
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";

const Detail = () => {
  const navigate = useNavigate();
  const {foodName} = useParams();

  const [foods, setFoods] = useState(null)
  const [comments, setComments] = useState(null)
  
  const fetchFoods = async () => {
    const { data } = await axios.get(`https://ambojakulinesiaserver.vercel.app/food/detail/${foodName}`);
    setFoods(data.data);
  };

  const fetchComments = async () => {
    const { data } = await axios.get(`https://ambojakulinesiaserver.vercel.app/food/detail/${foodName}/comment`);
    setComments(data.data);
  };

  useEffect(() => {
    fetchFoods();
    fetchComments();
  }, []);

  return (
    <StContainer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div>
              <StCardTitle>{foods?.foodName}</StCardTitle>
              <StCardContainer>
                {/* Carousel */}
                <div className="col">
                  <div id={foods?.foodName} className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <StCarouselImage src={foods?.foodImage[0]} className="d-block w-100" alt=""/>
                      </div>
                  
                      if({foods?.foodImage.length > 1}) {
                        foods?.foodImage.slice(1).map((foodImageElement,index) => {
                            return (
                              <div className="carousel-item" key={index}>
                                <StCarouselImage src={foodImageElement} className="d-block w-100" alt=""/>
                              </div>
                            )
                          })
                      }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={"#"+foods?.foodName} data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={"#"+foods?.foodName} data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                {/* Name & Likes */}
                <StRegionLikes className="col">
                  <div type="button" onClick={() => {navigate(`/food/region/${(foods?.region).split(" ").join("_")}`);}}>
                    <h5>{foods?.region}</h5>
                  </div>
                  <div className="d-flex direction-row">
                    <i className="bi bi-heart-fill px-2" style={{color:"red"}}></i>
                    <p>{foods?.likes}</p>
                  </div>
                </StRegionLikes>

                {/* Description */}
                <StDescription className="col">
                  {foods?.description}
                </StDescription>
              </StCardContainer>
            </div>
          </div>
          <div className="col-md-6">
            <StCardTitle>Comment</StCardTitle>
            <StCardContainer>
              <StForm>
                <StInput className="col-md-6"></StInput>
                <button className="btn btn-primary col-md-3 mx-5 w-40">Add Comment</button>
              </StForm>
              <StCommentList>
                {comments?.map((comment,index) => (
                  <StCommentDetails className="d-flex direction-col" key={index}>
                    <div>
                      <h5>{comment.userName}</h5>
                      <p>{comment.comment}</p>
                    </div>
                    <div className="w-30">
                      <i className="bi bi-trash"></i>
                      <i className="bi bi-pencil-square"></i>
                    </div>
                  </StCommentDetails>
                ))}
              </StCommentList>
            </StCardContainer>
          </div>
        </div>
      </div>
    </StContainer>
  );
};

export default Detail;

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
  padding:  15px;

  background-Color: #ececec;

  border: 0px;
  border-radius: 0px 0px 15px 15px;
`

const StCarouselImage = styled.img`
  width: 100%;
  height: 30vh;

  object-fit: cover; 
`

const StRegionLikes = styled.div`
  height : 10vh;
  display:flex;
  flex-direction:column;
`

const StDescription = styled.div`
  font-size: calc(1rem + 0.3vw);
  height :30vh;
  overflow-y: auto;
`

const StForm = styled.div`
  align-items: center;
  justify-content: center;
  height: 10vh;
`

const StInput = styled.input`
  margin:auto;
  padding: 5px 15px;
  border: none;
  border-radius: 10px;  
`

const StCommentList = styled.div`
  height:60vh;
  overflow-y: scroll;

`

const StCommentDetails = styled.div`
  margin-bottom: 10px;
  background-color: #d9d9d9;
  padding: 20px 30px;
  border-radius: 15px 15px 15px 15px;
`

