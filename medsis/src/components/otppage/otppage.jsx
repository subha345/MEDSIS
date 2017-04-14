import React, { Component } from 'react';
import logobig from '../../../img/logobig.png'
import {browserHistory} from 'react-router';

class OtpPage extends Component {
    constructor(props){
        super(props);
        this.state={
            otp:""
        }
        this.handleChange=this.handleChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmit(){
        console.log(this.state)
        browserHistory.push('/changepassword');
    }
    render() {
        return (
            <div className="loginformbg">
        <div className="login-form">
            <div className="">
                <center><img src={logobig} alt="img"/></center><br />
            </div>
            <form onSubmit={this.onSubmit} data-toggle="validator" role="form">
                <div className="form-area">
                    <div className="form-group">
                        <input 
                            value={this.state.username}
                            type="text" 
                            className="form-control" 
                            placeholder="otp" name="otp" 
                            onChange={this.handleChange} required/>
                            <i className="fa fa-key"></i>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">SUBMIT</button>
                    </div>
                </div>
                </form>
            </div>
        </div>

        );
    }
}

export default OtpPage;