import React from 'react';
import { Link } from "react-router-dom";


const Messages = () =>(
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

                  
        <div className="message-box">
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

<div className="container">
<h2 style={{margin:'0 20px'}}>Your Messages</h2>
  <div className="row clearfix">
    <div className="col-lg-12">
      <div className="card chat-app">
        <div id="plist" className="people-list">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fa fa-search"></i></span>
            </div>
            <input type="text" className="form-control" placeholder="Search..." />
          </div>
          <ul className="list-unstyled chat-list mt-2 mb-0">
            <li className="clearfix">
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar"/>
              <div className="about">
                <div className="name">Vincent Porter</div>
                <div className="status"> <i className="fa fa-circle offline"></i> left 7 mins ago </div>
              </div>
            </li>
            <li className="clearfix active">
              <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"/>
              <div className="about">
                <div className="name">Aiden Chavez</div>
                <div className="status"> <i className="fa fa-circle online"></i> online </div>
              </div>
            </li>
            <li className="clearfix">
              <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar"/>
              <div className="about">
                <div className="name">Mike Thomas</div>
                <div className="status"> <i className="fa fa-circle online"></i> online </div>
              </div>
            </li>
            <li className="clearfix">
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar"/>
              <div className="about">
                <div className="name">Christian Kelly</div>
                <div className="status"> <i className="fa fa-circle offline"></i> left 10 hours ago </div>
              </div>
            </li>
            <li className="clearfix">
              <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar"/>
              <div className="about">
                <div className="name">Monica Ward</div>
                <div className="status"> <i className="fa fa-circle online"></i> online </div>
              </div>
            </li>
            <li className="clearfix">
              <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar"/>
              <div className="about">
                <div className="name">Dean Henry</div>
                <div className="status"> <i className="fa fa-circle offline"></i> offline since Oct 28 </div>
              </div>
            </li>
            <li className="clearfix">
              <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar"/>
              <div className="about">
                <div className="name">Dean Henry</div>
                <div className="status"> <i className="fa fa-circle offline"></i> offline since Oct 28 </div>
              </div>
            </li>
            <li className="clearfix">
              <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar"/>
              <div className="about">
                <div className="name">Dean Henry</div>
                <div className="status"> <i className="fa fa-circle offline"></i> offline since Oct 28 </div>
              </div>
            </li>
            
            
          </ul>
        </div>
        <div className="chat">
          <div className="chat-header clearfix">
            <div className="row">
              <div className="col-lg-6">
                <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                  <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"/>
                </a>
                <div className="chat-about">
                  <h6 className="m-b-0">Aiden Chavez</h6>
                  <small>Last seen: 2 hours ago</small>
                </div>
              </div>
              <div className="col-lg-6 hidden-sm text-right">
                <a href="javascript:void(0);" className="btn btn-outline-secondary"><i className="fa fa-camera"></i></a>
                <a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-image"></i></a>
                <a href="javascript:void(0);" className="btn btn-outline-info"><i className="fa fa-cogs"></i></a>
                <a href="javascript:void(0);" className="btn btn-outline-warning"><i className="fa fa-question"></i></a>
              </div>
            </div>
          </div>
          <div className="chat-history">
            <ul className="m-b-0">
              
              <li className="clearfix">
                <div className="message-data">
                  <span className="message-data-time">10:12 AM, Today</span>
                </div>
                <div className="message my-message">Are we meeting today?</div>
              </li>
              <li className="clearfix">
                <div className="message-data">
                  <span className="message-data-time">10:15 AM, Today</span>
                </div>
                <div className="message my-message">Project has been already finished and I have results to show you.</div>
              </li>
              
              <li className="clearfix">
                <div className="message-data text-right">
                  <span className="message-data-time">10:10 AM, Today</span>
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar"/>
                </div>
                <div className="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
              </li>
            </ul>
          </div>
          <div className="chat-message clearfix">
            <div className="input-group mb-0">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-send"></i></span>
              </div>
              <input type="text" className="form-control" placeholder="Enter text here..."/>
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
</div>
{/*
<!-- Bootstrap core JS--> */}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>



</div>






</div>


)


export default Messages;