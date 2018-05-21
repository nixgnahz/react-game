import React from 'react'

class More extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: props.value
        }
    }

    render () {
        return (
            <div className="body more">
                <div className="left-desc">
                    <p>{this.state.detail.desc}</p>
                    <p>{this.state.detail.info}</p>
                </div>
                <p className="receive-btn">领取</p>
            </div>
        )
    }
}

export default More
