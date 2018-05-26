import React from 'react'

class Rule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="rule">
                <dl>
                    <dt>一、什么是积分？</dt>
                    <dd>积分是为了感谢广大爱微游粉丝对爱微游的支持，根据用户体验游戏，游戏中心活跃度等情况推出的一项长期的回馈服务。积分作为爱微游积分商城的一种货币，可用于兑换积分商城里面的各种虚拟奖励，游戏礼包等。</dd>
                </dl>
                <dl>
                    <dt>二、如何使用积分？</dt>
                    <dd>进入积分商城，找到自己喜欢的商品并点击，即可显示商品详情，当达到所需的兑换条件时，点击兑换按钮即可。</dd>
                </dl>
                <dl>
                    <dt>三、哪些地方可以使用积分？</dt>
                    <dl>
                        <dt>1、游戏特权</dt>
                        <dd>限量游戏礼包，游戏道具随心兑换</dd>
                    </dl>
                    <dl>
                        <dt>2、商城礼物 </dt>
                        <dd>限时限量兑换虚拟商品</dd>
                    </dl>
                    <dl>
                        <dt>3、积分抽奖</dt>
                        <dd>使用积分进行抽奖，各种礼品等你来拿</dd>
                    </dl>
                </dl>
                <dl>
                    <dt>四、积分如何获取？</dt>
                    <dl>
                        <dt>1、每日签到 </dt>
                        <dd>进入游戏中心“个人”界面或者积分商城界面，点击签到，即可获得对应的积分奖励。</dd>
                    </dl>
                    <dl>
                        <dt>2、游戏充值  </dt>
                        <dd>在爱微游平台任意游戏内每充值1元即可获得10积分</dd>
                    </dl>
                    <dl>
                        <dt>3、限时活动</dt>
                        <dd>每隔一段时间都会开放积分获取的限时活动，小伙伴们别错过哦~</dd>
                    </dl>
                </dl>
                <dl>
                    <dt>五、积分的有效期是多久？</dt>
                    <dd>积分永久有效</dd>
                </dl>
            </div>
        )
    }
}

export default Rule