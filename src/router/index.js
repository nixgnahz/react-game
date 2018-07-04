import React from "react"
import {BrowserRouter as Router, Route, NavLink, Redirect} from "react-router-dom"

import './index.scss'

import Info from '../components/Info/index'
import Game from '../components/Game/index'
import GiftBag from '../containers/GiftBag'
import Market from '../components/Market/index'
import Detail from '../components/Detail/index'
import View from '../components/View/index'
import Bind from '../components/Input/Bind'
import Authenticate from '../components/Input/Authenticate'
import Rules from '../components/Rules/index'

const tabBar = [
    {
        name: "游戏",
        path: "/game"
    },
    {
        name: "礼包",
        path: "/giftbag"
    },
    {
        name: "商城",
        path: "/market"
    },
    {
        name: "个人",
        path: "/info"
    }
]

class TabBar extends React.Component {
    render () {
        return (
            <Router>
                <div>
                    <Route exact path='/' render={() =>
                        <Redirect to='/game'/>
                    }/>
                    <Route path='/game' component={Game} />
                    <Route path='/giftbag' component={GiftBag} />
                    <Route path='/info' component={Info} />
                    <Route path='/market' component={Market} />
                    <Route path='/detail/:id' component={Detail} />
                    <Route path='/view' component={View} />
                    <Route path='/bind' component={Bind} />
                    <Route path='/rules' component={Rules} />
                    <Route path='/authenticate' component={Authenticate} />
                    <div className="tabBar-empty"></div>
                    <ul className="tabBar">
                        {
                            tabBar.map((route, index)=>
                                <li key={route.path}>
                                    <NavLink to={route.path} activeClassName='active'>
                                        <div className="icon"></div>
                                        <span>{route.name}</span>
                                    </NavLink>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </Router>
        )
    }
}

export default TabBar