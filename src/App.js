import React, { Component } from 'react'

import Table from './Table/Table'
import Api from './Api'
import Form from './Form';

class App extends Component {
    state = {
        characters: [],
    };

    // Method - remove character
    removeCharacter = index => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    };

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state

        return (
            <div className="container">
                <Table 
                    characterData={characters} 
                    removeCharacter={this.removeCharacter} />
                <Api />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App