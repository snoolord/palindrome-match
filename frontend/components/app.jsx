import React, { Component } from 'react';

// components
import Header from './header/header.jsx'
import TextInput from './text-input/text-input.jsx'

class App extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <TextInput/>
            </div>
        )
    }
}

export default App
