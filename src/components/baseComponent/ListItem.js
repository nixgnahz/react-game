import React from 'react'

import './index.scss'

import {Link} from "react-router-dom"

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
        var LabelComponent = null;
        if(this.state.detail.labels) {
            LabelComponent = this.state.detail.labels.map((item, index)=><Label key={index} value={item}/>)
        }
        return(
            <li className="list-item">
                <Link to={'/detail/' + this.state.detail.id}>
                    <img src={this.state.detail.cover} alt=""/>
                    <div className="flex-column">
                        <p className="name">
                            {this.state.detail.name}
                            {LabelComponent}
                        </p>
                        <p className="desc">{this.state.detail.desc}</p>
                    </div>
                </Link>
                <p className="start-btn">{this.state.btn}</p>
            </li>
        )
    }
}

ListItem.defaultProps = {
    btn: "开始"
}

export default ListItem