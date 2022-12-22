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

  console.log("input di Post", inputPost)
  //////////////////
  
  // GET SPECIFIC
  //////////////////
  const [inputSpecific, setInputSpecific] = useState("");
  const [specific, setSpecific] = useState(null);

  const onClickSpecific = (testId) => {
    axios.get(`https://ambojakulinesiaserver.vercel.app/test/${testId}`)
    .then( res => {
      console.log(res.data.data)
      setTimeout((setSpecific(res.data.data)),5000)
      setInputSpecific("");
    }).catch(err => {
      console.log(err)
    })
  };
  console.log(specific)
  //////////////////

  // PATCH
  //////////////////
  const [inputUpdate, setInputUpdate] = useState("");
  const [newName, setNewName] = useState("");

  const onClickUpdate = (testId) => {
    axios.patch(`https://ambojakulinesiaserver.vercel.app/test/${testId}`);
    console.log("data berhasil diubah");
    setInputUpdate("");
  };
  //////////////////
  
  // DELETE
  //////////////////
  const [inputDelete, setInputDelete] = useState("");

  const onClickDelete = (testId) => {
    axios.delete(`https://ambojakulinesiaserver.vercel.app/test/${testId}`);
    console.log("data berhasil terhapus");
    setInputDelete("");
  };
  //////////////////


  return (
    <div className="container">
      {/* FETCH */}
      <StContainer className="col">
        <h1>Test Fetch</h1>
        <button onClick={(e) => {e.preventDefault(); fetchTest();}}>Tombol Fetch</button>
        <ul>
        {fetch ?.map((contentFetch,index) => (
          <li key={index}>{contentFetch.name}" testId: "{contentFetch.testId}</li>
        ))}
        </ul>
      </StContainer>

      {/* POST */}
      <StContainer className="col">
        <h1>Test Post</h1>
        <input value={inputPost} onChange={(event) => {setInputPost(event.target.value);}} />
        <button onClick={(e) => {e.preventDefault(); postTest(inputPost);}}>Tombol Post</button>
      </StContainer>

      {/* FETCH SPECIFIC */}
      <StContainer className="col">
        <h1>Test Get Spesifik</h1>
        <input value={inputSpecific} onChange={(event) => {setInputSpecific(event.target.value);}} />
        <button onClick={(e) => {e.preventDefault(); onClickSpecific(inputSpecific);}}>Tombol Fetch Spesifik</button>
        <div>
          {specific?.name}" testId: "{specific.testId}
        </div>
      </StContainer>

      {/* PATCH */}
      <StContainer className="col">
        <h1>Test Patch</h1>
        {/* <input value={inputUpdate} onChange={(event) => {setInputUpdate(event.target.value);}} />
        <input value={inputUpdate} onChange={(event) => {setInputUpdate(event.target.value);}} />
        <button onClick={(e) => {e.preventDefault(); onClickUpdate(inputUpdate);}}>Tombol Patch</button> */}
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

