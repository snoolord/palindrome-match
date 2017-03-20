import React, { Component } from 'react';

// components
import Header from './header/header.jsx'
import TextInput from './text/text-input/text-input.jsx'
import TextOut from './text/text-output/text-output.jsx'

class App extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <TextInput/>
                <TextOut/>
            </div>
        )
    }
}

export default App
