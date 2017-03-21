import React, { Component } from 'react'
const Word = ({word}) => {
    return (
        <div className={word.palindrome ? 'highlight output' : 'output'}>
            {word.word}
        </div>
    )
}

export default Word
