import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Header, Actions } from '../components/UserDetails';
import colors from '../config/colors';

export default class Details extends Component {
  render(){
    const contact = this.props.navigation.state.params;

    return(
      <ScrollView style={ { backgroundColor: colors.background } }>
        <Header {...contact}/>
        <Actions {...contact}/>
      </ScrollView>
    );
  }
}
