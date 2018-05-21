import React from 'react'

import './index.scss'

import Slider from './Swiper'
import Current from './Current'
import NavBar from './NavBar'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            match: props.match.url
        }
    }

    render () {
        return (
            <div>
                <Slider/>
                <Current/>
                <NavBar value={this.state.match}/>
            </div>
        )
    }
}

export default Game