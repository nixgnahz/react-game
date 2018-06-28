import React from 'react'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

const goods = [
    {
        id: 1,
        cover: "https://act.11h5.com/score/goods_img/goods_thumb/20170930/11h5_goods_thumb_201709308K4e67XQHP0f6YbfR9q2v0JNWIWryZcP_1506754229.jpg",
        name: "iPhone X 256G",
        point: "9688000",
        storage: "1"
    },
    {
        id: 2,
        cover: "https://act.11h5.com/score/goods_img/goods_thumb/20170928/11h5_goods_thumb_20170928rnbj8cLxvSln7wslFB87UTWwoWRtftet_1506586909.jpg",
        name: "iPad Pro（12.9英寸64G）",
        point: "6388000",
        storage: "6"
    },
    {
        id: 3,
        cover: "https://act.11h5.com/score/goods_img/goods_thumb/20170928/11h5_goods_thumb_20170928XoKNDQH7TgWks0TBkClT3l_hOLSOIZB-_1506586836.jpg",
        name: "小米平衡车Plus",
        point: "6388000",
        storage: "36"
    },
    {
        id: 4,
        cover: "https://act.11h5.com/score/goods_img/goods_thumb/20180518/11h5_goods_thumb_20180518eh35-FyGq9hKn_oyd7GfbjFVJ2RirLPb_1526630562.jpg",
        name: "小米空气净化器2S",
        point: "6388000",
        storage: "25"
    },
    {
        id: 5,
        cover: "https://act.11h5.com/score/goods_img/goods_thumb/20170928/11h5_goods_thumb_20170928rnbj8cLxvSln7wslFB87UTWwoWRtftet_1506586909.jpg",
        name: "iPad Pro（12.9英寸64G）",
        point: "6388000",
        storage: "6"
    },
    {
        id: 6,
        cover: "https://act.11h5.com/score/goods_img/goods_thumb/20170928/11h5_goods_thumb_20170928XoKNDQH7TgWks0TBkClT3l_hOLSOIZB-_1506586836.jpg",
        name: "小米平衡车Plus",
        point: "6388000",
        storage: "36"
    },
    {
        id: 7,
        cover: "https://act.11h5.com/score/goods_img/goods_thumb/20170928/11h5_goods_thumb_20170928rnbj8cLxvSln7wslFB87UTWwoWRtftet_1506586909.jpg",
        name: "iPad Pro（12.9英寸64G）",
        point: "6388000",
        storage: "6"
    },
    {
        id: 8,
        cover: "https://act.11h5.com/score/goods_img/goods_thumb/20170928/11h5_goods_thumb_20170928XoKNDQH7TgWks0TBkClT3l_hOLSOIZB-_1506586836.jpg",
        name: "小米平衡车Plus",
        point: "6388000",
        storage: "36"
    }
]

const notice = [
    {
        id: 1,
        title: "[飞鱼]",
        desc: "兑换了 传奇来了传奇礼包"
    },
    {
        id: 2,
        title: "[芦葫糖爆酱]",
        desc: "兑换了 大天使之剑H5霸者礼包"
    },
    {
        id: 3,
        title: "[Don]",
        desc: "兑换了 传奇来了王者礼包"
    },
    {
        id: 4,
        title: "[Silence]",
        desc: "兑换了 凡人飞仙传钻石礼包"
    }
]

class Mall extends React.Component {
    componentDidMount() {
        new Swiper ('.swiper-container', {
            direction: 'vertical',
            autoplay: true,
            loop: true
        })
    }

    render () {
        return (
            <div className="mall">
                <NoticeSwiper value={notice}/>
                <ul>
                    {
                        goods.map((item)=>
                            <GoodsItem key={item.id} value={item}/>
                        )
                    }
                </ul>
            </div>
        )
    }
}

function GoodsItem(props) {
    var goods = props.value
    return (
        <li>
            <img src={goods.cover} alt=""/>
            <p className="title">{goods.name}</p>
            <div className="desc">
                <p>{goods.point}</p>
                <p>剩余：{goods.storage}</p>
            </div>
        </li>
    )
}

function NoticeSwiper(props) {
    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {
                    notice.map((item)=>
                        <div className="swiper-slide" key={item.id}>
                            <img src="http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/7/9/5/e/5b0b67e102e48.png" alt=""/>
                            <span className="name">{item.title}</span>
                            <span className="desc">{item.desc}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Mall