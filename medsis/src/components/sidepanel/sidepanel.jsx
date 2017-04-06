import React, { Component } from 'react';
import profileimg from '../../../img/profileimg.png'
import profileimg2 from '../../../img/profileimg2.png'
import profileimg3 from '../../../img/profileimg3.png'
import profileimg4 from '../../../img/profileimg4.png'
import profileimg5 from '../../../img/profileimg5.png'
import profileimg6 from '../../../img/profileimg6.png'

class SidePanel extends Component {

    render() {
        return (
            <div role="tabpanel" className="sidepanel" id="sidebar-wrapper">
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#today" aria-controls="today" role="tab" data-toggle="tab">TODAY</a></li>
                    <li role="presentation"><a href="#tasks" aria-controls="tasks" role="tab" data-toggle="tab">TASKS</a></li>
                    <li role="presentation"><a href="#chat" aria-controls="chat" role="tab" data-toggle="tab">CHAT</a></li>
                </ul>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="today">
                        <div className="sidepanel-m-title">
                            Today
					<span className="left-icon"><a href="#"><i className="fa fa-refresh"></i></a></span>
                            <span className="right-icon"><a href="#"><i className="fa fa-file-o"></i></a></span>
                        </div>
                        <div className="gn-title">NEW</div>
                        <ul className="mailbox-inbox">
                            <li>
                                <a href="#" className="item clearfix">
                                    <img src={profileimg} alt="img" className="img" />
                                        <span className="from">Shardul Singh</span> Allergic Issues
							<span className="date">09:30am</span>
                                    <span className="pull-right btn btn-success btn-xs">Check In </span>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="item clearfix">
                                    <img src={profileimg2} alt="img" className="img" />
                                            <span className="from">Laxman Honawad</span> Cough & Cold
							<span className="date">09:45am</span>
                                    <span className="pull-right btn btn-default btn-xs">Check In </span>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="item clearfix">
                                    <img src={profileimg3} alt="img" className="img" />
                                                <span className="from">Amit P</span> General Visit
							<span className="date">10:00am</span>
                                    <span className="pull-right btn btn-default btn-xs">Check In </span>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="item clearfix">
                                    <img src={profileimg4} alt="img" className="img" />
                                                    <span className="from">John Rambo</span> Acidity
							<span className="date">11:15</span>
                                    <span className="pull-right btn btn-default btn-xs">Check In </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="item clearfix">
                                    <img src={profileimg5} alt="img" className="img" />
                                                        <span className="from">Amit P</span> General Visit
							<span className="date">10:00am</span>
                                    <span className="pull-right btn btn-default btn-xs">Check In </span>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="item clearfix">
                                    <img src={profileimg6} alt="img" className="img" />
                                                            <span className="from">John Rambo</span> Acidity
							<span className="date">11:15</span>
                                    <span className="pull-right btn btn-default btn-xs">Check In </span>
                                </a>
                            </li>

                        </ul>

                    </div>
                    <div role="tabpanel" className="tab-pane" id="tasks">

                        <div className="sidepanel-m-title">
                            To-do List
					<span className="left-icon"><a href="#"><i className="fa fa-pencil"></i></a></span>
                            <span className="right-icon"><a href="#"><i className="fa fa-trash"></i></a></span>
                        </div>

                        <div className="gn-title">TODAY</div>

                        <ul className="todo-list">
                            <li className="checkbox checkbox-primary">
                                <input id="checkboxside1" type="checkbox" /><label htmlFor="checkboxside1">Add new nurse staff</label>
                            </li>

                            <li className="checkbox checkbox-danger">
                                <input id="checkboxside5" type="checkbox" /><label htmlFor="checkboxside5"><b>Apr 12, 6:30 pm</b> Meeting with Team</label>
                            </li>

                            <li className="checkbox checkbox-warning">
                                <input id="checkboxside3" type="checkbox" /><label htmlFor="checkboxside3">Design Facebook page</label>
                            </li>

                            <li className="checkbox checkbox-info">
                                <input id="checkboxside4" type="checkbox" /><label htmlFor="checkboxside4">Send Invoice to customers</label>
                            </li>

                        </ul>

                        <div className="gn-title">TOMORROW</div>
                        <ul className="todo-list">
                            <li className="checkbox checkbox-info">
                                <input id="checkboxside8" type="checkbox" /><label htmlFor="checkboxside8">Talk to Dr. Mitish </label>
                            </li>

                        </ul>
                    </div>

                    <div role="tabpanel" className="tab-pane" id="chat">

                        <div className="sidepanel-m-title">
                            Friend List
					<span className="left-icon"><a href="#"><i className="fa fa-pencil"></i></a></span>
                            <span className="right-icon"><a href="#"><i className="fa fa-trash"></i></a></span>
                        </div>

                        <div className="gn-title">ONLINE MEMBERS (3)</div>
                        <ul className="group">
                            <li className="member">
                                <a href="#"><img src={profileimg} alt="img" /><b>Shardul Singh</b>Bangalore</a><span className="status online"></span></li>
                                <li className="member">
                                    <a href="#"><img src={profileimg2} alt="img" /><b>Laxman Honawad</b>New Delhi</a><span className="status busy"></span></li>
                                    <li className="member">
                                        <a href="#"><img src={profileimg3} alt="img" /><b>Amit P</b>Bangalore</a><span className="status away"></span></li>
                                        <li className="member">
                                            <a href="#"><img src={profileimg4} alt="img" /><b>John Rambo</b>Bangalore</a><span className="status online"></span></li>
				</ul>

                                        <div className="gn-title">OFFLINE MEMBERS (8)</div>
                                        <ul className="group">
                                            <li className="member">
                                                <a href="#"><img src={profileimg5} alt="img"/><b>Sunil K</b>Mangalore</a><span className="status offline"></span></li>
                                                <li className="member">
                                                    <a href="#"><img src={profileimg6} alt="img"/><b>Jayant</b>Bangalore</a><span className="status offline"></span></li>
				</ul>

                                                <form className="search">
                                                    <input type="text" className="form-control" placeholder="Search..."/>
				</form>
			</div>
                                                

		</div>

	</div>
                                        )
    }
}

export default SidePanel;