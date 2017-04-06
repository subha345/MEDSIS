import React from 'react';

const PersonalDetail = () => {
    return (
        <fieldset>
			<h2 className="fs-title">Emergency Contact</h2>
			<h3 className="fs-subtitle">We will never sell </h3>
			<div className="form-group">
			  <label className="col-sm-4 control-label form-label text-right" htmlFor="addline1">Address Line 1</label>
			  <div className="col-sm-7 offset-col-1">
				<input type="text" id="addline1" className="form-control" />
			  </div>
			</div>
			<div className="form-group">
			  <label className="col-sm-4 control-label form-label text-right" htmlFor="addline2">Address Line 2</label>
			  <div className="col-sm-7 offset-col-1">
				<textarea name="addline2"></textarea>
			  </div>
			</div>
			<div className="form-group">
			  <label className="col-sm-4 control-label form-label text-right" htmlFor="city">City</label>
			  <div className="col-sm-7 offset-col-1">
				<input type="text" id="city" className="form-control"/>
			  </div>
			</div>
			<div className="form-group">
			  <label className="col-sm-4 control-label form-label text-right" htmlFor="state">State</label>
			  <div className="col-sm-7 offset-col-1">
				<input type="text" id="state" className="form-control"/>
			  </div>
			</div>	
			<div className="form-group">
			  <label className="col-sm-4 control-label form-label text-right" htmlFor="pinnumber">PIN</label>
			  <div className="col-sm-7 offset-col-1">
				<input type="text" id="pinnumber" className="form-control" />
			  </div>
			</div>			
			<div className="" style={{float:"left",width:"100%"}}>
				<hr style={{margin:"15px 0 10px 0"}}/>
			</div>				
			<input type="button" name="previous" className="previous action-button" value="Previous" />
			<a className="btn action-button" style={{marginTop:"5px"}}> Submit </a>
		</fieldset>
    );
};

export default PersonalDetail;