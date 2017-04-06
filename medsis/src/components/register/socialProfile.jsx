import React from 'react';

const SocialProfile = () => {
	return (
		<fieldset>
			<h2 className="fs-title">Social Profiles</h2>
			<h3 className="fs-subtitle">Your Fitness</h3>
			<div className="form-group">
				<label className="col-sm-4 control-label form-label text-right" htmlFor="yourheight">Your Height</label>
				<div className="col-sm-7 offset-col-1">
					<input type="text" id="yourheight" className="form-control" />
				</div>
			</div>
			<div className="form-group">
				<label className="col-sm-4 control-label form-label text-right" htmlFor="yourweight">Your Weight</label>
				<div className="col-sm-7 offset-col-1">
					<input type="text" id="yourweight" className="form-control" />
				</div>
			</div>
			<div className="form-group">
				<label className="col-sm-4 control-label form-label text-right" htmlFor="waistsize">Your Waist Size</label>
				<div className="col-sm-7 offset-col-1">
					<input type="text" id="waistsize" className="form-control" />
			  </div>
			</div>
			<div className="form-group">
				<label className="col-sm-4 control-label form-label text-right" >Smoke?</label>
				<div className="col-sm-7 offset-col-1 floatlinner margin-b-5">
					<input type="checkbox" defaultChecked data-toggle="toggle" data-on="Yes " data-off="No" className="margin-b-5 padding-r-5" style={{minWidth:"40px"}} />
				</div>
			</div>
			<div className="" style={{float:"left",width:"100%"}}>
				<hr style={{margin:"15px 0 10px 0"}} />
			</div>
			<input type="button" name="previous" className="previous action-button" value="Previous" />
			<input type="button" name="next" className="next action-button" value="Next" />
		</fieldset>

	);
};

export default SocialProfile;