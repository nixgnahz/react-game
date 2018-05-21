import React from 'react'

class MoreBtn extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            counter: props.value
        }
        this.showMore = this.showMore.bind(this);
    }

    showMore () {

    }

    render () {
        return (
            <div className="more-btn" onClick={this.showMore}>
                <span>查看更多礼包({this.state.counter})</span>
                <img src="http://wx.wpart.cn/uploads/4/4FHbETGied2sagC9mPEo/c/3/3/3/5a55726e180cc.png" alt="点击"/>
            </div>
        )
    }
}

export default MoreBtn