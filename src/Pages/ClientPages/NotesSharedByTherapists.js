import React from 'react';
import { Link } from "react-router-dom";

const NotesSharedByTherapists = () =>(
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

<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
    <div className="page-content container note-has-grid" style={{margin:'40px 30px'}}>
        <h3>All shared Notes By Therapists</h3>
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
              <input className="form-control form-control form-control-borderless" type="search" placeholder="Search in Notes" />
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
        <div className="tab-content bg-transparent">
            <div id="note-full-container" className="note-has-grid row">
            <div className="col-md-4 single-note-item all-category">
                    <div className="card card-body">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Try to do Yoga every weekend">Try to do Yoga every weekend</h5>
                        <p className="note-date font-12 text-muted">11 March 2021 08:30 PM</p>
                        <p className="note-date font-12 text-muted">By Dr. John Doe</p>

                        <div className="note-content">
                            <p className="note-inner-content text-muted"
                                data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                                Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 single-note-item all-category">
                    <div className="card card-body">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Try to do Yoga every weekend">Try to do Yoga every weekend</h5>
                        <p className="note-date font-12 text-muted">11 March 2021 08:30 PM</p>
                        <p className="note-date font-12 text-muted">By Dr. John Doe</p>

                        <div className="note-content">
                            <p className="note-inner-content text-muted"
                                data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                                Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 single-note-item all-category">
                    <div className="card card-body">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Try to do Yoga every weekend">Try to do Yoga every weekend</h5>
                        <p className="note-date font-12 text-muted">11 March 2021 08:30 PM</p>
                        <p className="note-date font-12 text-muted">By Dr. John Doe</p>

                        <div className="note-content">
                            <p className="note-inner-content text-muted"
                                data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                                Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 single-note-item all-category">
                    <div className="card card-body">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Try to do Yoga every weekend">Try to do Yoga every weekend</h5>
                        <p className="note-date font-12 text-muted">11 March 2021 08:30 PM</p>
                        <p className="note-date font-12 text-muted">By Dr. John Doe</p>

                        <div className="note-content">
                            <p className="note-inner-content text-muted"
                                data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                                Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 single-note-item all-category">
                    <div className="card card-body">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Try to do Yoga every weekend">Try to do Yoga every weekend</h5>
                        <p className="note-date font-12 text-muted">11 March 2021 08:30 PM</p>
                        <p className="note-date font-12 text-muted">By Dr. John Doe</p>

                        <div className="note-content">
                            <p className="note-inner-content text-muted"
                                data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                                Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 single-note-item all-category">
                    <div className="card card-body">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Try to do Yoga every weekend">Try to do Yoga every weekend</h5>
                        <p className="note-date font-12 text-muted">11 March 2021 08:30 PM</p>
                        <p className="note-date font-12 text-muted">By Dr. John Doe</p>

                        <div className="note-content">
                            <p className="note-inner-content text-muted"
                                data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                                Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 single-note-item all-category">
                    <div className="card card-body">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Try to do Yoga every weekend">Try to do Yoga every weekend</h5>
                        <p className="note-date font-12 text-muted">11 March 2021 08:30 PM</p>
                        <p className="note-date font-12 text-muted">By Dr. John Doe</p>

                        <div className="note-content">
                            <p className="note-inner-content text-muted"
                                data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                                Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 single-note-item all-category">
                    <div className="card card-body">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Try to do Yoga every weekend">Try to do Yoga every weekend</h5>
                        <p className="note-date font-12 text-muted">11 March 2021 08:30 PM</p>
                        <p className="note-date font-12 text-muted">By Dr. John Doe</p>

                        <div className="note-content">
                            <p className="note-inner-content text-muted"
                                data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                                Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 single-note-item all-category">
                    <div className="card card-body">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Try to do Yoga every weekend">Try to do Yoga every weekend</h5>
                        <p className="note-date font-12 text-muted">11 March 2021 08:30 PM</p>
                        <p className="note-date font-12 text-muted">By Dr. John Doe</p>

                        <div className="note-content">
                            <p className="note-inner-content text-muted"
                                data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                                Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
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

export default NotesSharedByTherapists;