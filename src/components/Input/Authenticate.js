import React from 'react'

import './index.scss'

import Head from './Head'
import AuthenticateInput from './AuthenticateInput'
import Button from './Button'

class Bind extends React.Component {
    render () {
        return (
            <div className="bind">
                <Head/>
                <AuthenticateInput/>
                <div className="tip">
                    <p>* 身份信息只能提交一次不可修改，请慎重填写</p>
                    <p>* 此信息属于个人隐私，本平台承诺绝不公开、编辑或透露给第三方</p>
                </div>
                <Button text="立即认证"/>
            </div>
        )
    }
}

export default Bind