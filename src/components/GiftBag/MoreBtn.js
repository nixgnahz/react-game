import React from 'react'

class MoreBtn extends React.Component {
    render () {
        const {value, onChangeStatus} = this.props
        return (
            <div className="more-btn" onClick={onChangeStatus}>
                <span>查看更多礼包({value})</span>
                <img src="http://wx.11babay.cn/uploads/4/4FHbETGied2sagC9mPEo/c/3/3/3/5a55726e180cc.png" alt=""/>
            </div>
        )
    }
}

export default MoreBtn