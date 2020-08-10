import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

class AskForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            question: '',
            theme_id: '',
            themes: []
        }
    };

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/themes.json')
            .then(response => response.json())
            .then(resp => {
                console.log(resp)
                console.log(resp.data)
                this.setState({ themes: resp.data })
            });

    }



    changeHandler = (e) => {
        console.log(`target name: ${e.target.name}`)
        console.log(`target value: ${e.target.value}`)

        console.log(`question before: ${this.state.question}`)
        console.log(`theme id before: ${this.state.theme_id}`)
        this.setState({ [e.target.name]: e.target.value })
        console.log(`question after: ${this.state.question}`)
        console.log(`theme id after: ${this.state.theme_id}`)
    };

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3000/api/v1/asks', this.state
            .then(resp => {
                console.log(resp)
            })
            .catch(error => {
                console.log(error)
            })

        )
    };

    render() {
        const { question, theme_id, themes } = this.state
        console.log(`themes: ${themes}`)
        const options = themes.map(item => (
            <option value={item.id}>{item.attributes.topic}</option>
        ))
        return (
            <div className="wrapper">
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text"
                            name="question"
                            value={question}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <select name="theme_id" onChange={this.changeHandler}>
                            {options}
                        </select>
                    </div>
                </form>
                <button type="submit">Submit</button>
            </div>
        )
    }
}

export default AskForm;