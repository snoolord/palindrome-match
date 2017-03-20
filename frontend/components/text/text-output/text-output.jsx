import React, { Component } from 'react'
import './text-output.scss'
import './word/word.jsx'
import Word from './word/word.jsx'
import { connect } from 'react-redux'

class TextOut extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let body = this.props.body.body.slice(),
            words = body.map((word, index) => {
                return <Word key={index+word} word={word}/>
            })

        return (
            <div className='text-output'>
                <div className='words-container'>
                    {words}
                </div>
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
