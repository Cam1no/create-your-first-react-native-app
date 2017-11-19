import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Me extends Component {
  render(){
    const { state } = this.props.navigation;
    return(
      <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
        <Text>Me Screen</Text>
      </View>
    );
  }
}
