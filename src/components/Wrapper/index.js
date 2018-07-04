import React from 'react'

import Head from './Head'
import Footer from './Footer'

import './index.scss'

class Wrapper extends React.Component {
  render() {
    return (
      <div className="pc-container">
        <Head/>
        <div className="pc-wrapBox">
          <div className="pc-wrap">
            <div className="pc-content">{this.props.children}</div>
          </div>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default Wrapper