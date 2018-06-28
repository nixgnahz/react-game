import React from 'react'

import './index.scss'

class Label extends React.Component {
    render () {
        const label = this.props.value
        return (
            <span className={label.class ? label.class + ' label' : 'blue label'}>{label.text}</span>
        )
    }
}

export default Label