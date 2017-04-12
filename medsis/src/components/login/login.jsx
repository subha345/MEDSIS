import React, { Component } from 'react';
import logobig from '../../../img/logobig.png'
import { Link } from 'react-router'
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import {browserHistory} from 'react-router';

const mapStateToProps = state =>
    ({
        loginState:state.loginStateReducer.loginState
    })

const mapDispatchToProps = dispatch =>
    ({
        fetchLoginState(state) {
            dispatch(
                actions.loginStateAction(state)
            )
        },
        userDetail(userDetail) {
            dispatch(
                actions.userLoginRequestAction(userDetail)
            )
        }
    })

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
        this.inputChangeHandler = this.inputChangeHandler.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    inputChangeHandler(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
         this.props.fetchLoginState(true)
         browserHistory.push('/dashboard');
         this.props.fetchLoginState(true)
         console.log(this.state)
        
    }
    render() {
        return (
            <div className="loginformbg">
        <div className="login-form">
            <div className="">
                <center><img src={logobig} alt="img"/></center><br />
            </div>
            <div style={{color:"red",display:"none"}} id="invalid">
                        <p>Please Login...</p>
                    </div>
            <form onSubmit={this.onSubmit}>
                <div className="form-area">
                    <div className="group">
                        <input 
                            ref="username"
                            value={this.state.username}
                            type="text" 
                            className="form-control" 
                            placeholder="Username" name="username" 
                            onChange={this.inputChangeHandler} required/>
                        <i className="fa fa-user"></i>
                    </div>
                    <div className="group">
                           <input 
                            ref="password"
                            value={this.state.password}
                            type="text" 
                            className="form-control" 
                            placeholder="Password" name="password" 
                            onChange={this.inputChangeHandler} required/>
                        <i className="fa fa-key"></i>
                    </div>
                    <div style={{color:"red",display:"none"}} id="invalid">
                        <p>Place valid input credential</p>
                    </div>
                    <div className="checkbox checkbox-primary">
                        <input id="checkbox101" type="checkbox" defaultChecked />
                        <label htmlFor="checkbox101"> Remember Me</label>
                    </div>
                    <a><button type="submit" className="btn btn-default btn-block">LOGIN</button></a>
                </div>
                </form>
            <div className="footer-links row">
                <div className="col-xs-6"><Link to='/forgotpassword'><i className="fa fa-external-link"></i> Forgot Password</Link></div>
                <div className="col-xs-6" style={{float:"right", marginRight:"-40px"}}>
                    <Link to="/register"><span className="glyphicon glyphicon-user" style={{marginRight:"2px"}}>
                        </span>New User Sign Up</Link></div>
            </div>
        </div>
    </div>
        );
    }
}

const LoginForm = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginForm;