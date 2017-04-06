import React from 'react';

const AccountSetup = () => {
    return (
        <fieldset>
            <h2 className="fs-title"> Account Details </h2>
            <h3 className="fs-subtitle">Set Your Profile</h3>

            <div className="form-group">
                <label className="col-sm-4 control-label form-label text-right" htmlFor="firstname">First Name</label>
                <div className="col-sm-7 offset-col-1">
                    <input type="text" id="firstname" className="form-control" />
                  </div>
            </div>
            <div className="form-group">
                <label className="col-sm-4 control-label form-label text-right" htmlFor="lastname">Last Name</label>
                <div className="col-sm-7 offset-col-1">
                    <input type="text" id="lastname" className="form-control" />
                  </div>
            </div>
            <div className="form-group">
                <label className="col-sm-4 control-label form-label text-right" htmlFor="dateofbirth">Date Of Birth</label>
                <div className="col-sm-7 offset-col-1">
                    <input type="text" id="dateofbirth" placeholder="DD/MM/YYYY" className="form-control" />
                  </div>
            </div>
            <div className="form-group">
                <label className="col-sm-4 control-label form-label text-right" >Gender</label>
                <div className="col-sm-7 offset-col-1 floatlinner margin-b-5">
                    <input type="checkbox" defaultChecked data-toggle="toggle" data-on="Male" data-off="Female" className="margin-b-5" />
                </div>
            </div>

            <div className="form-group ">
                <label className="col-sm-4 control-label form-label text-right" htmlFor="bloodgroup">Blood Group</label>
                <div className="col-sm-7 offset-col-1 margin-t-5">
                    <select name="txtBloodGroup_input" id="txtBloodGroup_input" className="pull-left col-xs-6">
                        <option value="1">A+</option>
                        <option value="2">A-</option>
                        <option value="3">B+</option>
                        <option value="4">B-</option>
                        <option value="5">AB+</option>
                        <option value="6">AB-</option>
                        <option value="7">O+</option>
                        <option value="8">O-</option>
                        <option value="9">N/A</option>
                    </select>
                </div>
            </div>

            <div className="" style={{float:"left",width:"100%"}}>
                <hr style={{margin:"15px 0 10px 0"}} />
            </div>
            <input type="button" name="next1" className="next action-button" value="Next" />

        </fieldset>);
};

export default AccountSetup;