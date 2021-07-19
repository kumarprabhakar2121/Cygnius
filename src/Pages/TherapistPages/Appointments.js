import React from 'react';

import { Link } from "react-router-dom";


const Appointments= ()=>(
<div>





<div>

    <div className="d-flex" id="wrapper">
        {/*
        <!-- Sidebar--> */}
        <div className="border-end bg-white " id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light"><Link to="./ListClients"><i class="fas fa-spa"> &nbsp; Cygnius</i></Link></div>
            <div className="list-group list-group-flush left-side">
                <a>
                    <div className="t1">
                        <p>Therapist Dashboard</p>
                    </div>
                </a>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
                    to="./ListClients">List Clients</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
                    to="./SearchFindClients">Search /Find New Clients</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
                    to="./ClientRequest">Clients Requests</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
                    to="./Notes">My Notes</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
                    to="./Appointments">Appointments</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
                    to="./Messages16">Messages</Link>
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
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
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


<div className="row">
      <div className="col-md-12">
        <div className="card card-white mb-5">
          <div className="card-heading clearfix border-bottom mb-4">
            <h3  className="card-title">Appontments Requests(seen by doctors only)</h3>
          </div>
          <div className="card-body">
            <ul className="list-unstyled">
              <li className="position-relative booking">
                <div className="media">
                  <div className="msg-img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                  </div>
                  <div className="media-body">
                    <h5 className="mb-4">Client 1 <span className="badge badge-primary mx-3">Pending</span></h5>
                    <div className="mb-3">
                      <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">Booking Date:</span>
                      <span className="bg-light-blue">02.03.2020</span>
                    </div>
                    
                    <div className="mb-3">
                      <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">Time :</span>
                      <span className="bg-light-blue">12:00 - 01:00 PM</span>
                    </div>
                    
                    <a href="#" className="btn-gray">Send Message</a>
                  </div>
                </div>
                <div className="buttons-to-right">
                  <a href="#" className="btn-gray mr-2"><i className="far fa-times-circle mr-2"></i> Reject</a>
                  <a href="#" className="btn-gray"><i className="far fa-check-circle mr-2"></i> Approve</a>
                </div>
              </li>

              <li className="position-relative booking">
                <div className="media">
                  <div className="msg-img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                  </div>
                  <div className="media-body">
                    <h5 className="mb-4">Client 2 <span className="badge badge-success ml-3">Approved</span></h5>
                    <div className="mb-3">
                      <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">Booking Date:</span>
                      <span className="bg-light-green">06.03.2020 - 07.03.2020</span>
                    </div>
                    
                    
                    <div className="mb-3">
                      <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">Time :</span>
                      <span className="bg-light-blue">12:00 - 01:00 PM</span>
                    </div>
                    
                    
                    <a href="#" className="btn-gray">Send Message</a>
                  </div>
                </div>
                <div className="buttons-to-right">
                  <a href="#" className="btn-gray mr-2"><i className="far fa-times-circle mr-2"></i>Cancel</a>
                </div>
              </li>

              <li className="position-relative booking">
                <div className="media">
                  <div className="msg-img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                  </div>
                  <div className="media-body">
                    <h5 className="mb-4">Client 3 <span className="badge badge-danger ml-3">Cancelled</span></h5>
                    <div className="mb-3">
                      <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">Booking Date:</span>
                      <span className="btn-gray">20.03.2020 - 24.03.2020</span>
                    </div>


                    <div className="mb-3">
                      <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">Time :</span>
                      <span className="bg-light-blue">12:00 - 01:00 PM</span>
                    </div>
                    
                    <a href="#" className="btn-gray">Send Message</a>
                    

                  </div>
                </div>
              </li>
            </ul>

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




</div>
)

export default Appointments;