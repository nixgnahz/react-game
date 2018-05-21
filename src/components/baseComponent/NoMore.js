import React from 'react'

import './index.css'

class NoMore extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="bottom">
                <p className="title">
                    <span className="line"></span>
                    没有更多了
                    <span className="line"></span>
                </p>
                <p className="copyright">Copyright©2014-2018 All Rights Reserved</p>
            </div>
        )
    }
}

export default NoMore