import React from 'react'

import './index.scss'

class RuleInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="rule-detail">
                <p className="title">网络游戏用户指引和警示说明</p>
                <div className="desc">
                    <p>爱微游游戏（以下称“爱微游”）在此特别提醒用户注意：</p>
                    <p>本网络游戏仅适合于年满18周岁以上的用户。如果您未满18周岁，不建议您注册并使用本网络游戏服务；如果您坚持使用，请您务必加入本网络游戏防沉迷系统进行实名注册，同时我们将会按照您法定监护人的需求提供您在本网络游戏中的信息。</p>
                    <p>您在使用本网络游戏服务之前已经明确知晓网络游戏可能给您带来的一切潜在威胁，包括长时间游戏可能不利于您的身心健康等。为了您的健康请您合理的使用本网络游戏。</p>
                    <p>本《用户服务协议》协议（以下简称“本协议”）是由您（以下称为“用户”）与上海游光网络科技有限公司（以下称为“游光游戏”）就游光游戏在其和／或其关联公司的移动游戏平台上所提供的产品和服务（包括但不限于及游光游戏其关联公司运营的公众号、智能终端APP、网站等现在正在提供和将来可能向用户提供的游戏服务和其他网络服务，以下统称为“产品和服务”）所订立的协议。</p>
                </div>
            </div>
        )
    }
}

export default RuleInfo