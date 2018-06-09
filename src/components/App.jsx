import React, { Component } from 'react';
import Input from './Input';
import Word from './Word';

class App extends Component {
    constructor() {
        super();

        this.state = {
            input: {},
            rawText: "Yesterday, Abraham Lincoln invited me to dinner. I told him, \"That sounds great!\"",
            textArray: [],
            selectedWiz: '',
        };
    }

    componentDidMount() {
        if (!this.state.textArray.length) {
            this.setState({
                textArray:
                    this._convertRawString(this.state.rawText)
            });
        }
    }

    render() {
        return (
            <div className="app">
                <section className="wizard">
                    <h1>Text Wizard</h1>
                    <Input
                        name="first_name"
                        onChange={this._handleInput}
                        select={this._handleSelectWiz}
                        state={this.state}
                    />
                    <p>{this.state.selectedWiz}</p>
                </section>
                <section className="output">
                    <p>{this._renderText()}</p>
                </section>
            </div>
        );
    }

    _convertRawString = (string) => {
        const array = string.split(' ');

        return array.map((word, index) => ({
            id: `${word}-${index}`,
            original: word,
            wizId: ''
        }));
    }

    _handleSelectWiz = (inputId) => {
        this.setState({ selectedWiz: inputId });
    }

    _handleSetWordWiz = (event) => {
        if (this.state.selectedWiz) {
            this.setState({ textArray: this._updateWizId(event.target.id) });
        }
    }

    _handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    _renderText = () => {
        return this.state.textArray.map(word => (
            <Word
                key={word.id}
                {...word}
                handleClick={this._handleSetWordWiz}
                value={this.state[word.wizId]}
            />
        ));
    }

    _updateWizId = (foundId) => {
        const { textArray, selectedWiz } = this.state;
        return [...textArray].map(word => {
            if (word.id === foundId) {
                word.wizId = selectedWiz;
            }
            return word;
        });
    }
}

export default App;
