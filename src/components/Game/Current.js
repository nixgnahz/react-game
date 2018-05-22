import React from 'react';

const current_arr = [
    {
        id: 1,
        title: "楚乔传之谍纸天眼",
        cover: "http://rs.aceclan.cn/uploads/a/alcynu1524899223/0/2/8/a/5af4264923313.jpg"
    },
    {
        id: 2,
        title: "修罗武神",
        cover: "http://rs.aceclan.cn/uploads/a/admin/6/f/7/e/5ac5c8a4ef01f.gif"
    },
    {
        id: 3,
        title: "雷霆战神",
        cover: "http://rs.aceclan.cn/uploads/a/admin/3/5/c/d/5ac5cd1a40c8d.gif"
    },
    {
        id: 4,
        title: "思美人H5",
        cover: "http://rs.aceclan.cn/uploads/e/exhzhh1526289964/1/f/9/b/5af969b5973a7.jpg"
    },
    {
        id: 5,
        title: "我要当首富",
        cover: "http://rs.aceclan.cn/uploads/a/admin/3/5/c/d/5ac5cd1a40c8d.gif"
    }
]

class Current extends React.Component {
    render () {
        return (
            <div className="current-play">
                <ul>
                    <li className="current-list">
                        <img src="http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/e/f/6/5afe6ced404fc.png" className="icon" alt="暂时无法加载"/>
                    </li>
                    {current_arr.map((item)=>
                        <li className="current-list" key={item.id}>
                            <img src={item.cover} className="current-cover" alt="暂时无法加载"/>
                            <p className="title">{item.title}</p>
                            <p className="click-btn">开始</p>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Current