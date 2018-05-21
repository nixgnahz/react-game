import React from 'react'

import './index.css'

import Slider from './Swiper'
import NavBar from './NavBar'

class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Slider/>
                <NavBar/>
            </div>
        )
    }
}

export default Game