import React from 'react'

import './index.scss'

import Body from './Body'
import Button from './Button'

class View extends React.Component {
    render () {
        return (
            <div className="view">
                <Body/>
                <div className="view-empty"></div>
                <Button/>
            </div>
        )
    }
}

export default View