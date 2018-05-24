import React from 'react'

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {};
    }

    render () {
        return (
            <div className="bind-input">
                <div className="flex">
                    <p className="icon">
                        <img src="http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/7/a/a/e/5b0660fae9522.png" alt=""/>
                    </p>
                    <input type="number" placeholder="请输入您的手机号码"/>
                </div>
                <div className="flex">
                    <p className="icon">
                        <img src="http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/7/a/a/e/5b0660fae9522.png" alt=""/>
                    </p>
                    <input type="password" placeholder="请输入您的密码"/>
                </div>
                <div className="flex">
                    <p className="icon">
                        <img src="http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/7/a/a/e/5b0660fae9522.png" alt=""/>
                    </p>
                    <input type="text" placeholder="请输入图片验证码"/>
                    <img src="http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/2/b/e/5/5b066310cbd22.png" alt=""/>
                </div>
                <div className="flex">
                    <p className="icon">
                        <img src="http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/7/a/a/e/5b0660fae9522.png" alt=""/>
                    </p>
                    <input type="number" placeholder="请输入短信验证码"/>
                    <span>获取验证码</span>
                </div>
                <p className="tip">绑定后，可使用手机登录，保障账号安全</p>
            </div>
        )
    }
}

export default Input