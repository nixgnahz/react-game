import React from 'react'

import {Route} from "react-router-dom"

import './index.scss'

import RuleItem from './RuleItem'
import RuleInfo from './RuleInfo'

class Rules extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            match: props.match.url
        }
    }

    render () {
        return (
            <div className="rules">
                <Route exact path={this.state.match} component={RuleItem}/>
                <Route path={this.state.match + '/:id'} component={RuleInfo} />
            </div>
        )
    }
}

export default Rules