import React from 'react';
import { Link } from "react-router-dom";


const MyJournals = () =>(



    <div>

    <div className="d-flex" id="wrapper">
        {/*
        <!-- Sidebar--> */}
        <div className="border-end bg-white " id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light"><i class="fas fa-spa">&nbsp; Cygnius</i></div>
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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous" />
  <div className="container" style={{backgroundColor:"#"}}>
  <h2>my journals list page for Client</h2>
    <br />
    <div className="row " style={{backgroundColor:""}}>
      <div className="col-12 col-md-10 col-lg-8 " style={{marginLeft:'42px'}}>
        <form className="card ">
          <div className="card-body row no-gutters ">
            <div className="col-auto">
              <i className="fas fa-search  text-body"></i>
            </div>
            {/* <!--end of col--> */}
            <div className="col">
              <input className="form-control form-control form-control-borderless" type="search" placeholder="Search in Journals" />
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
  
  <div className="container mt-3 mb-4">
  
    <div className="col-lg-9 mt-4 mt-lg-0">
    <div class="container col-sm-12">
    <button type="button" class="btn btn-success proceed-btn">Add new Journal</button>
    <button type="button" class="btn btn-success proceed-btn">See Journal Access Requests</button>
  </div>
      <div className="row">
        <div className="col-md-12">
          <div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
            <table className="table manage-candidates-top mb-0">
              <thead>
                <tr>
                  <th>Journal List </th>
                  <th className="text-center">Feeling</th>
                  <th className="text-center">Date And Time</th>
                  <th className="action text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="candidates-list">
                <td>
                      <p style={{fontSize:'18px'}}>Journal log 1</p>
                  </td>
                  <td className="candidate-list-favourite-time text-center">                    
                    <p className="text-center">Happiness</p>
                    <p className="text-center">Strong</p>
                  </td>
                  <td className="text-right">
                        <p>12-09-2021</p> <p>12:23 PM</p>
                  </td>
                  <td>
                  <ul className="list-unstyled mb-0 d-flex justify-content-end">
                      <li><a href="#" className="text-primary list-journal-icon" data-toggle="modal" data-target="#exampleModal6"><i className="far fa-eye "></i></a></li>
                      <li><a href="#" className="text-info list-journal-icon" data-toggle="tooltip" title="" data-original-title="Edit"><i className="fas fa-pencil-alt "></i></a></li>
                      <li><a href="#" className="text-danger list-journal-icon" data-toggle="modal" data-target="#exampleModal5"><i className="far fa-trash-alt "></i></a></li>
                    </ul>
                  </td>
                </tr>
                <tr className="candidates-list">
                <td>
                      <p style={{fontSize:'18px'}}>Journal log 2</p>
                  </td>
                  <td className="candidate-list-favourite-time text-center">                    
                    <p className="text-center">Happiness</p>
                    <p className="text-center">Light</p>
                  </td>
                  <td  className="text-right">
                        <p>12-09-2021</p> <p>12:23 PM</p>
                  </td>
                  <td>
                  <ul className="list-unstyled mb-0 d-flex justify-content-end">
                      <li><a href="#" className="text-primary list-journal-icon" data-toggle="modal" data-target="#exampleModal6"><i className="far fa-eye "></i></a></li>
                      <li><a href="#" className="text-info list-journal-icon" data-toggle="tooltip" title="" data-original-title="Edit"><i className="fas fa-pencil-alt "></i></a></li>
                      <li><a href="#" className="text-danger list-journal-icon" data-toggle="modal" data-target="#exampleModal5"><i className="far fa-trash-alt "></i></a></li>
                    </ul>
                  </td>
                </tr>
                <tr className="candidates-list">
                <td>
                      <p style={{fontSize:'18px'}}>Journal log 3</p>
                  </td>
                  <td className="candidate-list-favourite-time text-center">                    
                    <p className="text-center">Fear</p>
                    <p className="text-center">Strong</p>
                  </td>
                  <td className="text-right">
                        <p>12-09-2021</p> <p>12:23 PM</p>
                  </td>
                  <td>
                  <ul className="list-unstyled mb-0 d-flex justify-content-end">
                      <li><a href="#" className="text-primary list-journal-icon" data-toggle="modal" data-target="#exampleModal6"><i className="far fa-eye "></i></a></li>
                      <li><a href="#" className="text-info list-journal-icon" data-toggle="tooltip" title="" data-original-title="Edit"><i className="fas fa-pencil-alt "></i></a></li>
                      <li><a href="#" className="text-danger list-journal-icon" data-toggle="modal" data-target="#exampleModal5"><i className="far fa-trash-alt "></i></a></li>
                    </ul>
                  </td>
                </tr>
                <tr className="candidates-list">
                  <td>
                      <p style={{fontSize:'18px'}}>Journal log 4</p>
                  </td>
                  <td className="candidate-list-favourite-time text-center text-success">                    
                    <p className="text-center">Happiness</p>
                    <p className="text-center">Medium</p>
                  </td>
                  <td className="text-right">
                        <p>12-09-2021</p> <p>12:23 PM</p>
                  </td>
                  <td>
                  <ul className="list-unstyled mb-0 d-flex justify-content-end">
                      <li><a href="#" className="text-primary list-journal-icon" data-toggle="modal" data-target="#exampleModal6"><i className="far fa-eye "></i></a></li>
                      <li><a href="#" className="text-info list-journal-icon" data-toggle="tooltip" title="" data-original-title="Edit"><i className="fas fa-pencil-alt "></i></a></li>
                      <li><a href="#" className="text-danger list-journal-icon" data-toggle="modal" data-target="#exampleModal5"><i className="far fa-trash-alt "></i></a></li>
                    </ul>
                  </td>
                </tr>
                <tr className="candidates-list">
                <td>
                      <p style={{fontSize:'18px'}}>Journal log 5</p>
                  </td>
                  <td className="candidate-list-favourite-time text-center text-danger">                    
                    <p className="text-center">Hurt</p>
                    <p className="text-center">Strong</p>
                  </td>
                  <td className="text-right">
                        <p>12-09-2021</p> <p>12:23 PM</p>
                  </td>
                  <td>
                  <ul className="list-unstyled mb-0 d-flex justify-content-end">
                      <li><a href="#" className="text-primary list-journal-icon" data-toggle="modal" data-target="#exampleModal6"><i className="far fa-eye "></i></a></li>
                      <li><a href="#" className="text-info list-journal-icon" data-toggle="tooltip" title="" data-original-title="Edit"><i className="fas fa-pencil-alt "></i></a></li>
                      <li><a href="#" className="text-danger list-journal-icon" data-toggle="modal" data-target="#exampleModal5"><i className="far fa-trash-alt "></i></a></li>
                    </ul>
                  </td>
                </tr>
                <tr className="candidates-list">
                <td>
                      <p style={{fontSize:'18px'}}>Journal log 6</p>
                  </td>
                  <td className="candidate-list-favourite-time text-center">                    
                    <p className="text-center">Happiness</p>
                    <p className="text-center">Strong</p>
                  </td>
                  <td className="text-right">
                        <p>12-09-2021</p> <p>12:23 PM</p>
                  </td>
                  <td>
                  <ul className="list-unstyled mb-0 d-flex justify-content-end">
                      <li><a href="#" className="text-primary list-journal-icon" data-toggle="modal" data-target="#exampleModal6"><i className="far fa-eye "></i></a></li>
                      <li><a href="#" className="text-info list-journal-icon" data-toggle="tooltip" title="" data-original-title="Edit"><i className="fas fa-pencil-alt "></i></a></li>
                      <li><a href="#" className="text-danger list-journal-icon" data-toggle="modal" data-target="#exampleModal5"><i className="far fa-trash-alt "></i></a></li>
                    </ul>
                  </td>
                </tr>
                <tr className="candidates-list">
                <td>
                      <p style={{fontSize:'18px'}}>Journal log 7</p>
                  </td>

                  <td className="candidate-list-favourite-time text-center text-danger">                    
                    <p className="text-center">Hurt</p>
                    <p className="text-center">Strong</p>
                  </td>

                  <td className="text-right">
                        <p>12-09-2021</p> <p>12:23 PM</p>
                  </td>
                  <td>
                    <ul className="list-unstyled mb-0 d-flex justify-content-end">
                      <li><a href="#" className="text-primary list-journal-icon" data-toggle="modal" data-target="#exampleModal6"><i className="far fa-eye "></i></a></li>
                      <li><a href="#" className="text-info list-journal-icon" data-toggle="tooltip" title="" data-original-title="Edit"><i className="fas fa-pencil-alt "></i></a></li>
                      <li><a href="#" className="text-danger list-journal-icon" data-toggle="modal" data-target="#exampleModal5"><i className="far fa-trash-alt "></i></a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-center mt-3 mt-sm-3">
              <ul className="pagination justify-content-center mb-0">
                <li className="page-item disabled"> <span className="page-link">Prev</span> </li>
                <li className="page-item active" aria-current="page"><span className="page-link">1 </span> <span className="sr-only">(current)</span></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">...</a></li>
                <li className="page-item"><a className="page-link" href="#">25</a></li>
                <li className="page-item"> <a className="page-link" href="#">Next</a> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



{/* modal for linking */}

{/* <!-- Button trigger modal --> */}

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal6" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Link to a new Therapist</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
        <form action="/action_page.php">
  <label for="dr">Choose a Therapist:</label>
  <select name="dr" id="dr">
    <option value="DR john doe">DR john doe</option>
    <option value="DR john doe">DR john doe</option>
    <option value="DR john doe">DR john doe</option>
    <option value="DR john doe">DR john doe</option>
  </select>
  <br/><br/>
  <button type="button" className="btn btn-success btn-block modal-btn">Link Therapist
	</button>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



{/* modal for deleting */}

<div className="modal fade" id="exampleModal5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Delete this journal</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
        <button type="button" className="btn btn-danger">Yes ,Delete</button>


      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
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
  


 


)

export default MyJournals;