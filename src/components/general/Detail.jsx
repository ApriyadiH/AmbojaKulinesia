// Import library
import React, { useEffect, useState } from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";

const Detail = () => {
  return (
    <StContainer>      
      <StDetail>
        <StTitle>
          Judul
        </StTitle>
        <div>
        <div id="carouselExampleInterval" className="carousel slide mx-10" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <StCarouselImage src="https://tse4.mm.bing.net/th?id=OIP.YEN0T1YzBxntg4MXQtI3dwHaFj&pid=Api" alt="pempek"/>
            </div>
            <div className="carousel-item">
              <StCarouselImage src="https://tse3.mm.bing.net/th?id=OIP.FWKSUCBrg6AsIlzUNFQPVwHaEv&pid=Api" alt="pempek"/>
            </div>
            <div className="carousel-item">
              <StCarouselImage src="https://tse2.mm.bing.net/th?id=OIP.8pjBGLyv9B-DL9PPl1aFFQHaFZ&pid=Api" alt="pempek"/>
            </div>
          </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="d-flex direction-row">
          <i className="bi bi-heart-fill mx-2" style={{color:"red"}}></i>
          <p>Likes</p>
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem suscipit magnam amet. Perspiciatis animi vero nisi. Delectus tempore animi totam, fugit nam, laborum aperiam earum recusandae exercitationem, nihil rerum iusto?
        </div>
      </StDetail>
      <StComment className="container">
        <StCommentTitle>
          <h4>Comment</h4>
        </StCommentTitle>
        <StCommentBody>
          <StForm>
            <StInput/>
            <button className="btn btn-primary mx-5 w-40">Add Comment</button>
          </StForm>
          <StCommentList>
            <StCommentDetails className="d-flex direction-col">
              <div>
                <h5>User 1</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, sequi debitis! Laudantium quisquam laborum nihil ea excepturi magni, inventore pariatur adipisci cumque cum totam sequi doloribus enim porro nesciunt perspiciatis.</p>
              </div>
              <div className="w-30">
                <i className="bi bi-trash"></i>
                <i className="bi bi-pencil-square"></i>
              </div>
            </StCommentDetails>
            <StCommentDetails className="d-flex direction-col">
              <div>
                <h5>User 1</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, sequi debitis! Laudantium quisquam laborum nihil ea excepturi magni, inventore pariatur adipisci cumque cum totam sequi doloribus enim porro nesciunt perspiciatis.</p>
              </div>
              <div className="w-30">
                <i className="bi bi-trash"></i>
                <i className="bi bi-pencil-square"></i>
              </div>
            </StCommentDetails>
            <StCommentDetails className="d-flex direction-col">
              <div>
                <h5>User 1</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, sequi debitis! Laudantium quisquam laborum nihil ea excepturi magni, inventore pariatur adipisci cumque cum totam sequi doloribus enim porro nesciunt perspiciatis.</p>
              </div>
              <div className="w-30">
                <i className="bi bi-trash"></i>
                <i className="bi bi-pencil-square"></i>
              </div>
            </StCommentDetails>
            <StCommentDetails className="d-flex direction-col">
              <div>
                <h5>User 1</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, sequi debitis! Laudantium quisquam laborum nihil ea excepturi magni, inventore pariatur adipisci cumque cum totam sequi doloribus enim porro nesciunt perspiciatis.</p>
              </div>
              <div className="w-30">
                <i className="bi bi-trash"></i>
                <i className="bi bi-pencil-square"></i>
              </div>
            </StCommentDetails>
            <StCommentDetails className="d-flex direction-col">
              <div>
                <h5>User 1</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, sequi debitis! Laudantium quisquam laborum nihil ea excepturi magni, inventore pariatur adipisci cumque cum totam sequi doloribus enim porro nesciunt perspiciatis.</p>
              </div>
              <div className="w-30">
                <i className="bi bi-trash"></i>
                <i className="bi bi-pencil-square"></i>
              </div>
            </StCommentDetails>
            <StCommentDetails className="d-flex direction-col">
              <div>
                <h5>User 1</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, sequi debitis! Laudantium quisquam laborum nihil ea excepturi magni, inventore pariatur adipisci cumque cum totam sequi doloribus enim porro nesciunt perspiciatis.</p>
              </div>
              <div className="w-30">
                <i className="bi bi-trash"></i>
                <i className="bi bi-pencil-square"></i>
              </div>
            </StCommentDetails>
            <StCommentDetails className="d-flex direction-col">
              <div>
                <h5>User 1</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, sequi debitis! Laudantium quisquam laborum nihil ea excepturi magni, inventore pariatur adipisci cumque cum totam sequi doloribus enim porro nesciunt perspiciatis.</p>
              </div>
              <div className="w-30">
                <i className="bi bi-trash"></i>
                <i className="bi bi-pencil-square"></i>
              </div>
            </StCommentDetails>
          </StCommentList>
        </StCommentBody>
      </StComment>
    </StContainer>

  );
};

export default Detail;

const StContainer = styled.div`
  padding:  10px 20px 10px  ;
`

const StDetail = styled.div`
  width: 50%;
  padding:  10px 20px 10px  ;

  display: flex;
  flex-direction: column;
`

const StTitle = styled.h4`
  padding: 10px;
  font-size: calc(1.275rem + 0.3vw);
`

const StCarouselImage = styled.img`
  width: 80%;
  margin-left: 10%;
  padding-bottom: 20px;
  max-height: 300px;
  object-fit: cover; 
`

const StComment = styled.div`  
  width: 50%;
  padding:  10px 20px 10px  ;

  display: flex;
  flex-direction: column;
`

const StCommentTitle = styled.div`
  margin-top: 20px;
  padding: 20px 30px;
  background-color: #6d6d6d;
  border-radius: 15px 15px 0px 0px;
  color: white;
  font-weight: bold;
`

const StCommentBody = styled.div`
  background-color: #ececec;
  padding: 20px 30px;
  border-radius: 0px 0px 15px 15px;
`

const StForm = styled.div`
  
`

const StInput = styled.input`
  width: 55%;
  padding: 5px 15px;
  border: none;
  border-radius: 10px;  
`

const StCommentList = styled.div`
  margin-top: 30px;
  height:50vh;
  overflow-y: scroll;

`

const StCommentDetails = styled.div`
  margin-bottom: 10px;
  background-color: #d9d9d9;
  padding: 20px 30px;
  border-radius: 15px 15px 15px 15px;
`

