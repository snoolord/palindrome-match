import React, { Component } from 'react'
import './text-output.scss'

import { connect } from 'react-redux'

class TextOut extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let body = this.props.body.body
        return (
            <div className='text-output'>
                {body.map((word, index) => {
                    return (
                        <div key={index} className={word.palindrome ? 'highlight output' : 'output'}>
                            {word.word}
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    body: state.body
})

export default connect(
    mapStateToProps
)(TextOut)
