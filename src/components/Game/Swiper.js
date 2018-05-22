import React from 'react'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

class Slider extends React.Component {

    componentDidMount() {
        var swiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    img: "https://game.11h5.com/static/images/2018/0503/20180503070138807.gif",
                    href: ""
                },
                {
                    id: 2,
                    img: "https://game.11h5.com/static/images/2018/0515/20180515045355975.gif",
                    href: ""
                }
            ]
        }
    }

    render () {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    { 
                        this.state.items.map((item)=>
                            <div className="swiper-slide" key={item.id}>
                                <a href={item.href}>
                                    <img src={item.img} alt="暂时无法加载"/>
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