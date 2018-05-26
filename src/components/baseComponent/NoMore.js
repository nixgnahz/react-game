import React from 'react'

import PropTypes from 'prop-types'

import './index.scss'

class NoMore extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            showCopyright: props.showCopyright
        }
    }

    render () {
        var copyrightComponent = null
        if(this.state.showCopyright) {
            copyrightComponent = <p className="copyright">Copyright©2014-2018 All Rights Reserved</p>
        }
        return (
            <div className="bottom">
                <p className="title">
                    <span className="line"></span>
                    没有更多了
                    <span className="line"></span>
                </p>
                {copyrightComponent}
            </div>
        )
    }
}


NoMore.propTypes={
    showCopyright: PropTypes.bool.isRequired
}

export default NoMore