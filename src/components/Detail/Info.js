import React from  'react'

import Line from './Line'

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {};
    }

    render () {
        return (
            <div className="boxes info">
                <Line value="游戏信息"/>
                <p>发行商：上海敢客网络科技有限公司</p>
                <p>文网游备字：〔2017〕Ｍ-SLG 0122 号</p>
            </div>
        )
    }
}

export default Info