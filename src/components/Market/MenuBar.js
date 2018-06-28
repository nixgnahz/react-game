import React from 'react'

import {Route, NavLink, Redirect} from "react-router-dom"

import Mall from './Mall'
import Task from './Task'
import Record from './Record'
import Rule from './Rule'

const menus = [
    {
        id: 1,
        name: "积分商城",
        path: "/pointmall"
    },
    {
        id: 2,
        name: "积分任务",
        path: "/pointtask"
    },
    {
        id: 3,
        name: "积分记录",
        path: "/pointrecord"
    },
    {
        id: 4,
        name: "积分规则",
        path: "/pointrule"
    }
]

class MenuBar extends React.Component {
    render () {
        const match = this.props.value
        return (
            <div>
                <ul className="menu-bar">
                    {
                        menus.map((route, index)=>
                            <li key={route.path}>
                                <NavLink to={match + route.path} activeClassName="active">{route.name}</NavLink>
                            </li>
                        )
                    }
                </ul>
                <Route exact path={match} render={() =>
                    <Redirect to={match + '/pointmall'}/>
                }/>
                <Route exact path={match + '/pointmall'} component={Mall}/>
                <Route path={match + '/pointtask'} component={Task}/>
                <Route path={match + '/pointrecord'} component={Record}/>
                <Route path={match + '/pointrule'} component={Rule}/>
            </div>
        )
    }
}

export default MenuBar