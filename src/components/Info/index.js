import React from 'react';

import Head from './Head'
import Item from './Item'
import './index.scss'

const items = [
    {
        type: 1,
        value: [
            {
                id: 1,
                content: "我的积分"
            },
            {
                id: 2,
                content: "签到"
            }
        ]
    },
    {
        type: 2,
        value: [
            {
                id: 3,
                content: "实名认证"
            },
            {
                id: 4,
                content: "防沉迷系统说明"
            },
            {
                id: 5,
                content: "绑定手机"
            }
        ]
    },
    {
        type: 3,
        value: [
            {
                id: 6,
                content: "用户条例"
            }
        ]
    }
]

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: items
        }
    }

    render () {
        return (
            <div>
                <Head/>
                <div>
                    {this.state.items.map((items) =>
                        <ul key={items.type} className="list-items">
                            {items.value.map((item) =>
                                <Item key={item.id} value={item.content} />
                            )}
                        </ul>
                    )}
                </div>
                <p className="logout-btn">退出</p>
            </div>
        )
    }
}

export default Info
