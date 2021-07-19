import React from 'react';

import { Link } from "react-router-dom";


const TherapistRequests = () =>(
<div>




<div>

<div className="d-flex" id="wrapper">
    {/*
    <!-- Sidebar--> */}
    <div className="border-end bg-white " id="sidebar-wrapper">
    <div className="sidebar-heading border-bottom bg-light"><Link to="./ListTherapists"><i class="fas fa-spa"> &nbsp; Cygnius</i></Link></div>
        <div className="list-group list-group-flush left-side">
            <a>
                <div className="t1">
                    <p>Client Dashboard</p>
                </div>
            </a>
            <Link to="./ListTherapists" className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list" >List Therapists</Link>
              <Link className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
                  to="./SearchFindTherapists">Search /Find New Therapists</Link>
              <Link className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
                  to="./TherapistRequests">Therapists Requests</Link>
              <Link className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
                  to="./NotesSharedByTherapists">Notes Shared By Therapists</Link>
              <Link className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
                  to="./MyJournals">My Journals</Link>
              <Link className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
                  to="./ClientsAppointments">Appointments</Link>
              <Link className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
                  to="./Messages">Messages</Link>
        </div>
    </div>
    {/*
    <!-- Page content wrapper--> */}
    <div id="page-content-wrapper">
        {/*
        <!-- Top navigation--> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="container-fluid">
                <button className="btn btn-primary" id="sidebarToggle">Toggle Menu</button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item active"><a className="nav-link" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#!">Action</a>
                                <a className="dropdown-item" href="#!">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#!">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/*
        <!-- Page content--> */}
        <div className="container-fluid">
                      
<div className="container bootstrap snippets bootdey req-con">
<h2 className="req-title">Therapists Requests</h2>

    <div className="col-sm-4 req-pro-card">
      {/* <!-- Begin user profile --> */}
      <div className="box-info text-center user-profile-2">
        <div className="header-cover">
          <img src="https://via.placeholder.com/350x280/333945/000000" alt="User cover" />
        </div>
        <div className="user-profile-inner">
          <h4 className="white">Jonny doe</h4>
          <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-circle profile-avatar" alt="User avatar" />
          <h5>Therapist</h5>
          <p>Lead therapist at lorem ipsun <br></br> 12 years of experience in mental therapy <br></br>Currently working in  London Medical </p>

          {/* <!-- User button --> */}
          <div className="user-button">
            <div className="row">
              <div className="col-md-6">
                <button type="button" className="btn btn-success btn-sm btn-block"><i className="fa fa-envelope"></i> Accept</button>
              </div>
              <div className="col-md-6">
                <button type="button " className="btn req-btn btn-danger btn-sm btn-block"><i className="fa fa-user"></i> Delete</button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-4 req-pro-card">
      {/* <!-- Begin user profile --> */}
      <div className="box-info text-center user-profile-2">
        <div className="header-cover">
          <img src="https://via.placeholder.com/350x280/87CEFA/000000" alt="User cover" />
        </div>
        <div className="user-profile-inner">
          <h4 className="white">Jonny doe</h4>
          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="img-circle profile-avatar" alt="User avatar" />
          <h5>Therapist</h5>
          <p>Lead therapist at lorem ipsun <br></br> 12 years of experience in mental therapy <br></br>Currently working in  London Medical </p>

          {/* <!-- User button --> */}
          <div className="user-button">
            <div className="row">
              <div className="col-md-6">
                <button type="button" className="btn btn-success btn-sm btn-block"><i className="fa fa-envelope"></i> Accept</button>
              </div>
              <div className="col-md-6">
              <button type="button " className="btn req-btn btn-danger btn-sm btn-block"><i className="fa fa-user"></i> Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-4 req-pro-card">
      {/* <!-- Begin user profile --> */}
      <div className="box-info text-center user-profile-2">
        <div className="header-cover">
          <img src="https://via.placeholder.com/350x280/FF7F50/000000" alt="User cover" />
        </div>
        <div className="user-profile-inner">
          <h4 className="white">Jonny doe</h4>
          <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-circle profile-avatar" alt="User avatar" />
          <h5>Therapist</h5>
          <p>Lead therapist at lorem ipsun <br></br> 12 years of experience in mental therapy <br></br>Currently working in  London Medical </p>

          {/* <!-- User button --> */}
          <div className="user-button">
            <div className="row">
              <div className="col-md-6">
                <button type="button" className="btn btn-success btn-sm btn-block"><i className="fa fa-envelope"></i> Accept</button>
              </div>
              <div className="col-md-6">
              <button type="button " className="btn req-btn btn-danger btn-sm btn-block"><i className="fa fa-user"></i> Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-4 req-pro-card">
      {/* <!-- Begin user profile --> */}
      <div className="box-info text-center user-profile-2">
        <div className="header-cover">
          <img src="https://via.placeholder.com/350x280/FF7F50/000000" alt="User cover" />
        </div>
        <div className="user-profile-inner">
          <h4 className="white">Jonny doe</h4>
          <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-circle profile-avatar" alt="User avatar" />
          <h5>Therapist</h5>
          <p>Lead therapist at lorem ipsun <br></br> 12 years of experience in mental therapy <br></br>Currently working in  London Medical </p>

          {/* <!-- User button --> */}
          <div className="user-button">
            <div className="row">
              <div className="col-md-6">
                <button type="button" className="btn btn-success btn-sm btn-block"><i className="fa fa-envelope"></i> Accept</button>
              </div>
              <div className="col-md-6">
              <button type="button " className="btn req-btn btn-danger btn-sm btn-block"><i className="fa fa-user"></i> Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-4 req-pro-card">
      {/* <!-- Begin user profile --> */}
      <div className="box-info text-center user-profile-2">
        <div className="header-cover">
          <img src="https://via.placeholder.com/350x280/FF7F50/000000" alt="User cover" />
        </div>
        <div className="user-profile-inner">
          <h4 className="white">Jonny doe</h4>
          <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-circle profile-avatar" alt="User avatar" />
          <h5>Therapist</h5>
          <p>Lead therapist at lorem ipsun <br></br> 12 years of experience in mental therapy <br></br>Currently working in  London Medical </p>

          {/* <!-- User button --> */}
          <div className="user-button">
            <div className="row">
              <div className="col-md-6">
                <button type="button" className="btn btn-success btn-sm btn-block"><i className="fa fa-envelope"></i> Accept</button>
              </div>
              <div className="col-md-6">
              <button type="button " className="btn req-btn btn-danger btn-sm btn-block"><i className="fa fa-user"></i> Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<div className="col-sm-4 req-pro-card">
{/* <!-- Begin user profile --> */}
<div className="box-info text-center user-profile-2">
  <div className="header-cover">
    <img src="https://via.placeholder.com/350x280/FF7F50/000000" alt="User cover" />
  </div>
  <div className="user-profile-inner">
    <h4 className="white">Jonny doe</h4>
    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-circle profile-avatar" alt="User avatar" />
    <h5>Therapist</h5>
    <p>Lead therapist at lorem ipsun <br></br> 12 years of experience in mental therapy <br></br>Currently working in  London Medical </p>

    {/* <!-- User button --> */}
    <div className="user-button">
      <div className="row">
        <div className="col-md-6">
          <button type="button" className="btn btn-success btn-sm btn-block"><i className="fa fa-envelope"></i> Accept</button>
        </div>
        <div className="col-md-6">
        <button type="button " className="btn req-btn btn-danger btn-sm btn-block"><i className="fa fa-user"></i> Delete</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


  </div>



        </div>
    </div>
</div>
{/*
<!-- Bootstrap core JS--> */}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>



</div>





{/*  */}
{/*  */}
{/*  */}
{/*  */}
{/*  */}




</div>




)

export default TherapistRequests;