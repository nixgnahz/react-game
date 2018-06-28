import React from 'react'

import Head from '../../containers/Sign'
import Gift from './Gift'
import './index.scss'

class Giftbag extends React.Component {
    render () {
        const {gifts, changeMoreGift} = this.props
        return (
            <div>
                <Head/>
                <ul>
                    {gifts.map((item) =>
                        <Gift key={item.id} detail={item} onChangeStatus={()=> {changeMoreGift(item.id)}}/>
                    )}
                </ul>
            </div>
        )
    }
}
export default Giftbag