import DokkioLogo from './dokkio-logo.png'
import React, { Component } from 'react'
import './header.scss'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='header'>
                <img src={require('./dokkio-logo.png')}/>
                <div className='header-text'>
                    Palindrome Highlighter
                </div>
            </div>
        )
    }
}

export default Header
