import React from 'react'

import './index.scss'

import {Link} from "react-router-dom"

import Label from './Label'

class ListItem extends React.Component {
    render () {
        const detail = this.props.value
        const btn = this.props.btn ? this.props.btn : "开始"
        var LabelComponent = null;
        if(detail.labels) {
            LabelComponent = detail.labels.map((item, index)=><Label key={index} value={item}/>)
        }
        return(
            <li className="list-item">
                <Link to={'/detail/' + detail.id}>
                    <img src={detail.cover} alt=""/>
                    <div className="flex-column">
                        <p className="name">
                            {detail.name}
                            {LabelComponent}
                        </p>
                        <p className="desc">{detail.desc}</p>
                    </div>
                </Link>
                <p className="start-btn">{btn}</p>
            </li>
        )
    }
}

export default ListItem