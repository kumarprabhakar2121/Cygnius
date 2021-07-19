import React from 'react';
import { Link } from "react-router-dom";



const ClientRequest = () => (
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

      
<div className="container bootstrap snippets bootdey req-con">
<h2 className="req-title">Clients Requests</h2>

    <div className="col-sm-4 req-pro-card">
      {/* <!-- Begin user profile --> */}
      <div className="box-info text-center user-profile-2">
        <div className="header-cover">
          <img src="https://via.placeholder.com/350x280/333945/000000" alt="User cover" />
        </div>
        <div className="user-profile-inner">
          <h4 className="white">Jonny doe</h4>
          <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-circle profile-avatar" alt="User avatar" />
          <h5>client</h5>
          <p>Lead client at lorem ipsun <br></br> details about clients heredetails about clients heredetails about clients here </p>

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
          <h5>client</h5>
          <p>Lead client at lorem ipsun <br></br> details about clients heredetails about clients heredetails about clients here </p>

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
          <h5>client</h5>
          <p>Lead client at lorem ipsun <br></br> details about clients heredetails about clients heredetails about clients here </p>

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
          <h5>client</h5>
          <p>Lead client at lorem ipsun <br></br> details about clients heredetails about clients heredetails about clients here </p>

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
          <h5>client</h5>
          <p>Lead client at lorem ipsun <br></br> details about clients heredetails about clients heredetails about clients here </p>

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
    <h5>client</h5>
    <p>Lead client at lorem ipsun <br></br> details about clients heredetails about clients heredetails about clients here </p>

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




</div>
)


export default ClientRequest;