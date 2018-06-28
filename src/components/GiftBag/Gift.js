import React from 'react'

import MoreBtn from './MoreBtn'
import More from './More'
import Label from '../baseComponent/Label'

class Gift extends React.Component {
    render () {
        const {detail,onChangeStatus} = this.props
        var moreComponent = null;
        if(!detail.moreStatus) {
            moreComponent = <MoreBtn value={detail.more.length} onChangeStatus={onChangeStatus}/>;
        } else{
            moreComponent = detail.more.map((item, index)=><More key={index} value={item}/>);
        }
        var LabelComponent = null;
        if(detail.labels) {
            LabelComponent = detail.labels.map((item, index)=><Label key={index} value={item}/>)
        }
        return (
            <div className="gift-detail-box">
                <div className="head">
                    <img src={detail.cover} alt=""/>
                    <p>{detail.name}</p>
                </div>
                <div className="body">
                    <div className="left-desc">
                        <p>{LabelComponent}{detail.desc}</p>
                        <p>{detail.info}</p>
                    </div>
                    <p className="receive-btn">领取</p>
                </div>
                {moreComponent}
            </div>
        )
    }
}

export default Gift