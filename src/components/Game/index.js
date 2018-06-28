import React from 'react'

import './index.scss'

import Slider from './Swiper'
import Current from './Current'
import NavBar from './NavBar'

class Game extends React.Component {
    render () {
        const {url} = this.props.match
        return (
            <div>
                <Slider/>
                <Current/>
                <NavBar value={url}/>
            </div>
        )
    }
}

export default Game