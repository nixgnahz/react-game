import React from 'react'

import TipMask from './TipMask'

class Head extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            portrait: "https://thirdqq.qlogo.cn/qqapp/101206450/2877A2C1A3F610729947BB2614DF331D/40",
            username: "xin",
            score: 10,
            signStatus: 0,
            showSign: false
        }
    }

    changeShowSign () {

    }

    render () {
        var signComponent = <p className="sign-box sign-ing" onClick={this.changeShowSign}>签到<span className="sign-tip"></span></p>;
        var showComponent = null;
        if(this.state.signStatus) {
            signComponent = <p className="sign-box sign-over">已签到</p>;
        }
        if(this.state.showSign) {
            showComponent = <TipMask value={{tip: "签到需要登录后才能继续", cancel: "关闭", sure: "现在就去"}} onChange={this.changeShowSign}/>
        }
        return (
            <div className="info-head">
                {showComponent}
                <img className="img" src={this.state.portrait} alt=""/>
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