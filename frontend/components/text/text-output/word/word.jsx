import React, { Component } from 'react'

class Word extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        let word = this.props.word
        return (
            <div className={word.palindrome ? 'highlight output' : 'output'}>
                {word.word}
            </div>
        )
    }
}

export default Word
