import React from 'react'

import Label from '../baseComponent/Label'

const tasks = [
    {
        id: 1,
        title: "签到",
        labels: [
            {
                class: "blue",
                text: "日常"
            }
        ],
        desc: "明日再来即可获得",
        point: "",
        status: 1
    },
    {
        id: 2,
        title: "每日首充",
        labels: [
            {
                class: "blue",
                text: "日常"
            }
        ],
        desc: "每日首次充值任意一款游戏",
        point: 50,
        status: 0
    },
    {
        id: 3,
        title: "充值",
        labels: [
            {
                class: "blue",
                text: "长期"
            }
        ],
        desc: "每充值1元即可获得10积分",
        point: 0,
        status: 0
    },
    {
        id: 4,
        title: "实名认证",
        labels: [
            {
                class: "blue",
                text: "一次性"
            }
        ],
        desc: "完成认证即可获得1000积分",
        point: 1000,
        status: 0
    },
    {
        id: 5,
        title: "绑定手机",
        labels: [
            {
                class: "blue",
                text: "一次性"
            }
        ],
        desc: "完成绑定即可获得1000积分",
        point: 1000,
        status: 0
    }
]

class Task extends React.Component {
    render () {
        return (
            <div className="task">
                <ul>
                    {
                        tasks.map((item)=>
                            <li key={item.id}>
                                <p className="icon-box">
                                    <img src="http://wx.11babay.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/5/e/3/f/5acad3e16db04.png" alt=""/>
                                </p>
                                <div className="column">
                                    <p className="title">{item.title}<SetLabels value={item}/></p>
                                    <p className="desc">{item.desc}</p>
                                </div>
                                <SetButton value={item}/>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

function SetButton(props) {
    const status = props.value.status;
    const point = props.value.point;
    if (status) {
        return <p className="finish-btn btn">已完成</p>
    } else{
        if(point) {
            return <p className="unfinish-btn btn">+{point}积分<span className="red-circle"></span></p>
        } else{
            return <p className="unfinish-btn btn">去完成</p>
        }
    }
}

function SetLabels(props) {
    var LabelComponent = null;
    if(props.value.labels) {
        LabelComponent = props.value.labels.map((item, index)=><Label key={index} value={item}/>)
    }
    return LabelComponent
}

export default Task