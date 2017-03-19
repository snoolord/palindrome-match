import React, { Component } from 'react'
import './text-output.scss'

class TextOut extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let body = this.props.body
        console.log(body)
        return (
            <div className='text-output'>
                {body.map((word, index) => {
                    return (
                        <div className={word.palindrome ? 'highlight output' : 'output'}>
                            {word.word}
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default TextOut
