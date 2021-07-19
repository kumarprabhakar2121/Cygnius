import React from "react";
import { Link } from "react-router-dom";



const AddAppointment = () =>{
return(

<div>

<section class="credit-card">
		<div class="container">
<h2 >Make an Appointment</h2>

			<div class="card-holder">
				<div class="card-box bg-news">
					<div class="row">
						<div class="col-lg-5">
							<div class="img-box">
								<img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="img-fluid" />
							</div>
						</div>
						<div class="col-lg-7 bigger">

							<form>
								<div class="card-details">
									<h3 class="title">Make an Appointment</h3>
									<div class="row">
										<div class="form-group col-sm-7">
											<div class="inner-addon right-addon">
												<label for="date">Select Date</label>
												<input id="date" type="date" class="form-control" placeholder="date"
													aria-label="date" aria-describedby="basic-addon1" />
											</div>
										</div>

										<div class="form-group col-sm-12">
											<div class="inner-addon right-addon">
												<label for="time">Choose Time</label>
												<div>
													<button class="btn bts btn-outline-success">1:00 - 2:00 <br />
														Available</button>
													<button class="btn bts btn-outline-success">2:00 - 3:00 <br />
														Available</button>
													<button class="btn bts btn-outline-success">3:00 - 4:00 <br />
														Available</button>
													<button class="btn bts btn-outline-danger">4:00 - 5:00 <br />Not
														Available</button>
													<button class="btn bts btn-outline-danger">5:00 - 6:00 <br />Not
														Available</button>
													<button class="btn bts btn-outline-success">6:00 - 7:00 <br />
														Available</button>

												</div>


											</div>
										</div>

										<div class="form-group col-sm-12">
											<button type="button"
												class="btn btn-success btn-block proceed-btn">Book an Appointment</button>
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

)


}




export default AddAppointment;