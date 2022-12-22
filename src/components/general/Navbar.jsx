// Import library
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logout, stillLogin } from "../../redux/modules/userSlice";


const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAdmin, isLoggedIn } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('user');
    navigate("/");
  };

  const retrieved = localStorage.getItem('user');
  const user = JSON.parse(retrieved);
  if (user) {
    dispatch(stillLogin({
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin
    }));
  } else {
    dispatch(logout());
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid" style={{ "padding": "0px 30px" }}>
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
              <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Region
              </div>
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
          {isLoggedIn ? (
            <li className="d-flex">
              <div className="nav-item dropdown px-3">
                <div className="nav-link dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person-circle" style={{ fontSize: "2em" }}></i>
                </div>
                <ul className="dropdown-menu">
                  {(isAdmin) ? (
                    <div className="menu-admin">
                      <li><Link className="dropdown-item" to="/Admin/manage">Manage Users</Link></li>
                      <li><Link className="dropdown-item" to="/Admin/post">Post List</Link></li>
                      <li><Link className="dropdown-item" to="/Admin/request">Request List</Link></li>
                    </div>
                  ) : (
                    <div className="menu-user">
                      <li><Link className="dropdown-item" to="/User/setting">User Settings</Link></li>
                      <li><Link className="dropdown-item" to="/User/request">Request List</Link></li>
                    </div>
                  )
                  }
                </ul>
              </div>
              <div className="px-2">
                <div className="nav-link" role="button" onClick={handleLogout}><StText>Logout</StText></div>
              </div>
            </li>
          ) : (
            <li className="d-flex px-2">
              <Link className="nav-link" to="/Login"><StText>Login</StText></Link>
            </li>
          )
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

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

const StText = styled.span`
  text-align: center;
  font-weight: 500;
  font-size: calc(1.275rem + 0.3vw);
`