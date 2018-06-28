import React from 'react'

class AuthenticateInput extends React.Component {
    render () {
        return (
            <div className="bind-input">
                <div className="flex">
                    <p className="icon">
                        <img src="http://wx.wpart.cn/uploads/s/sbnT3SP8rQthEQuGCEHw/1/f/a/1/5a1793d37e864.png" alt=""/>
                    </p>
                    <input type="text" placeholder="请输入您的真实姓名"/>
                </div>
                <div className="flex">
                    <p className="icon">
                        <img src="http://wx.wpart.cn/uploads/s/sbnT3SP8rQthEQuGCEHw/1/f/a/1/5a1793d37e864.png" alt=""/>
                    </p>
                    <input type="text" placeholder="请输入您的身份证号码"/>
                </div>
            </div>
        )
    }
}

export default AuthenticateInput