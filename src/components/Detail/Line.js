import React from  'react'

class Line extends React.Component {
    render () {
        const text = this.props.value
        return (
            <div>
                <p className="top-title">
                    <span className="line"></span>{text}
                </p>
            </div>
        )
    }
}

export default Line