// Import library
// import React, { useEffect, useState } from "react";
// import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";


const Test = () => {
  const foods = 
  [
    {
      postId:"1",
      foodName:"Pempek",
      region:"South Sumatra",
      likes:"100",
      description:"Pempek, mpek-mpek or empek-empek is a savoury Indonesian fishcake delicacy, made of fish and tapioca, from Palembang, South Sumatra, Indonesia. Pempek is served with rich sweet and sour sauce called kuah cuka or kuah cuko (lit. vinegar sauce), or just cuko. Sometimes local people also eat the dish with yellow noodles and diced up cucumber to balance out the vinegar's sourness.",
      foodImage:[
        "https://tse4.mm.bing.net/th?id=OIP.YEN0T1YzBxntg4MXQtI3dwHaFj&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.FWKSUCBrg6AsIlzUNFQPVwHaEv&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.8pjBGLyv9B-DL9PPl1aFFQHaFZ&pid=Api"
      ]
    },
    {
      postId:"2",
      foodName:"Batagor",
      region:"West Java",
      likes:"90",
      description:"Batagor (abbreviated from Bakso Tahu Goreng, Sundanese and Indonesian: fried bakso and tofu) is a Sundanese dish from Indonesia, and popular in Southeast Asia, consisting of fried fish dumplings, usually served with peanut sauce. It is traditionally made from minced tenggiri (Spanish mackerel), although other types of seafood such as tuna, mackerel, and prawn may also be used. The fish paste is subsequently stuffed into wonton skins or filled into tofu, and then deep fried in palm oil.",
      foodImage:[
        "https://tse3.mm.bing.net/th?id=OIP.aH3Zxo9IEeT699DRcNM2ogHaFt&pid=Api",
        "https://2.bp.blogspot.com/-YskXrvaBqZg/VqCziEcnvfI/AAAAAAAAAL8/Lo4YogdxYZs/s1600/Resep-Batagor-Bandung.jpg"
      ],
    },
    {
      postId:"3",
      foodName:"Klepon",
      region:"Indonesia",
      likes:"80",
      description:"Klepon (pronounced Klē-pon), or kelepon, is a snack of sweet rice cake balls filled with molten palm sugar and coated in grated coconut. Of Javanese origin, the green-coloured glutinous rice balls are one of the popular traditional kue in Indonesian cuisine.",
      foodImage:[
        "https://tse4.mm.bing.net/th?id=OIP.RBfwXBE7-flEmyTw6JCoMAHaFp&pid=Api"
      ],
    },
  ];
    
  // const [foods, setFoods] = useState([])
  // const fetchFoods = async () => {
  //   const { data } = await axios.get("http://localhost:3001/ayam");
  //   setFoods(data);
  // };

  // useEffect(() => {
  //   fetchFoods();
  // }, []);

  return (
    <div>
        {foods.map((food) => {
          return (
            <div key={food.postId}>
              <img src={food.foodImage[0]} alt=""></img>
              <img src={food.foodImage[1]} alt=""></img>
              <img src={food.foodImage[2]} alt=""></img>
            </div>
          )
        })}
    </div>
  );
};

export default Test;

const StCarouselImage = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: cover; 
`
