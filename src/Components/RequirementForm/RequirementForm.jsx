import React from "react";

const RequirementForm = () => {
  return (
    <>
          <div className="user">
            <img src="" alt="" />
          </div>
        <div className="details">
          <div className="recentOrders">
            <div className="cardHeader">
              {/* requirement form */}
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <center>
                  <h4 id="reqformheading">REQUIREMENT FORM</h4>
                </center>
              </div>
            </div>
            <div class="form-outline mb-2">
              <label htmlFor="" className="form-label">
                Name of Requirement
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Name of Requirement"
              />
            </div>
            <br />
            <div class="input-group mb-3">
              {/* <input type="text" class="form-control form-control-lg" placeholder='Area of Training' />
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="#">FSD</a></li>
                                    <li><a class="dropdown-item" href="#">ML/AI</a></li>
                                    <li><a class="dropdown-item" href="#">RPA</a></li>
                                    <li><a class="dropdown-item" href="#">DSA</a></li>
                                    <li><a class="dropdown-item" href="#">CSA</a></li>
                                </ul> */}
              <label htmlFor="" className="form-label">
                Area of Training
              </label>
              <select placeholder="Area of Training">
                <option value="">FSD</option>
                <option value="">ML/AI</option>
                <option value="">RPA</option>
                <option value="">DSA</option>
                <option value="">CSA</option>
              </select>
            </div>

            {/* <div class="dropdown-center">
<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Area of Training
</button>
<ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#"></a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
</ul>
</div> */}
            <div className="form-outline mb-2">
              <label htmlFor="" className="form-label">
                Name of Office of Enquiry From
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Name of Office of Enquiry"
              />
            </div>
            <br />
            <div className="input-group mb-3">
              {/* <input type="text" class="form-control form-control-lg" placeholder='Category of Training' />
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="#">Retail</a></li>
                                    <li><a class="dropdown-item" href="#">Academic</a></li>
                                    <li><a class="dropdown-item" href="#">Corporate</a></li>
                                </ul> */}
              <label htmlFor="" className="form-label">
                Category of Training
              </label>
              <select>
                <option value="">Retail</option>
                <option value="">Academic</option>
                <option value="">Corporate</option>
              </select>
            </div>
            <br />
            <div className="form-outline mb-2">
              <label htmlFor="" className="form-label">
                Training Duration
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Duration of Training(Hours)"
              />
            </div>
            <br />

            {/* upload files*/}

            <div className="form-outline mb-2">
              <label htmlFor="" className="form-label">
                Choose reference file
              </label>
              <input
                type="file"
                id="uploadfile"
                className="form-control"
                placeholder="choose reference file"
              />
            </div>
            {/* <br /> */}
            <div className="d-flex justify-content-center pt-3">
              <button
                type="button"
                className="btn btn-secondary btn-lg"
                id="edit"
              >
                Edit
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-lg ms-2"
                id="save"
              >
                Save
              </button>
            </div>

            {/* Assign Faculty */}
            <center>
              <button type="button" className="btn btn-secondary btn-lg ms-2">
                Assign Faculty
              </button>
            </center>
            <br />
            <hr />
            <br />
            {/* <div className="input-group mb-3">

                                <label htmlFor="" className="form-label">Name of Faculty</label>
                                <select placeholder='Name of Faculty droped down'>

                                    <option value="">Faculty 1</option>
                                    <option value="">Faculty 2</option>
                                    <option value="">Faculty 3</option>

                                </select>
                            </div> */}

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
                    <td>Confirm Selection</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Faculty1</td>
                    <td>MERN Stack</td>
                    <td>React/Node/MongoDB/Express</td>
                    <td>Faculty1@gmail.com</td>
                    <td>Engaged</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-secondary btn-lg ms-2"
                        id="selectbtn"
                      >
                        select
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Faculty2</td>
                    <td>MEAN Stack</td>
                    <td>Angular/Node/MongoDB/Express</td>
                    <td>Faculty2@gmail.com</td>
                    <td>Not Engaged</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-secondary btn-lg ms-2"
                        id="selectbtn">
                        select
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Faculty3</td>
                    <td>MERN Stack</td>
                    <td>React/Node/MongoDB/Express</td>
                    <td>Faculty3@gmail.com</td>
                    <td>Not Engaged</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-secondary btn-lg ms-2"
                        id="selectbtn">
                        select
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <center>
                <button type="button" className="btn btn-secondary btn-lg ms-2">
                  Assign Requirement
                </button>
              </center>
          </div>
        </div>
    </>
  );
};

export default RequirementForm;
