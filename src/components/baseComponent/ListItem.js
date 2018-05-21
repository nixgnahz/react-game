import React from 'react'

import './index.scss'

import Label from './Label'

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: props.value,
            btn: props.btn
        }
    }

    render () {
        if(this.state.detail.labels) {
            var LabelComponent = this.state.detail.labels.map((item, index)=><Label key={index} value={item}/>)
        } else{
            var LabelComponent = null;
        }
        return(
            <li className="list-item">
                <img src={this.state.detail.cover} alt="暂时无法加载"/>
                <div className="flex-column">
                    <p className="name">
                        {this.state.detail.name}
                        {LabelComponent}
                    </p>
                    <p className="desc">{this.state.detail.desc}</p>
                </div>
                <p className="start-btn">{this.state.btn}</p>
            </li>
        )
    }
}

ListItem.defaultProps = {
    btn: "开始"
}

export default ListItem