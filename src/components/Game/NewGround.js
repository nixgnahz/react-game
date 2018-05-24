import React from 'react'

import LoadMore from '../baseComponent/LoadMore'
import ListItem from '../baseComponent/ListItem'

const hot_arr= [
    {
        id: 1,
        cover: "https://game.11h5.com/static/images/2018/0322/20180322065407278.png",
        name: "时光幻境",
        desc: "2018魔幻巨献多人同屏，激爽PK！"
    },
    {
        id: 2,
        cover: "https://game.11h5.com/static/images/2018/0502/20180502060902675.png",
        name: "神游记",
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
        desc: "神游三界历劫，组队修仙来战"
    },
    {
        id: 3,
        cover: "https://game.11h5.com/static/images/2018/0504/20180504051824134.png",
        name: "江山美人",
        desc: "开局是个芝麻官，十天之后当王爷！"
    },
    {
        id: 4,
        cover: "https://game.11h5.com/static/images/2018/0509/20180509051915609.png",
        name: "修罗武神",
        desc: "新资料片楚皇临世，结婚系统袭来！"
    },
    {
        id: 5,
        cover: "https://game.11h5.com/static/images/2018/0115/20180115043412344.png",
        name: "损友圈",
        desc: "跟好友相爱相杀吧！"
    },
    {
        id: 6,
        cover: "https://game.11h5.com/static/images/2017/0609/20170609101821804.png",
        name: "决战沙城",
        desc: "传奇世界正版授权，兄弟再聚，沙城争霸！"
    },
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
                <LoadMore/>
            </div>
        )
    }
}

export default Hot