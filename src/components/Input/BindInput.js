import React from 'react'

class BindInput extends React.Component {
    render () {
        return (
            <div className="bind-input">
                <div className="flex">
                    <p className="icon">
                        <img src="http://wx.11babay.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/7/a/a/e/5b0660fae9522.png" alt=""/>
                    </p>
                    <input type="number" placeholder="请输入您的手机号码"/>
                </div>
                <div className="flex">
                    <p className="icon">
                        <img src="http://wx.11babay.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/7/a/a/e/5b0660fae9522.png" alt=""/>
                    </p>
                    <input type="password" placeholder="请输入您的密码"/>
                </div>
                <div className="flex">
                    <p className="icon">
                        <img src="http://wx.11babay.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/7/a/a/e/5b0660fae9522.png" alt=""/>
                    </p>
                    <input type="text" placeholder="请输入图片验证码"/>
                    <img src="http://wx.11babay.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/2/b/e/5/5b066310cbd22.png" alt=""/>
                </div>
                <div className="flex">
                    <p className="icon">
                        <img src="http://wx.11babay.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/7/a/a/e/5b0660fae9522.png" alt=""/>
                    </p>
                    <input type="number" placeholder="请输入短信验证码"/>
                    <span>获取验证码</span>
                </div>
            </div>
        )
    }
}

export default BindInput