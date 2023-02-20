import React from "react";
import StickyBox from "react-sticky-box";

const FacultyPanel = () => {
  return (
    <>
      <StickyBox offsetTop={20} offsetBottom={20} />
      <div className="container-faculty">
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
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="clipboard-outline"></ion-icon>
                                </span>
                                <span className="title">Requirement Form</span>
                            </a>
                        </li>


                        <li>
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="receipt-outline"></ion-icon>
                                </span>
                                <span className="title">Faculties &nbsp;
                                </span>



                            </a>

                        </li>




                        <li>
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </span>
                                <span className="title">View Curriculum &nbsp;
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="help-outline"></ion-icon>
                                </span>
                                <span className="title">Help &nbsp;
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="cog-outline"></ion-icon>
                                </span>
                                <span className="title">Settings &nbsp;
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="bag-outline"></ion-icon>
                                </span>
                                <span className="title">Password &nbsp;
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="log-out-outline"></ion-icon>
                                </span>
                                <span className="title">Logout &nbsp;
                                </span>
                            </a>
                        </li>




                    </ul>
                </div>

                {/* main */}
                <div className="main">
                    <div className="topbar">
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

                    {/* card */}
                    

                    <div className="details">
                        <div className="recentOrders">
                            <div className="cardHeader">
                            <div class="cardBox">
                <div class="card">
                    <div>
                        <div class="numbers">Faculty 1</div>
                        <div class="cardName">view</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div> 

                <div class="card">
                    <div>
                        <div class="numbers">Faculty 2</div>
                        <div class="cardName">view</div>
                    </div>

                    <div class="iconBx">
                    <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">Faculty 3</div>
                        <div class="cardName">views</div>
                    </div>

                    <div class="iconBx">
                    <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">Faculty 4</div>
                        <div class="cardName">view</div>
                    </div>

                    <div class="iconBx">
                    <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>
            </div>
            

                          
                               
                            </div>

                            <center><h4 id ='faculty1heading'>Faculty 1</h4></center>

                            <div className="input-group mb-3">


                                {/* table */}
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Name</td>
                                            <td>Designation</td>
                                            <td>Skill</td>
                                            <td>Email</td>
                                            <td>Status</td>
                                          
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Faculty1</td>
                                            <td>MERN</td>
                                            <td>HTML/CSS/Javascript</td>
                                            <td>faculty1@gmail.com</td>
                                            <td>pending</td>
                                            
                                        </tr>
                                      
                                    </tbody>
                                </table>


                            </div>
                          
      
                        </div>
                        


                    </div>
                </div>
          

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    </>
  );
};

export default FacultyPanel;
