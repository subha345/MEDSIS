import React, { Component } from 'react';
import SidePanel from '../sidepanel/sidepanel'
import '../../stylesheet/components/sidepanel.css'
import $ from 'jquery'
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { Link, browserHistory } from 'react-router'
import Login from '../login/login'

const mapStateToProps = state =>
    ({
        loginState:state.loginStateReducer.loginState,
		responseJson:state.loginResponseReducer.responseJson
    })

class DashBoard extends Component {
	 componentDidUpdate() {
		$("#menu-toggle").click(function(e) {
        	e.preventDefault();
        	$("#wrapper").toggleClass("toggled");
    	});
	}
	componentDidMount() {
		if(!this.props.loginState){
			let div= document.getElementById('invalid')
    		div.style.display="block"
		}else{
			$("#menu-toggle").click(function(e) {
        	e.preventDefault();
        	$("#wrapper").toggleClass("toggled");
    	});
		}
		
	}
	
    render() {
		const { responseJson,loginState } = this.props
        return (
			(responseJson==="$200" && loginState) ? (
			<div id="wrapper">
            <div className="content">
		<div className="page-header">
			<h1 className="title">Blank Page</h1>
			<ol className="breadcrumb" >
				<li><a href="#" style={{color:"blue"}}>Dashboard</a></li>
				<li className="active">Blank Page</li>
			</ol>
			<div className="right">
				<div className="btn-group" role="group" aria-label="..." >
					<a href="#" className="btn btn-light">Dashboard</a>
					<a href="#" className="btn btn-light"><i className="fa fa-refresh"></i></a>
					<a href="#" className="btn btn-light"><i className="fa fa-search"></i></a>
					<a href="#" className="btn btn-light" id="topstats"><i className="fa fa-line-chart"></i></a>
				</div>
			</div>

		</div>
		<div className="container-default">


			<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
			<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />



		</div>
		<div className="row footer">
			<div className="col-md-6 text-left">
				Copyright © 2015 <a target="_blank" href="#">Health5C Wellness Solutions P. Ltd.</a> All rights reserved.
			</div>
			<div className="col-md-6 text-right">

			</div>
		</div>

		<SidePanel/>
	</div>
	</div>
			) : (
				<div>
					<Login />
				</div>
			)
        );
    }
}

const DashBoardContent = connect(mapStateToProps)(DashBoard);
export default DashBoardContent;