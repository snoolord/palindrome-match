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
        this.state = {
            body: [],
        }
        this.flagPalindromes = this.flagPalindromes.bind(this)
        this.sendBody = this.sendBody.bind(this)
    }

    flagPalindromes(e) {
        // split up each word and find out if they're palindromes
        let currentBody = e.currentTarget.value.split(' ')
        currentBody = currentBody.map(word => {
            return {
                word: word,
                palindrome: this.isPalindrome(word)
            }
        })
        this.setState({body: currentBody})
    }

    sendBody() {
        console.log(this.state.body)
        this.props.sendBody(this.state.body)
    }

    isPalindrome(str) {
        return str === str.split('').reverse().join('')
    }

    render() {
        return (
            <div className='text-input'>
                <input onChange={this.flagPalindromes}/>
                <div
                    className='highlight-palindromes'
                    onClick={this.sendBody}
                    >
                    Highlight Palindromes
                </div>
                <TextOut/>
            </div>
        )
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextInput)
