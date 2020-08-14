import React, { Component } from 'react'
import styled from 'styled-components'

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
        //console.log(`target name: ${e.target.name}`)
        //console.log(`target value: ${e.target.value}`)
        //console.log(`question before: ${this.state.question}`)
        //console.log(`theme id before: ${this.state.theme_id}`)
        this.setState({ [e.target.name]: e.target.value })
        //console.log(`question after: ${this.state.question}`)
        //console.log(`theme id after: ${this.state.theme_id}`)
    };

    submitHandler = (e) => {
        
        alert('Your question was submitted!');

        fetch('http://localhost:3000/api/v1/asks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(function (resp) {
            console.log(resp)
            return resp.json()
        })
        e.preventDefault()
    };



        /* axios.post('/api/v1/asks', this.state) 
            .then(resp => {
                console.log(resp)
                console.log(resp.data)
            })
            .catch(error => {
                console.log(error)
            })
            */
    

    render() {
        const { question, theme_id, themes } = this.state
        console.log(`themes: ${themes}`)
        const options = themes.map(item => (
            <option key={item.id} value={item.id}>{item.attributes.topic}</option>
        ))
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>
                        Question:
                        <input type="text"
                            name="question"
                            value={question}
                            onChange={this.changeHandler}
                        />
                    </label>
                        <select name="theme_id" onChange={this.changeHandler}>
                            {options}
                        </select>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default AskForm;