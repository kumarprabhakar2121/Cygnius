import React from 'react';
import { Link } from "react-router-dom";



const SearchFindClients = () => (

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
                      
<div>


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" integrity="sha256-3sPp8BkKUE7QyPSl6VfBByBroQbKxKG7tsusY2mhbVY=" crossorigin="anonymous" />

<div className="container">
  <div className="row">
    <div className="col-lg-10 mx-auto mb-4">
      <div className="section-title text-center ">
        <h3 className="top-c-sep">Search or Find New Clients</h3>
        <p>Lorem ipsum dolor sit detudzdae amet, rcquisc adipiscing elit. Aenean socada commodo
          ligaui egets dolor. Nullam quis ante tiam sit ame orci eget erovtiu faucid.</p>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-lg-10 mx-auto">
      <div className="career-search mb-60">

        <form action="#" className="career-form mb-60">
          <div className="row">
            <div className="col-md-6 col-lg-3 my-3">
              <div className="input-group position-relative">
                <input type="text" className="form-control" placeholder="Enter Name" id="keywords"/>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 my-3">
              <div className="select-container">
                <select className="custom-select">
                  <option selected="">Location</option>
                  <option value="1">Jaipur</option>
                  <option value="2">Pune</option>
                  <option value="3">Bangalore</option>
                </select>
              </div>
            </div>
            {/* <div className="col-md-6 col-lg-3 my-3">
              <div className="select-container">
                <select className="custom-select">
                  <option selected="">Select Job Type</option>
                  <option value="1">Ui designer</option>
                  <option value="2">JS developer</option>
                  <option value="3">Web developer</option>
                </select>
              </div>
            </div> */}
            <div className="col-md-6 col-lg-3 my-3 search-find-search">
              <button type="button" className="btn btn-lg btn-block btn-light btn-custom" id="contact-submit">
                Search
              </button>
            </div>
          </div>
        </form>

        <div className="filter-result">
        <p class="mb-30 ff-montserrat nearby">Recommendations </p>

          <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
            <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
              <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                FD
              </div>
              <div className="job-content">
                <h5 className="text-center text-md-left search-result-name">Dr. John Doe</h5>
                <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                  <li className="mr-md-4">
                    <i className="zmdi zmdi-pin mr-2"></i> Los Angeles
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="job-right my-4 flex-shrink-0">
              <a href="#" className="btn d-block w-100 d-sm-inline-block btn-light"><button type="button" className="btn btn-primary">Add Client</button></a>
            </div>
          </div>

          <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
            <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
              <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                UX
              </div>
              <div className="job-content">
                <h5 className="text-center text-md-left search-result-name">Dr. Johnny Doe</h5>
                <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                  <li className="mr-md-4">
                    <i className="zmdi zmdi-pin mr-2"></i> Los Angeles
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="job-right my-4 flex-shrink-0">
              <a href="#" className="btn d-block w-100 d-sm-inline-block btn-light"><button type="button" className="btn btn-primary">Add Client</button></a>
            </div>
          </div>

          <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
            <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
              <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                GD
              </div>
              <div className="job-content">
                <h5 className="text-center text-md-left search-result-name">Dr. John Doe</h5>
                <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                  <li className="mr-md-4">
                    <i className="zmdi zmdi-pin mr-2"></i> Los Angeles
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="job-right my-4 flex-shrink-0">
              <a href="#" className="btn d-block w-100 d-sm-inline-block btn-light"><button type="button" className="btn btn-primary">Add Client</button></a>
            </div>
          </div>

          <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
            <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
              <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                JS
              </div>
              <div className="job-content">
                <h5 className="text-center text-md-left search-result-name">Dr. John Doe</h5>
                <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                  <li className="mr-md-4">
                    <i className="zmdi zmdi-pin mr-2"></i> Los Angeles
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="job-right my-4 flex-shrink-0">
              <a href="#" className="btn d-block w-100 d-sm-inline-block btn-light"><button type="button" className="btn btn-primary">Add Client</button></a>
            </div>
          </div>

        </div>
      </div>

      {/* <!-- START Pagination --> */}
      <nav aria-label="Page navigation">
        <ul className="pagination pagination-reset justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabindex="-1" aria-disabled="true">
              <i className="zmdi zmdi-long-arrow-left"></i>
            </a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item d-none d-md-inline-block"><a className="page-link" href="#">2</a></li>
          <li className="page-item d-none d-md-inline-block"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">...</a></li>
          <li className="page-item"><a className="page-link" href="#">8</a></li>
          <li className="page-item">
            <a className="page-link" href="#">
              <i className="zmdi zmdi-long-arrow-right"></i>
            </a>
          </li>
        </ul>
      </nav>
      {/* <!-- END Pagination --> */}
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

export default SearchFindClients;