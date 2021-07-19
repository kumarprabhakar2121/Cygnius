import React from 'react';
import { Link } from "react-router-dom";


const Notes =() =>(
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

<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
    <div className="page-content container note-has-grid" style={{margin:'40px 30px'}}>
        <h3>every Notes of Therapists</h3>
        <div className="tab-content bg-transparent">
            <div id="note-full-container" className="note-has-grid row">
            <button type="button" className="btn btn-lg btn-outline-success" data-toggle="modal" data-target="#exampleModal">ADD NEW NOTE</button>
            <div className="col-md-4 single-note-item all-category">
                    <div className="card card-body">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Try to do Yoga every weekend">Try to do Yoga every weekend</h5>
                        <p className="note-date font-12 text-muted">11 March 2021 08:30 PM</p>
                        <p className="note-date font-12 text-muted">For Dr. John Doe</p>

                        <div className="note-content">
                            <p className="note-inner-content text-muted"
                                data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                                Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                        </div>
                        <div>
                        <a href="#" className="fa-icons">edit
                        <i class="fa fa-pencil " aria-hidden="true"></i>
                    </a>
                    <a href="#" className="fa-icons">
                        <i class="fa fa-share-alt fa-2x" aria-hidden="true"></i>

                    </a>
                    <a href="#" className="fa-icons">
                        <i class="fa fa-trash fa-2x" aria-hidden="true"></i>

                    </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 single-note-item all-category">
                    <div className="card card-body">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Try to do Yoga every weekend">Try to do Yoga every weekend</h5>
                        <p className="note-date font-12 text-muted">11 March 2021 08:30 PM</p>
                        <p className="note-date font-12 text-muted">For Dr. John Doe</p>

                        <div className="note-content">
                            <p className="note-inner-content text-muted"
                                data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                                Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                        </div>
                        <div>
                        <a href="#" className="fa-icons">
                        <i class="fa fa-pencil fa-2x" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="fa-icons">
                        <i class="fa fa-share-alt fa-2x" aria-hidden="true"></i>

                    </a>
                    <a href="#" className="fa-icons">
                        <i class="fa fa-trash fa-2x" aria-hidden="true"></i>

                    </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 single-note-item all-category">
                    <div className="card card-body">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Try to do Yoga every weekend">Try to do Yoga every weekend</h5>
                        <p className="note-date font-12 text-muted">11 March 2021 08:30 PM</p>
                        <p className="note-date font-12 text-muted">For Dr. John Doe</p>

                        <div className="note-content">
                            <p className="note-inner-content text-muted"
                                data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                                Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                        </div>
                        <div>
                        <a href="#" className="fa-icons">
                        <i class="fa fa-pencil fa-2x" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="fa-icons">
                        <i class="fa fa-share-alt fa-2x" aria-hidden="true"></i>

                    </a>
                    <a href="#" className="fa-icons">
                        <i class="fa fa-trash fa-2x" aria-hidden="true"></i>

                    </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 single-note-item all-category">
                    <div className="card card-body">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Try to do Yoga every weekend">Try to do Yoga every weekend</h5>
                        <p className="note-date font-12 text-muted">11 March 2021 08:30 PM</p>
                        <p className="note-date font-12 text-muted">For Dr. John Doe</p>

                        <div className="note-content">
                            <p className="note-inner-content text-muted"
                                data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                                Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                        </div>
                        <div>
                        <a href="#" className="fa-icons">
                        <i class="fa fa-pencil fa-2x" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="fa-icons">
                        <i class="fa fa-share-alt fa-2x" aria-hidden="true"></i>

                    </a>
                    <a href="#" className="fa-icons">
                        <i class="fa fa-trash fa-2x" aria-hidden="true"></i>

                    </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 single-note-item all-category">
                    <div className="card card-body">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Try to do Yoga every weekend">Try to do Yoga every weekend</h5>
                        <p className="note-date font-12 text-muted">11 March 2021 08:30 PM</p>
                        <p className="note-date font-12 text-muted">For Dr. John Doe</p>

                        <div className="note-content">
                            <p className="note-inner-content text-muted"
                                data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                                Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                        </div>
                        <div>
                        <a href="#" className="fa-icons">
                        <i class="fa fa-pencil fa-2x" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="fa-icons">
                        <i class="fa fa-share-alt fa-2x" aria-hidden="true"></i>

                    </a>
                    <a href="#" className="fa-icons">
                        <i class="fa fa-trash fa-2x" aria-hidden="true"></i>

                    </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 single-note-item all-category">
                    <div className="card card-body">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Try to do Yoga every weekend">Try to do Yoga every weekend</h5>
                        <p className="note-date font-12 text-muted">11 March 2021 08:30 PM</p>
                        <p className="note-date font-12 text-muted">For Dr. John Doe</p>

                        <div className="note-content">
                            <p className="note-inner-content text-muted"
                                data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                                Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                        </div>
                        <div>
                        <a href="#" className="fa-icons">
                        <i class="fa fa-pencil fa-2x" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="fa-icons">
                        <i class="fa fa-share-alt fa-2x" aria-hidden="true"></i>

                    </a>
                    <a href="#" className="fa-icons">
                        <i class="fa fa-trash fa-2x" aria-hidden="true"></i>

                    </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 single-note-item all-category">
                    <div className="card card-body">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Try to do Yoga every weekend">Try to do Yoga every weekend</h5>
                        <p className="note-date font-12 text-muted">11 March 2021 08:30 PM</p>
                        <p className="note-date font-12 text-muted">For Dr. John Doe</p>

                        <div className="note-content">
                            <p className="note-inner-content text-muted"
                                data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                                Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                        </div>
                        <div>
                        <a href="#" className="fa-icons">
                        <i class="fa fa-pencil fa-2x" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="fa-icons">
                        <i class="fa fa-share-alt fa-2x" aria-hidden="true"></i>

                    </a>
                    <a href="#" className="fa-icons">
                        <i class="fa fa-trash fa-2x" aria-hidden="true"></i>

                    </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 single-note-item all-category">
                    <div className="card card-body">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Try to do Yoga every weekend">Try to do Yoga every weekend</h5>
                        <p className="note-date font-12 text-muted">11 March 2021 08:30 PM</p>
                        <p className="note-date font-12 text-muted">For Dr. John Doe</p>

                        <div className="note-content">
                            <p className="note-inner-content text-muted"
                                data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                                Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                        </div>
                        <div>
                        <a href="#" className="fa-icons">
                        <i class="fa fa-pencil fa-2x" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="fa-icons">
                        <i class="fa fa-share-alt fa-2x" aria-hidden="true"></i>

                    </a>
                    <a href="#" className="fa-icons">
                        <i class="fa fa-trash fa-2x" aria-hidden="true"></i>

                    </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 single-note-item all-category">
                    <div className="card card-body">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Try to do Yoga every weekend">Try to do Yoga every weekend</h5>
                        <p className="note-date font-12 text-muted">11 March 2021 08:30 PM</p>
                        <p className="note-date font-12 text-muted">For Dr. John Doe</p>

                        <div className="note-content">
                            <p className="note-inner-content text-muted"
                                data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                                Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                        </div>
                        <div>
                        <a href="#" className="fa-icons">
                        <i class="fa fa-pencil fa-2x" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="fa-icons">
                        <i class="fa fa-share-alt fa-2x" aria-hidden="true"></i>

                    </a>
                    <a href="#" className="fa-icons">
                        <i class="fa fa-trash fa-2x" aria-hidden="true"></i>

                    </a>
                        </div>
                    </div>
                </div>
                
                
                
          </div>
        </div>
    </div>

{/* MODAL */}

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">ADD NOTES</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

        <form action="/action_page.php">
        <div>
        <label for="note">Enter note</label><br/>
        <textarea name="note"></textarea>

        </div>
  <label for="dr">Choose a CLIENT:</label>
  <select name="dr" id="dr">
    <option value=" john doe"> -SELECT-</option>
    <option value=" john doe"> john doe</option>
    <option value=" john doe"> john doe</option>
    <option value=" john doe"> john doe</option>
  </select>
  <br/><br/>
  <button type="button" className="btn btn-success btn-block modal-btn">SHARE NOTE WITH  CLIENT
	</button>
    <button type="button" className="btn btn-outline-primary btn-block modal-btn">DO NOT SHARE NOTE WITH  CLIENT
	</button>
    
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
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


export default Notes;