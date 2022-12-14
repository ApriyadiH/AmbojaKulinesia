// Import library
import React, { useEffect, useState } from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";


const FoodListRating = () => {
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
        Best Culinary from Indonesia
      </StTitle>
      <StCardContainer>
        <StCard className="card">
          <StCardElement width="40%">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <StCarouselImage src="https://tse4.mm.bing.net/th?id=OIP.YEN0T1YzBxntg4MXQtI3dwHaFj&pid=Api" className="d-block w-100" alt="pempek"/>
              </div>
              <div className="carousel-item">
                <StCarouselImage src="https://tse3.mm.bing.net/th?id=OIP.FWKSUCBrg6AsIlzUNFQPVwHaEv&pid=Api" className="d-block w-100" alt="pempek"/>
              </div>
              <div className="carousel-item">
                <StCarouselImage src="https://tse2.mm.bing.net/th?id=OIP.8pjBGLyv9B-DL9PPl1aFFQHaFZ&pid=Api" className="d-block w-100" alt="pempek"/>
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
          </StCardElement>
          <StCardElement width="10%">
            <StNameLikes>
              <div>
                <h5>Pempek</h5>
              </div>
              <div className="d-flex direction-row">
                <i className="bi bi-heart-fill mx-2" style={{color:"red"}}></i>
                <p>Likes</p>
              </div>
            </StNameLikes>
          </StCardElement>
          <StCardElement width="50%">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa in corporis animi quisquam exercitationem cupiditate, porro earum dicta adipisci aspernatur saepe voluptas praesentium quod amet. Aperiam dolores voluptates nostrum inventore.
          </StCardElement>
        </StCard>
        <StCard className="card">
          <StCardElement width="40%">
            <div id="carouselExampleInterval2" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <StCarouselImage src="https://i.pinimg.com/736x/d1/2f/e2/d12fe29187c5cb4c628b4391b198dcb4--mie-noodles.jpg" className="d-block w-100" alt="miekacang"/>
              </div>
              <div className="carousel-item">
                <StCarouselImage src="https://i.pinimg.com/originals/b5/30/91/b53091c6fdc51cb0f45d0af9f38720de.jpg" className="d-block w-100" alt="miekacang"/>
              </div>
              <div className="carousel-item">
                <StCarouselImage src="https://awsimages.detik.net.id/community/media/visual/2020/04/03/981821aa-a672-4126-a898-2321167144d6_43.jpeg?w=700&q=90" className="d-block w-100" alt="miekacang"/>
              </div>
            </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </StCardElement>
          <StCardElement width="10%">
            <StNameLikes>
              <div>
                <h5>Mie Kacang</h5>
              </div>
              <div className="d-flex direction-row">
                <i className="bi bi-heart-fill mx-2" style={{color:"red"}}></i>
                <p>Likes</p>
              </div>
            </StNameLikes>
          </StCardElement>
          <StCardElement width="50%">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa in corporis animi quisquam exercitationem cupiditate, porro earum dicta adipisci aspernatur saepe voluptas praesentium quod amet. Aperiam dolores voluptates nostrum inventore.
          </StCardElement>
        </StCard>
      </StCardContainer>
    </StContainer>
  );
};

export default FoodListRating;

const StContainer = styled.div`
  padding:  10px 20px 10px  ;
`

const StTitle = styled.h4`
  padding: 10px;
  font-size: calc(1.275rem + 0.3vw);
`
const StCardContainer = styled.div`
  border: 0px;
  background-Color: #ececec;
  padding:  10px 10px 10px;
  height: 70vh;
  overflow-y: scroll;

  display:flex;
  flex-direction:column;
`

const StCard = styled.div`
  border: 0px;
  background-Color: #ececec;
  padding:  10px 10px 10px;

  display:flex;
  flex-direction:row;
`

const StCardElement = styled.div`
  width: ${props => props.width};
  padding:  10px 10px 10px;
`

const StCarouselImage = styled.img`
  height: 400px;
  object-fit: cover; 
`

const StNameLikes = styled.div`
  display:flex;
  flex-direction:column;
`