import React from 'react'

import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";

import './Activity/index.scss'

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
    }

    render () {
        return (
            <Router>
                <div className="white-bg">
                    <ul className="nav">
                        {
                            navBar.map((item, index)=>
                                <li key={index}>
                                    <NavLink exact key={index} to={item.path} activeClassName="active">{item.name}</NavLink>
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