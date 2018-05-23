import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render () {
        return (
            <li className="item">
                <img className="icon" src="http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/5/0/b/5aa098b2aef00.png" alt=""/>
                <p>{this.state.value}</p>
                <img className="enter-icon" src="http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/7/4/2/5/5a619b23048ae.png_p2js" alt=""/>
            </li>
        )
    }
}

export default Item
