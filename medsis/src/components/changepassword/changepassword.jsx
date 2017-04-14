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
        const { confirmPassword, newPassword } = this.state
        if(confirmPassword===newPassword){
            document.getElementById('matched').style.display="block"
            browserHistory.push('/dashboard')
            this.props.fetchLoginState(true)
            console.log(this.state.newPassword)
        }else{
            document.getElementById('notmatched').style.display="block"
        }
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
                            ref="password"
                            value={this.state.newPassword}
                            type="text" 
                            className="form-control" 
                            placeholder="New Password" name="newPassword" 
                            onChange={this.handleChange} required/>
                    </div>
                    <div className="group">
                        <input 
                            ref="confirmPassword"
                            value={this.state.confirmPassword}
                            type="text" 
                            className="form-control" 
                            placeholder="Confirm Password" name="confirmPassword" 
                            onChange={this.handleChange} required/>
                    </div>
                    <div id="notmatched" style={{color:"red",display:"none"}}>
                        Password didn't match
                    </div>
                    <div id="matched" style={{color:"green",display:"none"}}>
                        Password matched
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

const ChangePasswd = connect(mapStateToProps , mapDispatchToProps)(ChangePassword);
export default ChangePasswd;