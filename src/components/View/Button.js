import React from 'react'
import {Link} from "react-router-dom"

class Button extends React.Component {
    render () {
        return (
            <div className="view-bottom">
                <p>
                    <Link to='/game'>返回列表</Link>
                </p>
                <p>进入游戏</p>
            </div>
        )
    }
}

export default Button