import React from 'react';

class ItemText extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render () {
        return (
            <li className="item">
                <img className="icon" src="http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/5/0/b/5aa098b2aef00.png" alt=""/>
                <p>{this.state.value}</p>
                <span className="score">{this.state.text}</span>
            </li>
        )
    }
}

export default ItemText
