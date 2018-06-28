import React from 'react'

import {Route} from "react-router-dom"

import './index.scss'

import RuleItem from './RuleItem'
import RuleInfo from './RuleInfo'

class Rules extends React.Component {
    render () {
        const {url} = this.props.match
        return (
            <div className="rules">
                <Route exact path={url} component={RuleItem}/>
                <Route path={url + '/:id'} component={RuleInfo} />
            </div>
        )
    }
}

export default Rules