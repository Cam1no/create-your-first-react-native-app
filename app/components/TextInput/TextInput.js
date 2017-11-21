import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

const CustomeTextInput = (props) => {
  return(
    <View style={styles.container}>
      <TextInput
        autCorrect={false}
        autoCapitalize="none"
        style={styles.input}
        {...props}
      />
    </View>
  );
};

export default CustomeTextInput;
