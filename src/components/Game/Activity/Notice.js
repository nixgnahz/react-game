import React from 'react'

import {Link} from "react-router-dom"

import Label from '../../baseComponent/Label'

const notice_arr = [
    {
        id: 1,
        title: "修罗武神合服公告",
        time: "2018-05-17"
    },
    {
        id: 2,
        title: "决战沙城合服安排",
        time: "2018-05-17"
    },
    {
        id: 3,
        title: "思美人5月17日更新公告思美人5月17日更新公告",
        time: "2018-05-17"
    },
    {
        id: 4,
        title: "修罗武神合服公告",
        time: "2018-05-17"
    },
    {
        id: 5,
        title: "决战沙城合服安排",
        time: "2018-05-17"
    },
    {
        id: 6,
        title: "思美人5月17日更新公告思美人5月17日更新公告",
        time: "2018-05-17"
    },
    {
        id: 7,
        title: "修罗武神合服公告",
        time: "2018-05-17"
    }
]

class Notice extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {};
    }

    render () {
        return (
            <ul>
                {
                    notice_arr.map((item)=>
                        <Link to={{pathname: '/view', query: {id: item.id, type: "notice"}}} key={item.id}>
                            <li className="notice-list">
                                <Label value={{text: "公告"}}/>
                                <p className="title">{item.title}</p>
                                <span className="time">{item.time}</span>
                            </li>
                        </Link>
                    )
                }
            </ul>
        )
    }
}

export default Notice