import React from "react";
import { Link } from "react-router-dom";



const AddNewJournal = () =>{
return(

<div>


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



<section className="credit-card">
		<div className="container">
<h2 > Add New Journal</h2>

			<div className="card-holder">
				<div className="card-box bg-news">
					<div className="row">
						<div className="col-lg-5">
						<div class="img-box">
								<img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="img-fluid" />
							</div>
						</div>
						<div className="col-lg-7 bigger">

							<form>
								<div className="card-details">
									<h3 className="title">Add New Journal</h3>
									<div className="row">
										<div className="form-group col-sm-7">
											<div className="inner-addon right-addon">
												<label for="date">Select Date</label>
												<input id="date" type="date" className="form-control" placeholder="date"
													aria-label="date" aria-describedby="basic-addon1" />
											</div>
										</div>
                                        <hr/>

										<div className="form-group col-sm-12">
											<div className="inner-addon right-addon">
												<label for="time">Choose Time</label><br/>
												<input type="time" />

											</div>
										</div>
<hr/>

                                        <div className="form-group col-sm-12">
											<div className="inner-addon right-addon">
												<label for="time">Choose Feeling</label>
												<div>
                                                <button className="btn journalbt btn-outline-success">Remorse</button>
                                                <button className="btn journalbt btn-outline-success">Loneliness</button>
                                                <button className="btn journalbt btn-outline-success">Anger</button>
                                                <button className="btn journalbt btn-outline-success">Caring</button>
                                                <button className="btn journalbt btn-outline-success">Happiness</button>
                                                <button className="btn journalbt btn-outline-success">Depression</button>
                                                <button className="btn journalbt btn-outline-success">Inadequate</button>
												<button className="btn journalbt btn-outline-success">Fear</button>
												<button className="btn journalbt btn-outline-success">Confusion</button>
													

												</div>


											</div>
										</div>
<br></br>
<hr/>
                                        <div className="form-group col-sm-12">
											<div className="inner-addon right-addon">
												<label for="time">Choose Intensity</label>
												<div>
                                                <button className="btn journalbt btn-outline-success">Light</button>
                                                <button className="btn journalbt btn-outline-success">Medium</button>
                                                <button className="btn journalbt btn-outline-success">Strong</button>
                                                
													

												</div>


											</div>
										</div>

										<div className="form-group col-sm-12">
											<button type="button"
												className="btn btn-success btn-block proceed-btn">Add Journal
											</button>
										</div>
									</div>
								</div>
							</form>

						</div>

					</div>
				</div>
			</div>
		</div>
	</section>



            </div>
        </div>
    </div>
    {/*
    <!-- Bootstrap core JS--> */}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>



</div>





</div>

)


}




export default AddNewJournal;