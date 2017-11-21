import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { TextInput } from '../components/TextInput'

import colors from '../config/colors';

const fields = [
  { placeholder: 'First Name', stateKey: 'firstName' },
  { placeholder: 'Last Name', stateKey: 'lastName' },
  { placeholder: 'Email', stateKey: 'email', keyboardType: 'email-address' },
  { placeholder: 'Mobile Phone', stateKey: 'mobilePhone' },
  { placeholder: 'Home Phone', stateKey: 'homePhone' },
  { placeholder: 'City', stateKey: 'city' },
  { placeholder: 'Birthday', stateKey: 'birthday' },
  { placeholder: 'Registered', stateKey: 'registered' },
  { placeholder: 'Username', stateKey: 'username' },
];

export default class NewContact extends Component {
  constructor(props){
  	super(props);
  	this.state = {

    };
  }

  onInputChange = (text, stateKey) => {
    const mod =  {};
    mod[stateKey] = text;
    this.setState(mod);
  }
  render(){
    return(
      <ScrollView style={{ backgroundColor: colors.background }}>
        {
          fields.map((field) => (
            <TextInput
              key={field.stateKey}
              onChangeText={(text) => this.onInputChange(text, field.stateKey)}
              {...field}
            />
          ))
        }
      </ScrollView>
    );
  }
}
