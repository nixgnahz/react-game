import React from 'react'

import './index.scss'

import Head from '../baseComponent/Head'
import MenuBar from './MenuBar'

class Market extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            match: props.match.url
        }
    }

    render () {
        return (
            <div className="market">
                <Head/>
                <MenuBar value={this.state.match}/>
            </div>
        )
    }
}

export default Market