import React from 'react'

class SignIn extends React.Component {
  static defaultProps = {
    show: false
  }

  render () {
    const {show} = this.props
    if (!show) return null
    return (
      <div class="loginMask">
        <div class="loginBox">
          <p class="loginHead">
          <img src="http://y1y-src.oss-cn-shanghai.aliyuncs.com//uploads/g/glwmxv1478167257/a/9/a/5/5a3c8182acad2.png" alt=""/>
          <span>游戏登录</span>
        </p>
        <div class="loginBody">
          <p>
            <img src="http://wx.wpart.cn/uploads/k/kJF5b1dFFKGcmTyvm5qv/4/2/9/9/5b0ce76087685.png" alt=""/>
          </p>
          <p>
            <img src="http://wx.wpart.cn/uploads/k/kJF5b1dFFKGcmTyvm5qv/0/e/3/8/5b0ce7500ae47.png" alt=""/>
          </p>
          <p>
            <img src="http://wx.wpart.cn/uploads/k/kJF5b1dFFKGcmTyvm5qv/f/e/0/0/5b0ce758d5ea2.png" alt=""/>
          </p>
        </div>
        <p class="loginTip">请选择登录方式</p>
        </div>
      </div>
    )
  }
}

export default SignIn