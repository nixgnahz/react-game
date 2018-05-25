import React from 'react'

import {Route, NavLink, Redirect} from "react-router-dom"

import NewService from './Service/New'
import OldService from './Service/Old'

const navBar = [
    {
        name: "已开新服",
        path: "/old"
    },
    {
        name: "新服预告",
        path: "/new"
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
            <div>
                <ul className="menus">
                    {
                        navBar.map((route, index)=>
                            <li key={index}>
                                <NavLink to={this.state.match + route.path} className="menu" activeClassName="active">{route.name}</NavLink>
                            </li>
                        )
                    }
                </ul>
                <Route exact path={this.state.match} render={() =>
                    <Redirect to={this.state.match + '/old'}/>
                }/>
                <Route path={this.state.match + '/old'} component={OldService} />
                <Route path={this.state.match + '/new'} component={NewService} />
            </div>
        )
    }
}

export default Newwlk