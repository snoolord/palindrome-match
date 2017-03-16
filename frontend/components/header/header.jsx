import DokkioLogo from './dokkio-logo.png'
import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <img src={require('./dokkio-logo.png')}/>
            </div>
        )
    }
}

export default Header
