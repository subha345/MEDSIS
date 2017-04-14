import React from 'react';

const PersonalInfo = () => {
    return (
        <fieldset>
			<h2 className="fs-title">Personal Info</h2>
		    <h3 className="fs-subtitle">History</h3> 
			<div className="form-group">
			  <label className="col-sm-4 control-label form-label text-right" htmlFor="illness">Major illness treatment</label>
			  <div className="col-sm-7 offset-col-1">
				<input type="text" id="illness" className="form-control" />
			  </div>
			</div>
			<div className="form-group">
			  <label className="col-sm-4 control-label form-label text-right" htmlFor="heartdisease">Heart Disease</label>
			  <div className="col-sm-7 offset-col-1">
				<input type="text" id="heartdisease" className="form-control" />
			  </div>
			</div>
			<div className="form-group">
			  <label className="col-sm-4 control-label form-label text-right" htmlFor="highbp">High Blood Pressure</label>
			  <div className="col-sm-7 offset-col-1">
				<input type="text" id="highbp" className="form-control" />
			  </div>
			</div>
			<div className="form-group">
			  <label className="col-sm-4 control-label form-label text-right" htmlFor="pdiabates">Personal diabetes</label>
			  <div className="col-sm-7 offset-col-1 floatlinner margin-b-5">
					<label>Yes</label>
					<input type="radio" name="pdiabetes" defaultChecked className="margin-b-5 padding-r-5" style={{minWidth:"40px",width:"35%"}} />
					<label>No</label>
					<input type="radio" name="pdiabetes" className="margin-b-5 padding-r-5" style={{minWidth:"40px",width:"35%"}} />
			  </div>
			</div>
			<div className="form-group">
			  <label className="col-sm-4 control-label form-label text-right" htmlFor="diabetsfamily">Diabetes in Family</label>
			  <div className="col-sm-7 offset-col-1 floatlinner margin-b-5">
				<label>Yes</label>
					<input type="radio" name="fdiabetes" defaultChecked className="margin-b-5 padding-r-5" style={{minWidth:"40px",width:"35%"}} />
					<label>No</label>
					<input type="radio" name="fdiabetes" className="margin-b-5 padding-r-5" style={{minWidth:"40px",width:"35%"}} />
			  </div>
			</div>
			<div className="" style={{float:"left",width:"100%"}}>
				<hr style={{margin:"15px 0 10px 0"}}/>
			</div>	
			<input type="button" name="previous" className="previous action-button" value="Previous" />
			<input type="button" name="next" className="next action-button" value="Next" />
		</fieldset>
    );
};

export default PersonalInfo;