import React from "react";
import {BrowserRouter as Router, Route, NavLink, Redirect} from "react-router-dom";

import './index.scss'

import Info from '../components/Info/index'
import Game from '../components/Game/index'
import GiftBag from '../components/GiftBag/index'
import Detail from '../components/Detail/index'
import View from '../components/View/index'
import Bind from '../components/Bind/index'

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
        name: "个人",
        path: "/info"
    }
]

class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

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
                    <Route path='/detail/:id' component={Detail} />
                    <Route path='/view' component={View} />
                    <Route path='/bind' component={Bind} />
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

export default TabBar;