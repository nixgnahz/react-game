import React from 'react'

import {Route, NavLink, Redirect} from "react-router-dom"

import './Activity/index.scss'

import ActivityComponent from './Activity/Activity'
import Prize from './Activity/Prize'
import Notice from './Activity/Notice'

const navBar = [
    {
        name: "活动",
        path: "/activities"
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

class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            match: props.match.url
        }
    }

    render () {
        return (
            <div className="white-bg">
                <ul className="nav">
                    {
                        navBar.map((item, index)=>
                            <li key={index}>
                                <NavLink to={this.state.match + item.path} className="menu" activeClassName="active">{item.name}</NavLink>
                            </li>
                        )
                    }
                </ul>
                <Route exact path={this.state.match} render={() =>
                    <Redirect to={this.state.match + '/activities'}/>
                }/>
                <Route path={this.state.match + '/activities'} component={ActivityComponent} />
                <Route path={this.state.match + '/prize'} component={Prize} />
                <Route path={this.state.match + '/notice'} component={Notice} />
            </div>
        )
    }
}

export default Activity