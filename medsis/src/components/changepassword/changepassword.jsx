import React, { Component } from 'react';
import logobig from '../../../img/logobig.png'
import {browserHistory} from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

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
        }
    })



class ChangePassword extends Component {
    constructor(props){
        super(props);
        this.state={
            newPassword:"",
            confirmPassword:""
        }
        this.handleChange=this.handleChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.state)
        this.props.fetchLoginState(true)
        browserHistory.push('/dashboard')
        // this.props.fetchLoginState(true)
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
                            value={this.state.newPassword}
                            type="text" 
                            className="form-control" 
                            placeholder="New Password" name="newPassword" 
                            onChange={this.handleChange} required/>
                    </div>
                    <div className="group">
                        <input 
                            value={this.state.confirmPassword}
                            type="text" 
                            className="form-control" 
                            placeholder="Confirm Password" name="confirmPassword" 
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

const ChangePasswd = connect(mapStateToProps , mapDispatchToProps)(ChangePassword);
export default ChangePasswd;