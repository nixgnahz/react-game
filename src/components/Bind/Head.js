import React from 'react'

class Head extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {};
    }

    render () {
        return (
            <div className="bind-head">
                <img src="//cdn.11h5.com/static/image/vutimes.png" alt=""/>
            </div>
        )
    }
}

export default Head