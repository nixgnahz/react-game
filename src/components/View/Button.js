import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {};
    }

    render () {
        return (
            <div className="view-bottom">
                <p>返回列表</p>
                <p>进入游戏</p>
            </div>
        )
    }
}

export default Button