import React from 'react'

import './index.scss'

import PropTypes from 'prop-types'

class TipMask extends React.Component {
    render () {
        const tips = this.props.value
        return (
            <div className="mask">
                <div className="tips">
                    <p className="title">提示信息</p>
                    <p className="tip">{tips.tip}</p>
                    <div className="btn-box">
                        <span onClick={this.props.onChange}>{tips.cancel}</span>
                        <span>{tips.sure}</span>
                    </div>
                </div>
            </div>
        )
    }
}

TipMask.protoTypes = {
    value: PropTypes.object.isRequired
}

TipMask.defaultProps = {
    value: {
        tip: "重要信息",
        cancel: "取消",
        sure: "确定"
    }
}

export default TipMask