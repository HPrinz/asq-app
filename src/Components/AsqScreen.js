import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { Text, TextInput, View, StyleSheet, Button, Alert, Container, ScrollView } from 'react-native';
import { Font } from 'expo';

import AsqHeader from './AsqHeader.js'

export default class AsqScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      question: "",
    };
  }

  static navigationOptions = {
    title: 'ASQ*',
  };

  _onAsqSelected() {
    Alert.alert('Your question has been asked!')
  }

  componentDidMount() {
    return fetch('http://localhost:8080/api/questions')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          // Todo loading
          questions: responseJson,
        }, function () {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    return (
      <View style={{ flex: 1 }}>

        <Header
          outerContainerStyles={{ height: 100, backgroundColor: "white" }}
          centerComponent={<AsqHeader />}
        />

        <ScrollView >
          <Text>{JSON.stringify(this.state.questions, null, 2)}</Text>

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
              onPress={this._onAsqSelected}
              title="ASQ"
              color="#841584"

            />
          </View>
          <View style={styles.asqcontainer} />
        </ScrollView >

      </View>
    );
  }
}

const styles = StyleSheet.create({
  asqcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20
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
    fontSize: 20,
    flex: 1,
    height: 100,
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC'
  },

  asqButton: {
    fontWeight: "900"
  }

});
