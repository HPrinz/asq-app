import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class AsqHeader extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'center'
            }}>
                <Text style={{ fontSize: 45, fontWeight: "bold" }}>ASQ</Text>
                <Text style={{ fontSize: 45, padding: 2 }}>*</Text>
            </View>
        )
    }
}
export default AsqHeader