import React from 'react'

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

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
                <div>
                    <ul className="menus">
                        {
                            navBar.map((route, index)=>
                                <li className={this.state.currentIndex == index ? 'menu active' : 'menu'} key={route.path} onClick={this.changeNavBar} data-index={index}>
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

export default Newwlk