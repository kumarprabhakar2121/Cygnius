import React from "react";
import { Link } from "react-router-dom";

const listTherapists = () => (
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

              <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
                  rel="stylesheet" />
              <div className="container">
              
                  <h2 style={{margin:'0 20px'}} className="listTherapist-title">Therapist Lists</h2>
                  <div className="container" style={{backgroundColor:"#"}}>
    <div className="row " style={{backgroundColor:""}}>
      <div className="col-12 col-md-10 col-lg-8 " style={{marginLeft:'42px'}}>
        <form className="card ">
          <div className="card-body row no-gutters ">
            <div className="col-auto">
              <i className="fas fa-search  text-body"></i>
            </div>
            {/* <!--end of col--> */}
            <div className="col">
              <input className="form-control form-control form-control-borderless" type="search" placeholder="Search Therapist " />
            </div>
            {/* <!--end of col--> */}
            <div className="col-auto">
              <button className="btn btn-success" type="submit">Search</button>
            </div>
            {/* <!--end of col--> */}
          </div>
        </form>
      </div>
      {/* <!--end of col--> */}
    </div>
  </div>
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="main-box clearfix">
                              <div className="table-responsive">
                                  <table className="table user-list">
                                      <thead>
                                          <tr>
                                              <th><span> <strong>Therapists Names</strong> </span></th>

                                              <th>Date Added as Therapist</th>
                                              <th>&nbsp; Actions</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td style={{width: '15%'}}>
                                                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                      alt="" />
                                                  <a className="user-link">Mila Kunis</a>
                                              </td>
                                              <td style={{width: '10%'}}>
                                                  2013/08/12
                                              </td>
                                              {/* style={{marginRight: spacing + 'em'}} */}

                                              <td style={{width: '30%'}}>
                                                  <Link to="/Messages" className="table-link warning tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <Link to="./AddAppointment" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-calendar fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <a href="#" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-ban fa-2x" aria-hidden="true" data-toggle="modal" data-target="#exampleModal9" ></i>
                                                      </span>
                                                  </a>
                                                  <a href="#" className="table-link danger tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-user-times fa-2x"
                                                              aria-hidden="true" data-toggle="modal" data-target="#exampleModal8" ></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i> */}
                                                          {/* <i
                                                              className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </a>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <img src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                      alt="" />
                                                  <a className="user-link">George Clooney</a>
                                              </td>
                                              <td>
                                                  2013/08/12
                                              </td>
                                              <td style={{width: '30%'}}>
                                                  <Link to="/Messages" className="table-link warning tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <Link to="./AddAppointment" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-calendar fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <a href="#" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-ban fa-2x" aria-hidden="true" data-toggle="modal" data-target="#exampleModal9" ></i>
                                                      </span>
                                                  </a>
                                                  <a href="#" className="table-link danger tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-user-times fa-2x"
                                                              aria-hidden="true" data-toggle="modal" data-target="#exampleModal8" ></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i> */}
                                                          {/* <i
                                                              className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </a>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                      alt="" />
                                                  <a className="user-link">Ryan Gossling</a>
                                              </td>
                                              <td>
                                                  2013/08/12
                                              </td>
                                              <td style={{width: '30%'}}>
                                                  <Link to="/Messages" className="table-link warning tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <Link to="./AddAppointment" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-calendar fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <a href="#" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-ban fa-2x" aria-hidden="true" data-toggle="modal" data-target="#exampleModal9" ></i>
                                                      </span>
                                                  </a>
                                                  <a href="#" className="table-link danger tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-user-times fa-2x"
                                                              aria-hidden="true" data-toggle="modal" data-target="#exampleModal8" ></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i> */}
                                                          {/* <i
                                                              className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </a>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <img src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                                      alt="" />
                                                  <a className="user-link">Emma Watson</a>
                                              </td>
                                              <td>
                                                  2013/08/12
                                              </td>
                                              <td style={{width: '30%'}}>
                                                  <Link to="/Messages" className="table-link warning tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <Link to="./AddAppointment" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-calendar fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <a href="#" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-ban fa-2x" aria-hidden="true" data-toggle="modal" data-target="#exampleModal9" ></i>
                                                      </span>
                                                  </a>
                                                  <a href="#" className="table-link danger tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-user-times fa-2x"
                                                              aria-hidden="true" data-toggle="modal" data-target="#exampleModal8" ></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i> */}
                                                          {/* <i
                                                              className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </a>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <img src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                                      alt="" />
                                                  <a className="user-link">Robert Downey Jr.</a>
                                              </td>
                                              <td>
                                                  2013/12/31
                                              </td>

                                              <td style={{width: '30%'}}>
                                                  <Link to="/Messages" className="table-link warning tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <Link to="./AddAppointment" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-calendar fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <a href="#" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-ban fa-2x" aria-hidden="true" data-toggle="modal" data-target="#exampleModal9" ></i>
                                                      </span>
                                                  </a>
                                                  <a href="#" className="table-link danger tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-user-times fa-2x"
                                                              aria-hidden="true" data-toggle="modal" data-target="#exampleModal8" ></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i> */}
                                                          {/* <i
                                                              className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </a>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <img src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                                      alt="" />
                                                  <a className="user-link">Mila Kunis</a>
                                              </td>
                                              <td>
                                                  2013/08/08
                                              </td>

                                              <td style={{width: '30%'}}>
                                                  <Link to="/Messages" className="table-link warning tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <Link to="./AddAppointment" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-calendar fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <a href="#" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-ban fa-2x" aria-hidden="true" data-toggle="modal" data-target="#exampleModal9" ></i>
                                                      </span>
                                                  </a>
                                                  <a href="#" className="table-link danger tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-user-times fa-2x"
                                                              aria-hidden="true" data-toggle="modal" data-target="#exampleModal8" ></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i> */}
                                                          {/* <i
                                                              className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </a>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                      alt="" />
                                                  <a className="user-link">George Clooney</a>
                                              </td>
                                              <td>
                                                  2013/08/12
                                              </td>

                                              <td style={{width: '30%'}}>
                                                  <Link to="/Messages" className="table-link warning tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <Link to="./AddAppointment" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-calendar fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <a href="#" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                      <i class="fa fa-ban fa-2x" aria-hidden="true" data-toggle="modal" data-target="#exampleModal9" ></i>
                                                      </span>
                                                  </a>
                                                  <a href="#" className="table-link danger tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-user-times fa-2x"
                                                              aria-hidden="true" data-toggle="modal" data-target="#exampleModal8" ></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i> */}
                                                          {/* <i
                                                              className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </a>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                      alt="" />
                                                  <a className="user-link">Ryan Gossling</a>
                                              </td>
                                              <td>
                                                  2013/03/03
                                              </td>

                                              <td style={{width: '30%'}}>
                                                  <Link to="/Messages" className="table-link warning tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <Link to="./AddAppointment" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-calendar fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <a href="#" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                      <i class="fa fa-ban fa-2x" aria-hidden="true" data-toggle="modal" data-target="#exampleModal9" ></i>
                                                      </span>
                                                  </a>
                                                  <a href="#" className="table-link danger tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-user-times fa-2x"
                                                              aria-hidden="true" data-toggle="modal" data-target="#exampleModal8" ></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i> */}
                                                          {/* <i
                                                              className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </a>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                      alt="" />
                                                  <a className="user-link">Emma Watson</a>
                                              </td>
                                              <td>
                                                  2004/01/24
                                              </td>

                                              <td style={{width: '30%'}}>
                                                  <Link to="/Messages" className="table-link warning tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <Link to="./AddAppointment" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-calendar fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <a href="#" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                      <i class="fa fa-ban fa-2x" aria-hidden="true" data-toggle="modal" data-target="#exampleModal9" ></i>
                                                      </span>
                                                  </a>
                                                  <a href="#" className="table-link danger tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-user-times fa-2x"
                                                              aria-hidden="true" data-toggle="modal" data-target="#exampleModal8" ></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i> */}
                                                          {/* <i
                                                              className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </a>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <img src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                                      alt="" />
                                                  <a className="user-link">Robert Downey Jr.</a>
                                              </td>
                                              <td>
                                                  2013/12/31
                                              </td>

                                              <td style={{width: '30%'}}>
                                                  <Link to="/Messages" className="table-link warning tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <Link to="./AddAppointment" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-calendar fa-2x" aria-hidden="true"></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i>
                                                          <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </Link>
                                                  <a href="#" className="table-link tb-icons">
                                                      <span className="fa-stack">
                                                          {/* <i className="fa fa-square fa-stack-2x"></i> */}
                                                          <i class="fa fa-ban fa-2x" aria-hidden="true" data-toggle="modal" data-target="#exampleModal9" ></i>
                                                          {/* <i
                                                              className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </a>
                                                  <a href="#" className="table-link danger tb-icons">
                                                      <span className="fa-stack">
                                                          <i class="fa fa-user-times fa-2x"
                                                              aria-hidden="true" data-toggle="modal" data-target="#exampleModal8" ></i>
                                                          {/* <i className="fa fa-square fa-stack-2x"></i> */}
                                                          {/* <i
                                                              className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                          */}
                                                      </span>
                                                  </a>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                              <ul className="pagination pull-right">
                                  <li><a href="#"><i className="fa fa-chevron-left"></i></a></li>
                                  <li><a href="#">1</a></li>
                                  <li><a href="#">2</a></li>
                                  <li><a href="#">3</a></li>
                                  <li><a href="#">4</a></li>
                                  <li><a href="#">5</a></li>
                                  <li><a href="#"><i className="fa fa-chevron-right"></i></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>


          </div>
      </div>
  </div>


{/* modal 8 fro confirming remove doctor */}

<div className="modal fade" id="exampleModal8" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Remove this Therapist</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

        <form action="/action_page.php">
        
              <button className="btn btn-success"> Yes sure</button>
        <button type="button" className="btn btn-danger closebtn" data-dismiss="modal">No Cancel</button>
        </form>
      </div>
      <div className="modal-footer">
      </div>
    </div>
  </div>
</div>



{/* modal 9 fro confirming remove journal access */}

<div className="modal fade" id="exampleModal9" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Remove Journal Access from this Therapist</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

        <form action="/action_page.php">
        
              <button className="btn btn-success"> Yes sure</button>
        <button type="button" className="btn btn-danger closebtn" data-dismiss="modal">No Cancel</button>
        </form>
      </div>
      <div className="modal-footer">
      </div>
    </div>
  </div>
</div>



  {/*
  <!-- Bootstrap core JS--> */}
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>



</div>

  
)




export default listTherapists;