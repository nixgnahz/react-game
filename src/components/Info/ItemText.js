import React from 'react'

class ItemText extends React.Component {
    render () {
        const {value, text} = this.props
        return (
            <li className="item">
                <img className="icon" src="http://wx.11babay.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/5/0/b/5aa098b2aef00.png" alt=""/>
                <p>{value}</p>
                <span className="score">{text}</span>
            </li>
        )
    }
}

export default ItemText
