import React from 'react'

import ActivityItem from '../../baseComponent/ActivityItem'

const activities = [
    {
        id: 1,
        cover: "https://game.11h5.com/static/images/2018/0511/20180511050036863.gif",
        desc: "【决战沙城】感恩母亲节 沙城送壕礼",
        time: "2018/05/13 ~ 2018/05/17",
        status: 1
    },
    {
        id: 2,
        cover: "https://game.11h5.com/static/images/2018/0511/20180511054830811.gif",
        desc: "【传奇来了之玛法英雄】5月12-17日母亲节限时活动",
        time: "2018/05/12 ~ 2018/05/17",
        status: 1
    },
    {
        id: 3,
        cover: "https://game.11h5.com/static/images/2018/0516/20180516070633522.gif",
        desc: "【决战荣耀】心动520",
        time: "2018/05/17 ~ 2018/05/22",
        status: 1
    },
    {
        id: 4,
        cover: "https://game.11h5.com/static/images/2018/0514/20180514061031743.gif",
        desc: "【大天使之剑H5】特惠限购",
        time: "2018/05/13 ~ 2018/05/17",
        status: 0
    },
    {
        id: 5,
        cover: "https://game.11h5.com/static/images/2018/0511/20180511035347431.jpg",
        desc: "【思美人H5】月中狂欢活动",
        time: "2018/05/14 ~ 2018/05/16",
        status: 0
    }
]

class Activity extends React.Component {
    render () {
        return (
            <div>
                <ul>
                    {
                        activities.map((item)=>
                            <ActivityItem key={item.id} value={item}/>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Activity