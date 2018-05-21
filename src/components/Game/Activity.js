import React from 'react'

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import './Activity/index.css'

import ActivityComponent from './Activity/Activity'
import Prize from './Activity/Prize'
import Notice from './Activity/Notice'

const navBar = [
    {
        name: "活动",
        path: "/game/activity"
    },
    {
        name: "有奖",
        path: "/game/activity/prize"
    },
    {
        name: "公告",
        path: "/game/activity/notice"
    }
]

const routes = [
    {
        path: "/game/activity",
        component: ActivityComponent
    },
    {
        path: "/game/activity/prize",
        component: Prize
    },
    {
        path: "/game/activity/notice",
        component: Notice
    }
]

class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
        this.changeNavBar = this.changeNavBar.bind(this);
    }

    changeNavBar (e) {
        var index = e.currentTarget.getAttribute("data-index");
        this.setState({
            currentIndex: index
        })
    }

    render () {
        return (
            <Router>
                <div className="white-bg">
                    <ul className="nav">
                        {
                            navBar.map((route, index)=>
                                <li className={this.state.currentIndex == index ? 'active' : 'inactive'} key={route.path} onClick={this.changeNavBar} data-index={index}>
                                    <Link to={route.path}>{route.name}</Link>
                                </li>
                            )
                        }
                    </ul>
                    {
                        routes.map((route)=>
                            <Route key={route.path} exact path={route.path} component={route.component} />
                        )
                    }
                </div>
            </Router>
        )
    }
}

export default Activity