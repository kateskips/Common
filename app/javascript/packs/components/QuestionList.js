import React, { Component } from 'react'
import HomeWrapper from './HomeWrapper'
//import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
//import { EVERYTHING } from '../everythingAction'
import { asksFetchData } from '../actions/questions'


class QuestionList extends Component {
    componentDidMount() {
        this.props.fetchData('http://localhost:3000/api/v1/asks');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the questions</p>
        }

        if (this.props.isLoading) {
            return <p>Loading...</p>
        }

        return (
            <div>
            <HomeWrapper />
            <ul>
                {this.props.asks.map((ask) => (
                    <li key={ask.id}
                        id={ask.id}
                        question={ask.question}
                    />
                ))}
            </ul>
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