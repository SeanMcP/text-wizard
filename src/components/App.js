import React, { Component } from 'react';
import Word from './Word';

class App extends Component {
    constructor() {
        super();

        this.state = {
            rawText: "Yesterday, Abraham Lincoln invited me to dinner. I told him, \"That sounds great!\"",
            textArray: [],
        };
    }

    componentDidMount() {
        if (!this.state.textArray.length) {
            this.setState({ textArray:
                this._convertRawString(this.state.rawText)
            });
        }
    }

    render() {
        return (
            <div className="app">
                <section className="wizard">
                    <h1>Text Wizard</h1>
                </section>
                <section className="output">
                    {this._renderText()}
                </section>
            </div>
        );
    }

    _convertRawString = (string) => {
        const array = string.split(' ');

        return array.map((word, index) => ({
            display: '',
            id: `${word}-${index}`,
            original: word,
            wizardId: ''
        }));
    }

    _renderText = () => {
        return this.state.textArray.map(word => (
            <Word
                key={word.id}
                { ...word }
            />
        ));
    }
}

export default App;
