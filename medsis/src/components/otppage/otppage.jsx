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
            <form onSubmit={this.onSubmit} style={{marginTop:"65px"}}>
                <div className="form-area">
                    <div className="group">
                        <input 
                            value={this.state.username}
                            type="text" 
                            className="form-control" 
                            placeholder="otp" name="otp" 
                            onChange={this.handleChange} required/>
                    </div>
                    <a><button type="submit" className="btn btn-default btn-block">SUBMIT</button></a>
                </div>
                </form>
            </div>
        </div>

        );
    }
}

export default OtpPage;