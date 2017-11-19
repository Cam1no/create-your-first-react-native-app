import React, { PropTypes } from 'react';
import { View } from 'react-native';
import styles from './styles';
import moment from 'moment';
import Row from './Row';
import { capitalizeFirstLetter } from '../../helpers/string';

const Info = ({ login, dob, location, registered }) => {
  return (
    <View style={styles.infoContainer}>
      <Row
        label='city'
        body={capitalizeFirstLetter(location.city)}
      />
      <Row
        label='birthday'
        body={moment(dob).format('MMM Do, YYYY')}
      />
      <Row
        label='registered'
        body={moment(registered).format('MMM Do, YYYY')}
      />
      <Row
        label='username'
        body={capitalizeFirstLetter(login.username)}
      />
    </View>
  );
}

export default Info;
