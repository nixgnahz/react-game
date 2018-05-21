import React from 'react'

import Head from './Head'
import Gift from './Gift'
import './index.css'

const giftBags = [
    {
        id: 1,
        cover: "https://game.11h5.com/static/images/2017/0609/20170609101821804.png",
        name: "决战沙城",
        desc: "决战沙城爱微游专属新手礼包",
        counter: 1,
        info: "羽毛*20、强化石*100、金币*500000",
        moreStatus: 0,
        more: [
            {
                desc: "决战沙城爱微游专属新手礼包",
                info: "羽毛*20、强化石*100、金币*500000",
            },
            {
                desc: "决战沙城爱微游专属新手礼包",
                info: "羽毛*20、强化石*100、金币*500000",
            }
        ]
    },
    {
        id: 2,
        cover: "https://game.11h5.com/static/images/2018/0514/20180514051323444.png",
        name: "热血沙城",
        desc: "入群礼包",
        counter: 1,
        info: "金币*300000 黑铁矿*10 附魔值*30 星痕石*5",
        moreStatus: 0,
        more: [
            {
                desc: "入群礼包",
                info: "金币*300000 黑铁矿*10 附魔值*30 星痕石*5",
            }
        ]
    },
    {
        id: 3,
        cover: "https://game.11h5.com/static/images/2018/0420/20180420105254762.png",
        name: "龙城战歌",
        desc: "加群礼包",
        counter: 1,
        info: "金币*5888888、野战boss卷轴*1、秘境boss卷轴*1、血玉石*10、羽毛*10",
        moreStatus: 0,
        more: [
            {
                desc: "加群礼包",
                info: "金币*5888888、野战boss卷轴*1、秘境boss卷轴*1、血玉石*10、羽毛*10",
            }
        ]
    },
    {
        id: 4,
        cover: "https://game.11h5.com/static/images/2017/0606/20170606105927994.png",
        name: "梦想海岛王",
        desc: "五一劳动节礼包",
        counter: 1,
        info: "扫荡卡*50; 夺岛卡*10; 航空母舰*1",
        moreStatus: 0,
        more: [
            {
                desc: "五一劳动节礼包",
                info: "扫荡卡*50; 夺岛卡*10; 航空母舰*1",
            }
        ]
    },
    {
        id: 5,
        cover: "https://game.11h5.com/static/images/2018/0328/20180328020602572.png",
        name: "蜀山御风行",
        desc: "入群礼包",
        counter: 1,
        info: "云之精华*5，符灵*100，银两*20000",
        moreStatus: 0,
        more: [
            {
                desc: "入群礼包",
                info: "云之精华*5，符灵*100，银两*20000",
            }
        ]
    },
    {
        id: 6,
        cover: "https://game.11h5.com/static/images/2018/0319/20180319103720844.png",
        name: "思美人",
        desc: "决战沙城爱微游专属新手礼包",
        counter: 1,
        info: "金条X2，武魂石X200",
        moreStatus: 0,
        more: [
            {
                desc: "决战沙城爱微游专属新手礼包",
                info: "金条X2，武魂石X200",
            }
        ]
    },
    {
        id: 7,
        cover: "https://game.11h5.com/static/images/2017/0411/20170411113321686.png",
        name: "蜀山世界",
        desc: "进阶礼包",
        counter: 1,
        info: "进阶丹*30 磨练石*30 九天玄铁*2",
        moreStatus: 0,
        more: [
            {
                desc: "进阶礼包",
                info: "进阶丹*30 磨练石*30 九天玄铁*2",
            }
        ]
    }
]

class Giftbag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            giftBags: giftBags
        }
    }

    render () {
        return (
            <div>
                <Head/>
                <ul>
                    {this.state.giftBags.map((item) =>
                        <Gift key={item.id} value={item}/>
                    )}
                </ul>
            </div>
        )
    }
}
export default Giftbag