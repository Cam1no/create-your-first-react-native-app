import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { TextInput } from '../components/TextInput'

import colors from '../config/colors';

export default class NewContact extends Component {
  render(){
    return(
      <ScrollView style={{ backgroundColor: colors.background }}>
        <TextInput
          placeholder='First Name ...'
        />
      </ScrollView>
    );
  }
}
