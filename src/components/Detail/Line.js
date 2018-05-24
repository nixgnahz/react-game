import React from  'react';

class Line extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.value
        }
    }

    render () {
        return (
            <div>
                <p className="top-title">
                    <span className="line"></span>{this.state.text}
                </p>
            </div>
        )
    }
}

export default Line