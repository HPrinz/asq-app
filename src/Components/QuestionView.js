import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from "react-redux";

class QuestionView extends Component {

    renderQuestions = () => {
        return this.props.questions.map(function (q, i) {
            return (
                <View key={i} style={styles.container}>
                    <Text style={styles.username}>{q.username}:</Text>
                    <View>
                        <Text style={styles.question}>{q.question}</Text>
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

    username: {
        fontSize: 10,
        color: "#7f7f7f"
    },
    container: {
        padding: 10
    },
    question: {
        fontSize: 20,
        fontWeight: "500"
    }
})

const mapStateToProps = state => ({
    questions: state.QuestionsReducer.questions
});

const Questions = connect(mapStateToProps)(QuestionView)
export default Questions