import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
//import { Font } from 'expo';

class AsqHeader extends Component {

    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        //await Font.loadAsync({
        //    'Lato-black': require('../assets/fonts/Lato_black.ttf'),
        //});

        //this.setState({ fontLoaded: true });
    }

    render() {
        return (

            <View style={styles.viewStyle}>
                {
                    // this.state.fontLoaded ? (
                    //    <Text style={styles.asqlato}>ASQ*</Text>
                    //) : (
                    <Text style={styles.asq}>ASQ*</Text>
                    //   )
                }
            </View >
        )
    }
}

const styles = StyleSheet.create({
    asqlato: {
        fontSize: 35,
        fontFamily: 'Lato-black'
    },
    asq: {
        fontSize: 35,
        fontWeight: "900"
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
    }

})
export default AsqHeader