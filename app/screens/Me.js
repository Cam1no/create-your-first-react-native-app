import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Header, Actions, Info } from '../components/UserDetails';
import colors from '../config/colors';
import { me } from '../config/data';

export default class Me extends Component {
  render(){
    return(
      <ScrollView style={ { backgroundColor: colors.background } }>
        <Header {...me} />
        <Actions {...me} />
        <Info {...me} />
      </ScrollView>
    );
  }
}
