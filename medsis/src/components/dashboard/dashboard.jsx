import React, { Component } from 'react';
import SidePanel from '../sidepanel/sidepanel'
import '../../stylesheet/components/sidepanel.css'
import $ from 'jquery'

class DashBoard extends Component {
	componentDidMount() {
		$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
	}
	
    render() {
        return (
			<div id="wrapper">
            <div className="content">
		<div className="page-header">
			<h1 className="title">Blank Page</h1>
			<ol className="breadcrumb">
				<li><a href="index.html">Dashboard</a></li>
				<li className="active">Blank Page</li>
			</ol>
			<div className="right">
				<div className="btn-group" role="group" aria-label="...">
					<a href="index.html" className="btn btn-light">Dashboard</a>
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
        );
    }
}

export default DashBoard;