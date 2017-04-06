import React from 'react'
import logobig from '../../../img/logobig.png'
import * as actions from '../../actions/actions';
import {connect} from 'react-redux';

const mapStateToProps = state =>
    ({
        registerState:state.registerStateReducer.registerState
    })

const mapDispatchToProps = dispatch =>
    ({
        fetchRegisterState(state) {
            dispatch(
                actions.registerStateAction(state)
            )
        }
    })

class Login extends React.Component{
    constructor(props){
		super(props);
		this.state={
			render:false
		}
	}
    handleClick(){
        this.props.fetchRegisterState(true)
        console.log(this.props.registerState)
    }
   render(){
    return (
        <div className="loginformbg">
        <div className="login-form">
            <div className="">
                <center><img src={logobig} alt="img"/></center><br />
            </div>
           
                <div className="form-area">
                    <div className="group">
                        <input type="text" className="form-control" placeholder="Username" />
                        <i className="fa fa-user"></i>
                    </div>
                    <div className="group">
                        <input type="password" className="form-control" placeholder="Password" />
                        <i className="fa fa-key"></i>
                    </div>
                    <div className="checkbox checkbox-primary">
                        <input id="checkbox101" type="checkbox" defaultChecked />
                        <label htmlFor="checkbox101"> Remember Me</label>
                    </div>
                    <button type="submit" className="btn btn-default btn-block" onClick={this.handleClick.bind(this)}>LOGIN</button>
                </div>
            <div className="footer-links row">
                <div className="col-xs-6"><a href="#"><i className="fa fa-external-link"></i> Forgot Password</a></div>
            </div>
        </div>
    </div>
    )
   }
}

    
const LoginForm = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginForm;