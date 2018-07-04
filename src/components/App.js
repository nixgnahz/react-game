import React from 'react'

import Router from '../router/index'
import Wrapper from './Wrapper/index'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showWrapper: this._detect()
    }
  }

  _detect () {
    if (!(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      return true
    }
    return false
  }

  render () {
    if(this.state.showWrapper) {
      return (
        <Wrapper>
          <Router/>
        </Wrapper>
      )
    }
    return (
      <Router/>
    )
  }
}

export default App