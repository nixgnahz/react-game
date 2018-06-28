import React from  'react'

import './index.scss'

import Head from './Head'
import Desc from './Desc'
import Gift from './Gift'
import Info from './Info'

class Detail extends React.Component {
    render () {
        return (
            <div>
                <Head />
                <Desc />
                <Gift />
                <Info />
            </div>
        )
    }

}

export default Detail