// Import library
import React, { useEffect, useState } from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";


const Test = () => {
  
  // GET ALL/FETCH
  //////////////////
  const [fetch, setFetch] = useState(null);

  const fetchTest = async () => {
    // Ngambil data dari jsonserver, lalu disimpan dalam state ayam
    const { data } = await axios.get("https://ambojakulinesiaserver.vercel.app/test");
    setFetch(data.data);
  };

  useEffect(() => {
    fetchTest();
  }, []);
  //////////////////

  // POST
  //////////////////
  const [inputPost, setInputPost] = useState("");

  const postTest = (inputPost) => {
    axios.post("https://ambojakulinesiaserver.vercel.app/test", {name:inputPost});
    setInputPost("");
  };

  console.log(inputPost)
  //////////////////
  
  // GET SPECIFIC
  //////////////////
  //////////////////

  // PATCH
  //////////////////
  //////////////////
  
  // DELETE
  //////////////////
  const [inputDelete, setInputDelete] = useState("");

  const onClickDelete = (testId) => {
    axios.delete(`https://ambojakulinesiaserver.vercel.app/test/${testId}`);
    console.log("data berhasil terhapus")
  };
  //////////////////


  return (
    <div className="container">
      {/* FETCH */}
      <StContainer className="col">
        <h1>Test Fetch</h1>
        <button onClick={(e) => {e.preventDefault(); fetchTest();}}>Tombol Fetch</button>
        <ul>
        {fetch?.map((contentFetch,index) => (
          <li key={index}>{contentFetch.name}</li>
        ))}
        </ul>
      </StContainer>

      {/* POST */}
      <StContainer className="col">
        <h1>Test Post</h1>
        <input value={inputPost} onChange={(event) => {setInputPost(event.target.value);}} />
        <button onClick={(e) => {e.preventDefault(); postTest(inputPost);}}>Tombol Post</button>
      </StContainer>


      <StContainer className="col">
        <h1>Test Get Spesifik</h1>
        <button>Tombol Get Spesifik</button>
      </StContainer>
      <StContainer className="col">
        <h1>Test Patch</h1>
        <button>Tombol Patch</button>
      </StContainer>

      {/* DELETE */}
      <StContainer className="col">
        <h1>Test Delete</h1>
        <h5>masukkan testId</h5>
        <input value={inputDelete} onChange={(event) => {setInputDelete(event.target.value);}} />
        <button onClick={(e) => {e.preventDefault(); onClickDelete(inputDelete);}}>Tombol delete</button>
      </StContainer>
    </div>
  );
};

export default Test;

const StContainer = styled.div`
  background-color: #c6cdc6;
  margin: 20px;
  padding: 10px;
  border-radius: 15px;
`

