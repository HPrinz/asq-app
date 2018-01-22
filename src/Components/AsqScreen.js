import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { Text, TextInput, View, StyleSheet, Button, Alert, Container, ScrollView } from 'react-native';
import { connect } from "react-redux";
import { Font } from 'expo';
import { loadQuestions } from "../Actions/actionCreator";

import AsqHeader from './AsqHeader.js'
import QuestionView from './QuestionView';

class AsqScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      question: "",
    };
  }

  static navigationOptions = {
    title: 'ASQ*',
  };

  fetchQuestions = () => {
    return fetch('https://intense-ridge-99027.herokuapp.com/api/questions')
      .then((response) => response.json())
      .then((responseJson) => {
        // TODO loading
        this.props.loadQuestions({ questions: responseJson });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onAsqSelected = () => {

    fetch('https://intense-ridge-99027.herokuapp.com/api/questions', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: this.state.question,
        username: this.props.username,
      }),
    }).then(() => {
      this.fetchQuestions();
    }).catch((error) => {
      console.error(error);
    });;
  }

  componentDidMount() {
    return this.fetchQuestions();
  }

  render() {

    return (
      <View style={styles.parent}>

        <Header
          outerContainerStyles={{ height: 100, backgroundColor: "white" }}
          centerComponent={<AsqHeader />}
        />

        <ScrollView >
          <QuestionView></QuestionView>
          <Text>{JSON.stringify(this.props.questions, null, 2)}</Text>

          <View style={styles.asqcontainer} >
            <TextInput
              style={styles.qbox}
              multiline={true}
              numberOfLines={4}
              onChangeText={(question) => this.setState({ question })}
              value={this.state.question}
              placeholder="Asq your question here"
            />
            <Button
              style={styles.asqButton}
              onPress={this.onAsqSelected}
              title="ASQ"
              color="#841584"
              fontSize="45pt"
            />
          </View>
        </ScrollView >

      </View>
    );
  }
}

const styles = StyleSheet.create({

  parent: {
    flex: 1
  },

  asqcontainer: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center'
  },

  headercontainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  note: {
    padding: 10,
    fontSize: 12
  },

  qbox: {
    fontSize: 15,
    flex: 1,
    flexGrow: 1,
    height: 100,
    backgroundColor: "white",
    padding: 5,
    borderWidth: 1,
    borderColor: '#CCCCCC'
  },

  asqButton: {
    fontWeight: "900",
    fontSize: 45
  }

});

const mapStateToProps = state => ({
  username: state.LoginReducer.username
});

const mapDispatchToProps = {
  loadQuestions
};

const Asq = connect(mapStateToProps, mapDispatchToProps)(AsqScreen);
export default Asq;