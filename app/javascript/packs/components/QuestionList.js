import React, { Component } from 'react'
import HomeWrapper from './HomeWrapper'
//import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
//import { EVERYTHING } from '../everythingAction'
import { asksFetchData } from '../actions/questions'
import { Link } from 'react-router-dom'
import Ask from './Theme/Ask'
import styled from 'styled-components'

const BackBtn = styled.button`
border: 2px solid black;
background-color: #eef5b3;
max-width: 100px;
margin-left: auto;
margin-right: auto;
color: black;
padding: 10px 10px;
border-radius: 3px;
display: block;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-gap: 20px;
width: 100%;
padding: 30px;
margin-left: auto;
margin-right: auto;
text-align: center;
`


class QuestionList extends Component {
    componentDidMount() {
        const url = 'http://localhost:3000/api/v1/asks'
        this.props.fetchData(url);
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the questions</p>
        }

        if (this.props.isLoading) {
            return <p>Loading...</p>
        }

        const ShowGrid = this.props.asks.map(item => {
            return (
                <Ask
                    key={item.id}
                    id={item.id}
                    question={item.question}
                />
            )
        })

        return (
            <div>
                <HomeWrapper />
                <Grid>
                    {ShowGrid} 
                </Grid>
                    <br></br>
                    <Link to='/'>
                        <BackBtn type="button" className="Homepage-button">Back</BackBtn>
                    </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        asks: state.asks,
        hasErrored: state.asksHasErrored,
        isLoading: state.asksIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(asksFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);









//<ul>
//    {this.props.asks.map((ask) => (
//        <li key={ask.id}
//            id={ask.id}
//            question={ask.question}
//        />
//    ))}
//</ul>




//class AllQuestions extends Component {
//componentDidMount() {
// this.props.everythingAllQuestions
//}
//    render() {
//        return <h2>Hi, I am a Car!</h2>;
//    }
//}

//function mapStateToProps(state) {
//    return {
//        everything: state.everything
 //   }
//}

//function mapDispatchToProps(dispatch) {
//    return {
 //       everythingAllQuestions: bindActionCreators(everythingAllQuestions, dispatch) 
 //   }
//}