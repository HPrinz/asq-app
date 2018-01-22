import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from "react-redux";

class QuestionView extends Component {

    renderQuestions = () => {
        return this.props.questions.map(function (q, i) {
            return (
                <View key={i}>
                    <Text>{q.username}:</Text>
                    <View>
                        <Text>{q.question}</Text>
                    </View>
                </View>
            );
        });
    }

    render() {
        return (
            <View >
                {this.renderQuestions()}
            </View >
        )
    }
}

const styles = StyleSheet.create({
    // TODO
})

const mapStateToProps = state => ({
    questions: state.QuestionsReducer.questions
});

const Questions = connect(mapStateToProps)(QuestionView)
export default Questions