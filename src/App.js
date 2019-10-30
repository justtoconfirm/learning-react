import React, { Component } from 'react'

import Table from './Table/Table'
import Api from './Api'

class App extends Component {
    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor'
            },
            {
                name: 'Mac',
                job: 'Bouncer'
            },
            {
                name: 'Dee',
                job: 'Actress'
            }            
        ],
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

    render() {
        const { characters } = this.state

        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Api />
            </div>
        )
    }
}

export default App