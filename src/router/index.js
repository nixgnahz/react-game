import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import './index.scss'

import Info from '../components/Info/index'
import Game from '../components/Game/index'
import GiftBag from '../components/GiftBag/index'

const tabBar = [
    {
        name: "游戏",
        icon: "http://wx.wpart.cn/uploads/A/AdqA4tKfayQrboHu9Ava/0/b/f/c/5afc0282a97c8.png_p2js",
        activeIcon: "http://wx.wpart.cn/uploads/A/AdqA4tKfayQrboHu9Ava/1/d/4/e/5afc025dbfbc0.png_p2js",
        path: "/game"
    },
    {
        name: "礼包",
        icon: "http://wx.wpart.cn/uploads/A/AdqA4tKfayQrboHu9Ava/8/2/4/c/5afc02896fd97.png_p2js",
        activeIcon: "http://wx.wpart.cn/uploads/A/AdqA4tKfayQrboHu9Ava/5/4/b/0/5afc026bcfe60.png_p2js",
        path: "/giftbag"
    },
    {
        name: "个人",
        icon: "http://wx.wpart.cn/uploads/A/AdqA4tKfayQrboHu9Ava/c/1/b/c/5afc02910ccf6.png_p2js",
        activeIcon: "http://wx.wpart.cn/uploads/A/AdqA4tKfayQrboHu9Ava/2/d/f/7/5afc027a2dd7e.png_p2js",
        path: "/info"
    }
]

const routes = [
    {
        path: "/",
        component: Game
    },
    {
        path: "/game",
        component: Game
    },
    {
        path: "/info",
        component: Info
    },
    {
        path: "/giftbag",
        component: GiftBag
    }
]

class TabBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
        this.changeTabBar = this.changeTabBar.bind(this);
    }

    changeTabBar (e) {
        var index = e.currentTarget.getAttribute("data-index");
        this.setState({
            currentIndex: index
        })
    }

    render () {
        return (
            <Router>
                <div>
                    {
                        routes.map((route)=>
                            <Route key={route.path} exact path={route.path} component={route.component} />
                        )
                    }
                    <div className="tabBar-empty"></div>
                    <ul className="tabBar">
                        {
                            tabBar.map((route, index)=>
                                <li key={route.path} onClick={this.changeTabBar} data-index={index}>
                                    <Link to={route.path} className={this.state.currentIndex == index ? 'active': ''}>
                                        <img src={this.state.currentIndex == index ? route.activeIcon : route.icon} className="icon" alt="暂时无法加载"/>
                                        <span>{route.name}</span>
                                    </Link>
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