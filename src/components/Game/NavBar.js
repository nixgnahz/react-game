import React from 'react'

import {BrowserRouter as Router, Route, Redirect, NavLink} from "react-router-dom";

import Hot from './Hot'
import Activity from './Activity'
import NewGround from './NewGround'
import Newwlk from './Newwlk'

const navBar = [
    {
        name: "热门",
        path: "/hot"
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

class NavBar extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            match: props.value
        }
    }

    render () {
        return (
            <Router>
                <div className="container">
                    <ul className="navBar">
                        {
                            navBar.map((route, index)=>
                                <li key={route.path}>
                                    <NavLink to={this.state.match + route.path} activeClassName="active">{route.name}</NavLink>
                                </li>
                            )
                        }
                    </ul>
                    <Route exact path={this.state.match} render={() =>
                        <Redirect to={this.state.match + '/hot'}/>
                    }/>
                    <Route path={this.state.match + '/hot'} component={Hot} />
                    <Route path={this.state.match + '/ground'} component={NewGround} />
                    <Route path={this.state.match + '/activity'} component={Activity} />
                    <Route path={this.state.match + '/wlk'} component={Newwlk} />
                </div>
            </Router>
        )
    }
}

export default NavBar