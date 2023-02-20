import React from "react";
import Footer from "../HeadFoot/Footer";

const AdminPanel = () => {
  return (
    <>
      <div className="container-adminpanel">
        <ul>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="school-outline"></ion-icon>
              </span>
              <span className="title">Curriculum Tracker</span>
            </a>
            <span></span>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span className="title">Admin Panel</span>
            </a>
            <span></span>
          </li>

          <li>
            <a href="Reqform">
              <span className="icon">
                <ion-icon name="clipboard-outline"></ion-icon>
              </span>
              <span className="title">Requirement Form</span>
            </a>
          </li>

          <li>
            <a href="Faculty">
              <span className="icon">
                <ion-icon name="receipt-outline"></ion-icon>
              </span>
              <span className="title">Faculties &nbsp;</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="eye-outline"></ion-icon>
              </span>
              <span className="title">View Curriculum &nbsp;</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="help-outline"></ion-icon>
              </span>
              <span className="title">Help &nbsp;</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="cog-outline"></ion-icon>
              </span>
              <span className="title">Settings &nbsp;</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="bag-outline"></ion-icon>
              </span>
              <span className="title">Password &nbsp;</span>
            </a>
          </li>
          <li>
            <a href="Home">
              <span className="icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span className="title">Logout &nbsp;</span>
            </a>
          </li>
        </ul>
      </div>

      {/* main */}
      <div className="main" id="adminpanelmain">
        <div className="topbar" id="topbaradmin">
          <div className="toggle">
            <ion-icon name="menu-outline"></ion-icon>
          </div>

          <div className="search">
            <label>
              <input type="text" placeholder="Search here" />
              <ion-icon name="search-outline"></ion-icon>
            </label>
          </div>

          <div className="user">
            <img src="" alt="" />
          </div>
        </div>

        <div class="details">
          <div class="recentOrders">
            <div class="cardHeader">
              {/* requirement form */}
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <center>
                  <h1 id="adminheading">Welcome Unknown to your Dashboard</h1>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    </>
  );
};

export default AdminPanel;

// Dark mode on

// <li class="mode">
//                     <a href="#">
//                         <i class="uil uil-moon"></i>
//                         <span class="link-name">Dark Mode</span>
//                     </a>

//                     <div class="mode-toggle">
//                         <span class="switch"></span>
//                     </div>
//                 </li>
