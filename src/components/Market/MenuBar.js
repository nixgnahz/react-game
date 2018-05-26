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
    constructor(props) {
        super(props);
        this.state = {
            match: props.value
        }
    }

    render () {
        return (
            <div>
                <ul className="menu-bar">
                    {
                        menus.map((route, index)=>
                            <li key={route.path}>
                                <NavLink to={this.state.match + route.path} activeClassName="active">{route.name}</NavLink>
                            </li>
                        )
                    }
                </ul>
                <Route exact path={this.state.match} render={() =>
                    <Redirect to={this.state.match + '/pointmall'}/>
                }/>
                <Route exact path={this.state.match + '/pointmall'} component={Mall}/>
                <Route path={this.state.match + '/pointtask'} component={Task}/>
                <Route path={this.state.match + '/pointrecord'} component={Record}/>
                <Route path={this.state.match + '/pointrule'} component={Rule}/>
            </div>
        )
    }
}

export default MenuBar