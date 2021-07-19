import React from "react";



const AddNewJournal = () =>{
return(

<div>

<section className="credit-card">
		<div className="container">
<h2 > Add New Journal</h2>

			<div className="card-holder">
				<div className="card-box bg-news">
					<div className="row">
						<div className="col-lg-5">
							
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

)


}




export default AddNewJournal;