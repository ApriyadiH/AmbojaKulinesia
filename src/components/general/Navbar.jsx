// Import library
import React from "react";
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";


const Navbar = () => {
  const role= "admin"
  // const role= "user"
  const isLogin = true
  // const isLogin = false
  const username = "user1"

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid" style={{"padding":"0px 30px"}}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="row">
            <StAmboja className="col">Amboja</StAmboja> 
            <StKuli className="col">Kuli</StKuli> 
            <StNesia className="col">nesia</StNesia>
          </div>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Region
              </a>
              <ul className="dropdown-menu">
                <StDropDown>
                  <Link className="dropdown-item" to="/Food/region/Aceh">Aceh</Link>
                  <Link className="dropdown-item" to="/Food/region/Bali">Bali</Link>
                  <Link className="dropdown-item" to="/Food/region/Bangka_Belitung_Islands">Bangka Belitung Islands</Link>
                  <Link className="dropdown-item" to="/Food/region/Banten">Banten</Link>
                  <Link className="dropdown-item" to="/Food/region/Bengkulu">Bengkulu</Link>
                  <Link className="dropdown-item" to="/Food/region/Central_Java">Central Java</Link>
                  <Link className="dropdown-item" to="/Food/region/Central_Kalimantan">Central Kalimantan</Link>
                  <Link className="dropdown-item" to="/Food/region/Central_Sulawesi">Central Sulawesi</Link>
                  <Link className="dropdown-item" to="/Food/region/East_Java">East Java</Link>
                  <Link className="dropdown-item" to="/Food/region/East_Kalimantan">East Kalimantan</Link>
                  <Link className="dropdown-item" to="/Food/region/East_Nusa_Tenggara">East Nusa Tenggara</Link>
                  <Link className="dropdown-item" to="/Food/region/Gorontalo">Gorontalo</Link>
                  <Link className="dropdown-item" to="/Food/region/Jambi">Jambi</Link>
                  <Link className="dropdown-item" to="/Food/region/Lampung">Lampung</Link>
                  <Link className="dropdown-item" to="/Food/region/Maluku">Maluku</Link>
                  <Link className="dropdown-item" to="/Food/region/North_Kalimantan">North Kalimantan</Link>
                  <Link className="dropdown-item" to="/Food/region/North_Maluku">North Maluku</Link>
                  <Link className="dropdown-item" to="/Food/region/North_Sulawesi">North Sulawesi</Link>
                  <Link className="dropdown-item" to="/Food/region/North_Sumatra">North Sumatra</Link>
                  <Link className="dropdown-item" to="/Food/region/Papua">Papua</Link>
                  <Link className="dropdown-item" to="/Food/region/Riau">Riau</Link>
                  <Link className="dropdown-item" to="/Food/region/Riau_Islands">Riau Islands</Link>
                  <Link className="dropdown-item" to="/Food/region/Southeast_Sulawesi">Southeast Sulawesi</Link>
                  <Link className="dropdown-item" to="/Food/region/South_Kalimantan">South Kalimantan</Link>
                  <Link className="dropdown-item" to="/Food/region/South_Sulawesi">South Sulawesi</Link>
                  <Link className="dropdown-item" to="/Food/region/South_Kalimantan">South Kalimantan</Link>
                  <Link className="dropdown-item" to="/Food/region/South_Sumatra">South Sumatra</Link>
                  <Link className="dropdown-item" to="/Food/region/Jakarta">Jakarta</Link>
                  <Link className="dropdown-item" to="/Food/region/Yogyakarta">Yogyakarta</Link>
                  <Link className="dropdown-item" to="/Food/region/West_Java">West Java</Link>
                  <Link className="dropdown-item" to="/Food/region/West_Kalimantan">West Kalimantan</Link>
                  <Link className="dropdown-item" to="/Food/region/West_Nusa_Tenggara">West Nusa Tenggara</Link>
                  <Link className="dropdown-item" to="/Food/region/West_Papua">West Papua</Link>
                  <Link className="dropdown-item" to="/Food/region/West_Sulawesi">West Sulawesi</Link>
                  <Link className="dropdown-item" to="/Food/region/West_Sumatra">West Sumatra</Link>
                  <Link className="dropdown-item" to="/Food/region/Multiple_Region">Multiple Region</Link>
                </StDropDown>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Food/rating">Best Culinary</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Test">TESTER</Link>
            </li>
          </ul>
          { isLogin ? ( 
            <li className="d-flex">
              {/* <div>
                <StText>{username}</StText>
              </div> */}
              <div className="nav-item dropdown px-3">
                <a className="nav-link dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person-circle" style={{fontSize: "2em"}}></i>
                </a>
                <ul className="dropdown-menu">
                  {(role === "admin")?(
                    <div className="menu-admin">
                      <li><a className="dropdown-item" to="/Admin/manage">Manage Users</a></li>
                      <li><a className="dropdown-item" href="/Admin/post">Post List</a></li>
                      <li><a className="dropdown-item" href="/Admin/request">Request List</a></li>
                    </div>
                    ) : (
                    <div className="menu-user">
                      <li><a className="dropdown-item" href="/User/setting">User Settings</a></li>
                      <li><a className="dropdown-item" href="/User/request">Request List</a></li>
                    </div>
                    )
                  }
                </ul>
              </div>
              <div className="px-2">
                <a className="nav-link" href="/logout"><StText>Logout</StText></a>
              </div>
            </li>
          ) : (
            <li className="d-flex px-2">
              <a className="nav-link" href="/login"><StText>Login</StText></a>
            </li>
            )
          }

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const StContainerNavbar = styled.div`
  padding-bottom: 10vh ;
`

const StAmboja = styled.div`
  color: black;
  font-weight: bold;
  font-size: calc(1.275rem + 0.3vw);
`
const StKuli = styled.div`
  color: white;
  background-color: red;
  font-weight: bold;
  font-size: calc(1.275rem + 0.3vw);
  border-radius: 5px;
  padding: 0px;
`

const StNesia = styled.div`
  color: red;
  font-weight: bold;
  font-size: calc(1.275rem + 0.3vw);
  padding-left: 0px;
  padding-right: 20px ;
`

const StDropDown = styled.ul`
  padding-left: 0px;
  height: 60vh;

  overflow-y: scroll;
  overflow-x: hidden;
`

const StText = styled.p`
  vertical-align: middle;
  font-size: calc(1.275rem + 0.3vw);
`