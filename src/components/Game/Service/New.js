import React from 'react'

import ListItem from '../../baseComponent/ListItem'

const service_arr = [
    {
        id: 1,
        cover: "https://game.11h5.com/static/images/2016/0126/20160126041835676.png",
        name: "传奇世界",
        desc: "今日16:30开服"
    },
    {
        id: 2,
        cover: "https://game.11h5.com/static/images/2016/0126/20160126041835676.png",
        name: "传奇世界",
        desc: "今日16:30开服"
    },
    {
        id: 3,
        cover: "https://game.11h5.com/static/images/2016/0126/20160126041835676.png",
        name: "传奇世界",
        desc: "今日16:30开服"
    },
    {
        id: 4,
        cover: "https://game.11h5.com/static/images/2016/0126/20160126041835676.png",
        name: "传奇世界",
        desc: "今日16:30开服"
    },
    {
        id: 5,
        cover: "https://game.11h5.com/static/images/2016/0126/20160126041835676.png",
        name: "传奇世界",
        desc: "今日16:30开服"
    }
]

class NewService extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                {
                    service_arr.map((item)=>
                        <ListItem key={item.id} value={item} btn={"即将开服"}/>
                    )
                }
            </div>
        )
    }
}

export default NewService