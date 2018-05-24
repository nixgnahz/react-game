import React from 'react'

import './index.scss'

import Head from './Head'
import Input from './Input'
import Button from './Button'

class Bind extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {};
    }

    render () {
        return (
            <div className="bind">
                <Head/>
                <Input/>
                <Button/>
            </div>
        )
    }
}

export default Bind