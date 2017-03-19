import React, { Component } from 'react'
import TextOut from '../text-output/text-output.jsx'

import { connect } from 'react-redux'
import { sendBody } from '../text-actions'



class TextInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            body: [],
        }
        this.flagPalindromes = this.flagPalindromes.bind(this)
        this.displayTextOutput = this.displayTextOutput.bind(this)
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

    isPalindrome(str) {
        return str === str.split('').reverse().join('')
    }

    displayTextOutput() {
        this.setState({textOutput: true})
    }

    textOutput() {
        if (this.state.textOutput) {
            return (
                <div>
                    <TextOut body={this.state.body}/>
                </div>
            )
        } else {
            return <div></div>
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <input onChange={this.flagPalindromes}/>
                <button onClick={this.displayTextOutput}/>
                {this.textOutput()}

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendBody: (body) => dispatch(sendBody(body))
    }
}

export default connect(
    mapDispatchToProps
)(TextInput)

const style = {
    background: 'background: yellow'

}
