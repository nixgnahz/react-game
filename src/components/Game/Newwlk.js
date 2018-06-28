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
    render () {
        const {url} = this.props.match
        return (
            <div>
                <ul className="menus">
                    {
                        navBar.map((route, index)=>
                            <li key={index}>
                                <NavLink to={url + route.path} className="menu" activeClassName="active">{route.name}</NavLink>
                            </li>
                        )
                    }
                </ul>
                <Route exact path={url} render={() =>
                    <Redirect to={url + '/old'}/>
                }/>
                <Route path={url + '/old'} component={OldService} />
                <Route path={url + '/new'} component={NewService} />
            </div>
        )
    }
}

export default Newwlk