import React, { Component } from 'react'
import TextOut from '../text-output/text-output.jsx'

import { connect } from 'react-redux'
import { sendBody } from '../text-actions'
import './text-input.scss'

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
    sendBody: (body) => dispatch(sendBody(body))
})

class TextInput extends Component {
    constructor(props) {
        super(props)
        /* this.state.body will be an array of objects
        that flag whether the word is a palindrome */
        this.state = {
            body: [],
        }
        // bind TextInput to callback functions
        this.flagPalindromes = this.flagPalindromes.bind(this)
        this.sendBody = this.sendBody.bind(this)
        this.sendBodyClick = this.sendBodyClick.bind(this)
    }

    flagPalindromes(e) {
        // split up each word and find out if they're palindromes
        let currentBody = e.currentTarget.value.trim().split(' ')
        currentBody = currentBody.map(word => {
            // returns object with palindrome flag
            return {
                word: word,
                palindrome: this.isPalindrome(word)
            }
        })
        this.setState({body: currentBody})
    }

    sendBody(e) {
        // dispatches sendBody action on enter
        if (e.keyCode === 13 || !e) {
            e.preventDefault()
            this.props.sendBody(this.state.body)
        }
    }

    sendBodyClick() {
        // dispatches sendBody action on click
        this.props.sendBody(this.state.body)
    }

    isPalindrome(str) {
        return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
    }

    render() {
        return (
            <div className='text-input'>
                <textarea
                    placeholder='Input Paragraph Here'
                    className='text-input-area'
                    onKeyDown={this.sendBody}
                    onChange={this.flagPalindromes}
                    />
                <div
                    className='highlight-container'>
                    <div
                        className='highlight-palindromes bttn-unite bttn-sm'
                        onClick={this.sendBodyClick}
                        >
                        Highlight Palindromes
                    </div>
                </div>
            </div>
        )
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextInput)
