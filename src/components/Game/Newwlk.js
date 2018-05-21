import React from 'react'

import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";

import NewService from './Service/New'
import OldService from './Service/Old'

const navBar = [
    {
        name: "已开新服",
        path: ""
    },
    {
        name: "新服预告",
        path: "/newService"
    }
]

const routes = [
    {
        path: "",
        component: OldService
    },
    {
        path: "/newService",
        component: NewService
    }
]

class Newwlk extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            match: props.match.url
        }
    }

    render () {
        return (
            <Router>
                <div>
                    <ul className="menus">
                        {
                            navBar.map((route, index)=>
                                <li key={index}>
                                    <NavLink exact to={this.state.match + route.path} className="menu" activeClassName="active">{route.name}</NavLink>
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

export default Newwlk