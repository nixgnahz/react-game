import React from 'react'

import './index.scss'

import Slider from './Swiper'
import Current from './Current'
import NavBar from './NavBar'

class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Slider/>
                <Current/>
                <NavBar/>
            </div>
        )
    }
}

export default Game