import React from 'react'

class Button extends React.Component {
    render () {
        const {text} = this.props
        return (
            <div className="bind-btn">{text}</div>
        )
    }
}

export default Button