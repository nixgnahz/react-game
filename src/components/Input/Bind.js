import React from 'react'

import './index.scss'

import Head from './Head'
import BindInput from './BindInput'
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
                <BindInput/>
                <p className="tip">绑定后，可使用手机登录，保障账号安全</p>
                <Button text="完成绑定"/>
            </div>
        )
    }
}

export default Bind