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
    render () {
        const {url} = this.props.match
        return (
            <div className="white-bg">
                <ul className="nav">
                    {
                        navBar.map((item, index)=>
                            <li key={index}>
                                <NavLink to={url + item.path} className="menu" activeClassName="active">{item.name}</NavLink>
                            </li>
                        )
                    }
                </ul>
                <Route exact path={url} render={() =>
                    <Redirect to={url + '/activities'}/>
                }/>
                <Route path={url + '/activities'} component={ActivityComponent} />
                <Route path={url + '/prize'} component={Prize} />
                <Route path={url + '/notice'} component={Notice} />
            </div>
        )
    }
}

export default Activity