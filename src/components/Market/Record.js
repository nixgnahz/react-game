import React from 'react'

import NoMore from '../baseComponent/NoMore'

const records = [
    {
        id: 1,
        time: "2018-05-25 10:51:01",
        title: "签到",
        type: 1,
        record: "+15积分"
    },
    {
        id: 2,
        time: "2018-05-24 14:14:23",
        title: "兑换",
        type: 0,
        record: "-10积分"
    },
    {
        id: 3,
        time: "2018-05-24 14:14:23",
        title: "签到",
        type: 1,
        record: "+10积分"
    },
    {
        id: 4,
        time: "2018-05-15 16:18:46",
        title: "签到",
        type: 1,
        record: "+10积分"
    },
    {
        id: 5,
        time: "2018-05-18 16:18:46",
        title: "兑换",
        type: 0,
        record: "-15积分"
    }
]

class Record extends React.Component {
    render () {
        const copyright_flag = false
        return (
            <ul className="record">
                {
                    records.map((item)=>
                        <RecordItem key={item.id} value={item}/>
                    )
                }
                <NoMore showCopyright={copyright_flag}/>
            </ul>

        )
    }
}

function RecordItem(props) {
    return (
        <li>
            <div className="column">
                <p className="time">{props.value.time}</p>
                <p className="title">{props.value.title}</p>
            </div>
            <p className={props.value.type ? "add score-record" : "minus score-record"}>{props.value.record}</p>
        </li>
    )
}

export default Record