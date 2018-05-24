import React from  'react';

import Line from './Line'

class Desc extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {};
    }

    render () {
        return (
            <div className="boxes desc">
                <Line value="游戏简介"/>
                <p className="text hidden">有一种记忆，不会因岁月而风化；杀人爆装，多人同屏！有一种感动，不会随时间而褪色；兄弟百人，同仇敌忾！还记得一起同甘共苦，荣誉与共的热血青春吗？加入《传奇来了之玛法英雄》与兄弟并肩征战，重温旧梦！向永不磨灭的青春致敬！</p>
            </div>
        )
    }

}

export default Desc