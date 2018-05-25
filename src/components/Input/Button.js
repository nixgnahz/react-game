import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            btn: props.text
        }
    }

    render () {
        return (
            <div className="bind-btn">{this.state.btn}</div>
        )
    }
}

export default Button