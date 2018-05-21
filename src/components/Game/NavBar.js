import React from 'react'

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Hot from './Hot'
import Activity from './Activity'
import NewGround from './NewGround'
import Newwlk from './Newwlk'

const navBar = [
    {
        name: "热门",
        path: ""
    },
    {
        name: "新上架",
        path: "/ground"
    },
    {
        name: "活动",
        path: "/activity"
    },
    {
        name: "新开服",
        path: "/wlk"
    }
]

const routes = [
    {
        path: "",
        component: Hot
    },
    {
        path: "/ground",
        component: NewGround
    },
    {
        path: "/activity",
        component: Activity
    },
    {
        path: "/wlk",
        component: Newwlk
    }
]


class NavBar extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            currentIndex: 0,
            match: props.value
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
                <div className="container">
                    <ul className="navBar">
                        {
                            navBar.map((route, index)=>
                                <li className={this.state.currentIndex == index ? 'active' : ''} key={route.path} onClick={this.changeNavBar} data-index={index}>
                                    <Link to={this.state.match + route.path}>{route.name}</Link>
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

export default NavBar