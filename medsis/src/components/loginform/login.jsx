import React from 'react'
import logobig from '../../../img/logobig.png'

const LoginForm = () =>
    <div className="loginformbg">
        <div className="login-form">
            <div className="">
                <center><img src={logobig} alt="img"/></center><br />
            </div>
            <form action="index.html">
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
                        <input id="checkbox101" type="checkbox" checked />
                        <label htmlFor="checkbox101"> Remember Me</label>
                    </div>
                    <button type="submit" className="btn btn-default btn-block">LOGIN</button>
                </div>
            </form>
            <div className="footer-links row">
                <div className="col-xs-6"><a href="#"><i className="fa fa-external-link"></i> Forgot Password</a></div>
            </div>
        </div>
    </div>

export default LoginForm;