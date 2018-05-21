import React from 'react'

import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";

import NewService from './Service/New'
import OldService from './Service/Old'

const navBar = [
    {
        name: "已开新服",
        path: "/game/wlk"
    },
    {
        name: "新服预告",
        path: "/game/wlk/newService"
    }
]

const routes = [
    {
        path: "/game/wlk",
        component: OldService
    },
    {
        path: "/game/wlk/newService",
        component: NewService
    }
]

class Newwlk extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Router>
                <div>
                    <ul className="menus">
                        {
                            navBar.map((route, index)=>
                                <li key={index}>
                                    <NavLink exact to={route.path} className="menu" activeClassName="active">{route.name}</NavLink>
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

export default Newwlk