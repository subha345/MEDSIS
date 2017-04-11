import React, { Component } from 'react';
import logobig from '../../../img/logobig.png'

class ForgotPassword extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            mobile:''
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
                            placeholder="Username" name="username" 
                            onChange={this.handleChange} required/>
                        <i className="fa fa-user"></i>
                    </div>
                    <div className="group">
                           <input 
                            value={this.state.mobile}
                            type="text" 
                            className="form-control" 
                            placeholder="mobile" name="mobile" 
                            onChange={this.handleChange} required/>
                        <i className="fa fa-key"></i>
                    </div>
                    <a><button type="submit" className="btn btn-default btn-block">SUBMIT</button></a>
                </div>
                </form>
            </div>
        </div>

        );
    }
}

export default ForgotPassword;