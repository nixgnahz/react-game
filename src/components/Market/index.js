import React from 'react'

import './index.scss'

import Head from '../../containers/Sign'
import MenuBar from './MenuBar'

class Market extends React.Component {
    render () {
        const {url} = this.props.match
        return (
            <div className="market">
                <Head/>
                <MenuBar value={url}/>
            </div>
        )
    }
}

export default Market