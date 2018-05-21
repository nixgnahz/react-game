import React from 'react';

class Head extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portrait: "https://thirdqq.qlogo.cn/qqapp/101206450/2877A2C1A3F610729947BB2614DF331D/40",
            username: "xin",
            userId: "438937660"
        }
    }

    render () {
        return (
            <div className="info-head">
                <img className="img" src={this.state.portrait} alt="暂时无法加载"/>
                <div className="flex-bottom">
                    <p className="name">{this.state.username}</p>
                    <p className="uid">UID : {this.state.userId}</p>
                </div>
            </div>
        )
    }
}

export default Head