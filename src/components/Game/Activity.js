import React from 'react'

import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";

import './Activity/index.scss'

import ActivityComponent from './Activity/Activity'
import Prize from './Activity/Prize'
import Notice from './Activity/Notice'

const navBar = [
    {
        name: "活动",
        path: ""
    },
    {
        name: "有奖",
        path: "/prize"
    },
    {
        name: "公告",
        path: "/notice"
    }
]

const routes = [
    {
        path: "",
        component: ActivityComponent
    },
    {
        path: "/prize",
        component: Prize
    },
    {
        path: "/notice",
        component: Notice
    }
]

class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            match: props.match.url
        }
    }

    render () {
        return (
            <Router>
                <div className="white-bg">
                    <ul className="nav">
                        {
                            navBar.map((item, index)=>
                                <li key={index}>
                                    <NavLink exact key={index} to={this.state.match + item.path} activeClassName="active">{item.name}</NavLink>
                                </li>
                            )
                        }
                    </ul>
                    {
                        routes.map((route)=>
                            <Route key={route.path} exact path={this.state.match + route.path} component={route.component} />
                        )
                    }
                </div>
            </Router>
        )
    }
}

export default Activity