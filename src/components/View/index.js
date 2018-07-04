import React from 'react'

import './index.scss'

import Body from './Body'
import Button from './Button'

class View extends React.Component {
    render () {
        return (
            <section className="view-section">
              <div className="view">
                <Body/>
                <div className="view-empty"></div>
              </div>
              <Button/>
            </section>
        )
    }
}

export default View