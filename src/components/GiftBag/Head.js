import React from 'react';

import TipMask from '../baseComponent/TipMask'

class Head extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portrait: "https://thirdqq.qlogo.cn/qqapp/101206450/2877A2C1A3F610729947BB2614DF331D/40",
            username: "xin",
            score: 10,
            signStatus: 0,
            showSign: 0
        }
        this.showSign = this.showSign.bind(this);
    }

    showSign () {
        this.setState((prevState) => ({
            showSign: !prevState.showSign
        }))
    }

    render () {
        if(this.state.signStatus) {
            var signComponent = <p className="sign-box sign-over">已签到</p>;
        } else{
            var signComponent = <p className="sign-box sign-ing" onClick={this.showSign}>签到<span className="sign-tip"></span></p>;
        }
        if(this.state.showSign) {
            var showComponent = <TipMask value={{tip: "签到需要登录后才能继续", cancel: "关闭", sure: "现在就去"}}/>
        } else{
            var showComponent = null;
        }
        return (
            <div className="info-head">
                {showComponent}
                <img className="img" src={this.state.portrait} alt="头像"/>
                <div className="flex-bottom">
                    <p className="name">{this.state.username}</p>
                    <p className="uid">{this.state.score}</p>
                </div>
                <div className="sign-position">{signComponent}</div>
            </div>
        )
    }
}

export default Head