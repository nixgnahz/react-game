import React from 'react';

import MoreBtn from './MoreBtn'
import More from './More'

class Gift extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: props.value
        }
    }

    render () {
        var moreComponent = null;
        if(!this.state.detail.moreStatus) {
            moreComponent = <MoreBtn value={this.state.detail.counter}/>;
        } else{
            moreComponent = this.state.detail.more.map((item)=><More key={item.desc} value={item}/>);
        }
        return (
            <div className="gift-detail-box">
                <div className="head">
                    <img src={this.state.detail.cover} alt=""/>
                    <p>{this.state.detail.name}</p>
                </div>
                <div className="body">
                    <div className="left-desc">
                        <p>{this.state.detail.desc}</p>
                        <p>{this.state.detail.info}</p>
                    </div>
                    <p className="receive-btn">领取</p>
                </div>
                {moreComponent}
            </div>
        )
    }
}

export default Gift