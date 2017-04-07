import React from 'react'
import logobig from '../../../img/logobig.png'
import * as actions from '../../actions/actions';
import {connect} from 'react-redux';

const mapStateToProps = state =>
    ({
        registerState:state.registerStateReducer.registerState,
        userList:state.loginReducer.userList
    })

const mapDispatchToProps = dispatch =>
    ({
        fetchRegisterState(state) {
            dispatch(
                actions.registerStateAction(state)
            )
        },
        fetchLogoutState(state) {
            dispatch(
                actions.logoutStateAction(state)
            )
        },
        fetchUserList(state) {
            dispatch(
                actions.userListAction()
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
    
    componentWillMount() {
        this.props.fetchUserList()
    }
    
    handleSingUp(){
        this.props.fetchRegisterState(true)
        console.log(this.props.registerState)
    }
    handleLogin(){
        let username=this.refs.username.value
        let password=this.refs.password.value
         console.log(username)
        console.log(password)
        let userList = this.props.userList;
        for(let i=0;i<userList.length;i++){
            if(userList[i].name===username && userList[i].password===password){
                console.log("username  "+userList[i].name +"   "+"password  "+userList[i].password)
                console.log("inputusername  "+username +"   "+"inputpassword  "+password)
                this.props.fetchLogoutState(false)
            }else{
                let div= document.getElementById('invalid')
                div.style.display="block"
            }
        }
    }
   render(){
    return (
        <div className="loginformbg">
        <div className="login-form">
            <div className="">
                <center><img src={logobig} alt="img"/></center><br />
            </div>
            <form>
                <div className="form-area">
                    <div className="group">
                        <input type="text" className="form-control" placeholder="Username" ref="username" required/>
                        <i className="fa fa-user"></i>
                    </div>
                    <div className="group">
                        <input type="password" className="form-control" placeholder="Password" ref="password" required/>
                        <i className="fa fa-key"></i>
                    </div>
                    <div style={{color:"red",display:"none"}} id="invalid">
                        <p>Place valid input credential</p>
                    </div>
                    <div className="checkbox checkbox-primary">
                        <input id="checkbox101" type="checkbox" defaultChecked />
                        <label htmlFor="checkbox101"> Remember Me</label>
                    </div>
                    <a href="#loginpage"><button type="submit" className="btn btn-default btn-block" onClick={this.handleLogin.bind(this)}>LOGIN</button></a>
                </div>
                </form>
            <div className="footer-links row">
                <div className="col-xs-6"><a href="#"><i className="fa fa-external-link"></i> Forgot Password</a></div>
                <div className="col-xs-6" style={{float:"right", marginRight:"-40px"}} onClick={this.handleSingUp.bind(this)}><a href="#signup"><span className="glyphicon glyphicon-user" style={{marginRight:"2px"}}></span>New User Sign Up</a></div>
            </div>
        </div>
    </div>
    )
   }
}

    
const LoginForm = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginForm;