import React, { PropTypes } from 'react';
import { View, TouchableOpacity, Text, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import styles, { ICON_SIZE } from './styles';

const Row = ({ label, body, actions = [] }) => {
  return (
    <View style={styles.actionRow}>
      <View style={styles.actionInfo}>
        <Text style={styles.actionLabel}>{label}</Text>
        <Text style={styles.actionBody}>{body}</Text>
      </View>
      <View style={styles.actionIcons}>
        {actions.map((action, index) => (
          <TouchableOpacity
            onPress={action.onPress}
            key={index}
          >
            <Icon
              style={styles.actionIcon}
              color={colors.link}
              size={ICON_SIZE}
              name={Platform.OS === 'ios' ? action.iconIOS : action.iconAndroid}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default Row;
