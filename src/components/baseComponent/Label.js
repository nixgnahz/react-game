import React from 'react'

import './index.scss'

class Label extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: props.value
        }
    }

    render () {
        return (
            <span className={this.state.label.class ? this.state.label.class + ' label' : 'blue label'}>{this.state.label.text}</span>
        )
    }
}

export default Label