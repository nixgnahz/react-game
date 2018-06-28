import React from 'react'

class More extends React.Component {
    render () {
        const detail = this.props.value
        return (
            <div className="body more">
                <div className="left-desc">
                    <p>{detail.desc}</p>
                    <p>{detail.info}</p>
                </div>
                <p className="receive-btn">领取</p>
            </div>
        )
    }
}

export default More
