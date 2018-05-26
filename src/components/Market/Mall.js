import React from 'react'

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

class Mall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="mall">
                {
                    goods.map((item)=>
                        <GoodsItem key={item.id} value={item}/>
                    )
                }
            </div>
        )
    }
}

function GoodsItem(props) {
    var goods = props.value;
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

export default Mall