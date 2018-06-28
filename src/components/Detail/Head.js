import React from  'react'

class Head extends React.Component {
    render () {
        return (
            <div className="head">
                <a>
                    <img src="https://game.11h5.com/static/images/2018/0314/20180314072821786.jpg" className="cover" alt=""/>
                </a>
                <div className="description">
                    <img className="icon" src="https://game.11h5.com/static/images/2018/0509/20180509051915609.png" alt=""/>
                    <p className="name">传奇来了之玛法英雄</p>
                    <p className="desc">并肩征战九州，问鼎传奇之巅!</p>
                    <p className="click-btn">开始游戏</p>
                </div>
            </div>
        )
    }

}

export default Head