import React, { Component } from 'react'

class TextInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            body: [],
        }
        this.flagPalindromes = this.flagPalindromes.bind(this)
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

    render() {
        return (
            <div>
                <input onChange={this.flagPalindromes}/>
            </div>
        )
    }
}

export default TextInput
