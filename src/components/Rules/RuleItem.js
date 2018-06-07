import React from 'react'
import {Link} from "react-router-dom"

import './index.scss'

const items = [
    {
        id: 1,
        text: "用户指引",
        path: "guide"
    },
    {
        id: 2,
        text: "用户协议",
        path: "agreement"
    },
    {
        id: 3,
        text: "纠纷处理方式",
        path: "dispute"
    }
]

class RuleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            match: props.match.url
        }
    }

    render () {
        return (
            <section>
                {items.map((item)=>
                    <div className="rules-item" key={item.id}>
                        <img src="http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/6/3/7/5b0690e1eca66.png" className="icon" alt=""/>
                        <p>{item.text}</p>
                        <Link to={this.state.match + '/' + item.path}>
                            <img src="http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/7/4/2/5/5a619b23048ae.png" className="enter" alt=""/>
                        </Link>
                    </div>
                )}
            </section>
        )
    }
}

export default RuleItem