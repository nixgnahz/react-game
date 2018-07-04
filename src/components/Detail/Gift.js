import React from  'react'

import Label from '../baseComponent/Label'
import Line from './Line'

const gifts = [
    {
        id: 1,
        labels: [
            {
                class: "pink",
                text: "入群"
            }
        ],
        title: "加群礼包",
        desc: "群号：385089008，盛世碎片*1、元宝*500、金币*500000、强化石*100"
    },
    {
        id: 2,
        labels: [
            {
                class: "pink",
                text: "入群"
            },
            {
                class: "blue",
                text: "统一码"
            }
        ],
        title: "豪华礼包",
        desc: "麻痹碎片*2、主宰碎片*20、金币*1000000"
    }
]

class Gift extends React.Component {
    render () {
        return (
            <div className="boxes">
                <Line value="游戏礼包"/>
                {
                    gifts.map((item)=>
                        <div key={item.id} className="gift">
                            <p className="title">
                                {item.labels.map((item, index)=><Label key={index} value={item}/>)}
                                {item.title}
                            </p>
                            <div className="row">
                                <p className="desc">{item.desc}</p>
                                <p className="click-btn">加群</p>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }

}

export default Gift