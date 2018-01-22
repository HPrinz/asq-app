import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { Text, TextInput, View, StyleSheet, Button, Alert, Container, ScrollView, TouchableOpacity } from 'react-native';
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
    // TODO
    header: null
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
          outerContainerStyles={{ height: 100, backgroundColor: "white", borderWidth: 0 }}
          centerComponent={<AsqHeader />}
        />

        <View style={styles.asqcontainer} >
          <TextInput
            style={styles.qbox}
            multiline={true}
            numberOfLines={4}
            fontSize={20}
            onChangeText={(question) => this.setState({ question })}
            value={this.state.question}
            placeholder="<your question here/>"
          />

          <TouchableOpacity
            onPress={this.onAsqSelected}
            style={styles.touchableStyles}
          >
            <Text style={{ color: "#841584", fontSize: 22, textAlign: "center", fontWeight: "600" }}>ASQ your question</Text>
          </TouchableOpacity>
        </View>

        <ScrollView >

          <QuestionView></QuestionView>
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
    padding: 10,
    flex: 1,
    backgroundColor: '#ffffff'
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
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC'
  },

  touchableStyles: {
    marginTop: 0,
    backgroundColor: "white",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5
  },

});

const mapStateToProps = state => ({
  username: state.LoginReducer.username
});

const mapDispatchToProps = {
  loadQuestions
};

const Asq = connect(mapStateToProps, mapDispatchToProps)(AsqScreen);
export default Asq;