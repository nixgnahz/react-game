import React from 'react'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

const items =  [
    {
        id: 1,
        img: "https://game.11h5.com/static/images/2018/0503/20180503070138807.gif",
        href: ""
    },
    {
        id: 2,
        img: "http://rs.aceclan.cn/uploads/e/exhzhh1526289964/5/a/b/0/5b02251b505ca.gif",
        href: ""
    }
]

class Slider extends React.Component {
    componentDidMount() {
        new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }

    render () {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    { 
                        items.map((item)=>
                            <div className="swiper-slide" key={item.id}>
                                <a href={item.href}>
                                    <img src={item.img} alt=""/>
                                </a> 
                            </div>  
                        )
                     }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}

export default Slider