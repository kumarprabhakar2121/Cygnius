import React from 'react';
import { Link } from "react-router-dom";


const ClientsAppointments = () =>(
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



<div className="row">
      <div className="col-md-12">
        <div className="card card-white mb-5">
          <div className="card-heading clearfix border-bottom mb-4">
            <h3  className="card-title">My Appointments</h3>
          </div>

          {/* <div>
              <button type="button" className="btn btn-gray"><a href="#">
                      <i class="fa fa-plus " aria-hidden="true">Add New Appointment</i>
                            
                      </a></button>
          </div> */}
          <div className="card-body">
            <ul className="list-unstyled">
              <li className="position-relative booking">
                <div className="media">
                  <div className="msg-img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                  </div>
                  <div className="media-body">
                    <h5 className="mb-4">Therapist 1 <span className="badge badge-primary mx-3">Pending</span></h5>
                    <div className="mb-3">
                      <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">Booking Date:</span>
                      <span className="bg-light-blue">02.03.2020</span>
                      <Link to="./AddAppointment">
                      <i class="fa fa-edit " aria-hidden="true"></i>
                      </Link>
                    </div>
                    
                    <div className="mb-3">
                      <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">Time :</span>
                      <span className="bg-light-blue">12:00 - 01:00 PM</span>
                      <Link to="./AddAppointment">
                      <i class="fa fa-edit " aria-hidden="true"></i>
                      </Link>
                    </div>
                    
                    <Link to="./Messages" className="btn-gray">Send Message</Link>
                  </div>
                </div>
                <div className="buttons-to-right ">
                  <a href="#" className="btn-gray mr-2">Cancel Appointment</a>
                 
                </div>
              </li>

              <li className="position-relative booking">
                <div className="media">
                  <div className="msg-img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                  </div>
                  <div className="media-body">
                    <h5 className="mb-4">Therapist 2 <span className="badge badge-success ml-3">Approved</span></h5>
                    <div className="mb-3">
                      <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">Booking Date:</span>
                      <span className="bg-light-green">06.03.2020 - 07.03.2020</span>
                      <Link to="./AddAppointment">
                      <i class="fa fa-edit " aria-hidden="true"></i>
                      </Link>
                    </div>
                    
                    
                    <div className="mb-3">
                      <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">Time :</span>
                      <span className="bg-light-blue">12:00 - 01:00 PM</span>
                      <Link to="./AddAppointment">
                      <i class="fa fa-edit " aria-hidden="true"></i>
                      </Link>
                    </div>
                    
                    
                    <Link to="./Messages" className="btn-gray">Send Message</Link>
                  </div>
                </div>
                <div className="buttons-to-right">
                  <a href="#" className="btn-gray mr-2">Cancel Appointment</a>
                </div>
              </li>

              <li className="position-relative booking">
                <div className="media">
                  <div className="msg-img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                  </div>
                  <div className="media-body">
                    <h5 className="mb-4">Therapist 3 <span className="badge badge-danger ml-3">Cancelled</span></h5>
                    <div className="mb-3">
                      <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">Booking Date:</span>
                      <span className="btn-gray">20.03.2020 - 24.03.2020</span>
                      <Link to="./AddAppointment">
                      <i class="fa fa-edit " aria-hidden="true"></i>
                      </Link>
                    </div>


                    <div className="mb-3">
                      <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">Time :</span>
                      <span className="bg-light-blue">12:00 - 01:00 PM</span>
                      <Link to="./AddAppointment">
                      <i class="fa fa-edit " aria-hidden="true"></i>
                      </Link>
                      
                    </div>
                    
                    <Link to="./Messages" className="btn-gray">Send Message</Link>
                    
                    <br></br>
                  </div>
                </div>
              </li>
              <li className="position-relative booking">
                <div className="media">
                  <div className="msg-img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                  </div>
                  <div className="media-body">
                    <h5 className="mb-4">Therapist 3 <span className="badge badge-danger ml-3">Cancelled</span></h5>
                    <div className="mb-3">
                      <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">Booking Date:</span>
                      <span className="btn-gray">20.03.2020 - 24.03.2020</span>
                      <Link to="./AddAppointment">
                      <i class="fa fa-edit " aria-hidden="true"></i>
                      </Link>
                    </div>


                    <div className="mb-3">
                      <span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">Time :</span>
                      <span className="bg-light-blue">12:00 - 01:00 PM</span>
                      <Link to="./AddAppointment">
                      <i class="fa fa-edit " aria-hidden="true"></i>
                      </Link>
                      
                    </div>
                    
                    <Link to="./Messages" className="btn-gray">Send Message</Link>
                    
                    <br></br>
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


export default ClientsAppointments;