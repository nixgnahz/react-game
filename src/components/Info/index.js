import React from 'react';

import {Link} from "react-router-dom";

import Head from './Head'
import ItemEnter from './ItemEnter'
import ItemText from './ItemText'
import './index.scss'

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {};
    }

    render () {
        return (
            <div>
                <Head/>
                <div>
                    <div className="list-items">
                        <ItemText value='我的积分' text="0"/>
                        <ItemText value='签到' text="已签到"/>
                    </div>
                    <div className="list-items">
                        <ItemEnter value='实名认证' />
                        <ItemEnter value='防沉迷系统说明' />
                        <Link to='/bind'>
                            <ItemEnter value='绑定手机'/>
                        </Link>
                    </div>
                    <div className="list-items">
                        <ItemEnter value='用户条例' />
                    </div>
                </div>
                <p className="logout-btn">退出</p>
            </div>
        )
    }
}

export default Info
