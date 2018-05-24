import React from 'react'

import NoMore from '../baseComponent/NoMore'
import ListItem from '../baseComponent/ListItem'

const hot_arr= [
    {
        id: 1,
        cover: "https://game.11h5.com/static/images/2017/0421/20170421094832825.gif",
        name: "猫来了",
        labels: [
            {
                class: "blue",
                text: "公告"
            },
            {
                class: "red",
                text: "首发"
            }
        ],
        desc: "相亲相爱，不如来互相伤害！"
    },
    {
        id: 2,
        cover: "https://game.11h5.com/static/images/2017/1214/20171214120110734.gif",
        name: "怪兽必须死",
        desc: "保卫家园，人在城在！"
    },
    {
        id: 3,
        cover: "https://game.11h5.com/static/images/2017/0609/20170609101821804.png",
        name: "决战沙城",
        labels: [
            {
                class: "blue",
                text: "公告"
            },
            {
                class: "red",
                text: "首发"
            }
        ],
        desc: "传奇世界正版授权，兄弟再聚，沙城争霸！"
    },
    {
        id: 4,
        cover: "https://game.11h5.com/static/images/2018/0509/20180509051915609.png",
        name: "修罗武神",
        desc: "新资料片楚皇临世，结婚系统袭来！"
    },
    {
        id: 5,
        cover: "https://game.11h5.com/static/images/2017/1214/20171214120110734.gif",
        name: "怪兽必须死",
        desc: "保卫家园，人在城在！"
    },
    {
        id: 6,
        cover: "https://game.11h5.com/static/images/2017/0609/20170609101821804.png",
        name: "决战沙城",
        labels: [
            {
                class: "blue",
                text: "公告"
            },
            {
                class: "red",
                text: "首发"
            }
        ],
        desc: "传奇世界正版授权，兄弟再聚，沙城争霸！"
    }
]

class Hot extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {};
    }

    render () {
        return (
            <div>
                <ul className="container">
                    {
                        hot_arr.map((item)=>
                            <ListItem key={item.id} value={item}/>
                        )
                    }
                </ul>
                <NoMore/>
            </div>
        )
    }
}

export default Hot