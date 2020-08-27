import React, { Component } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Input = styled.input`
  width: 100%;
  padding: 7px;
  height: 40px;
  margin: 7px 0 14px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

const Label = styled.label`
width: 100%;
`;

const Select = styled.select`
width: 100%;
height: 40px;
margin: 7px 0 14px;
padding: 0 7px;
`

const Button = styled.button`
  width: 140px;
  padding: 10px;
  background-color: #8bacc3;
  color: #000000;
  border-radius: 3px;
  display: block;
  margin: 0 auto;
`;

const AskFormed = styled.div`
border: 1.5px solid #000000;
max-width: 300px;
line-height: 1.0;
margin: 0 auto;
padding: 1.5em;
background: #fff;
`



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

    render() {
        const { question, theme_id, themes } = this.state
        console.log(`themes: ${themes}`)
        const options = themes.map(item => (
            <option key={item.id} value={item.id}>{item.attributes.topic}</option>
        ))
        return (
            <AskFormed>
                <form onSubmit={this.submitHandler}>
                    <Label>
                        Question
                         <br />
                        <Input type="text"
                            name="question"
                            value={question}
                            onChange={this.changeHandler}
                        />
                    </Label>
                    <br />
                    <Label>
                        Topic
                         <br /> 
                        <Select name="theme_id" onChange={this.changeHandler}>
                            {options}
                            </Select>
                    </Label>
                    <br />
                        <Button type="submit" value="Submit">Submit</Button>
                </form>
            </AskFormed>
        )
    }
}
export default AskForm;