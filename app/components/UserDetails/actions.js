import React from 'react';
import { View, Platform, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import styles, { ICON_SIZE } from './styles';
import colors from '../../config/colors';
import { toPhoneNumber } from '../../helpers/string';

const Actions = ({ email }) => {
  return (
    <View style={styles.actionContainer}>
      <View style={styles.actionRow}>
        <View style={styles.actionInfo}>
          <Text style={styles.actionLabel}>email</Text>
          <Text style={styles.actionBody}>{email}</Text>
          <View style={styles.actionIcons}>
            <TouchableOpacity
              onPress={() => null}
            >
            <Icon
              style={styles.actionIcon}
              color={colors.link}
              size={ICON_SIZE}
              name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'}
            />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Actions;
