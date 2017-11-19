import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { Button, Platform } from 'react-native';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import Me from '../screens/Me';
import NewContact from '../screens/NewContact';
import Icon from 'react-native-vector-icons/Ionicons';
import { capitalizeFirstLetter } from '../helpers/string';

const LeftDrawerButton = ({ navigation }) => {
  if (Platform.OS === 'android'){
    return <Button title='open' onPress={() => navigation.navigate('DrawerOpen')} />;
  }
  return null;
}

export const ContactsStack = StackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: (props) => ({
      headerLeft: <LeftDrawerButton {...props}/>,
      title: 'Contacts',
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      headerTitle: `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`,
    }),
  },
});

export const NewContactsStack = StackNavigator({
  NewContact: {
    screen: NewContact,
    navigationOptions: (props) => ({
      headerLeft: <LeftDrawerButton {...props}/>,
      headerTitle: 'NewContacts',
    }),
  },
});

export const MeStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: (props) => ({
      headerLeft: <LeftDrawerButton {...props}/>,
      headerTitle: 'Me',
    }),
  },
});

export const Tabs = TabNavigator({
  Contacts: {
    screen: ContactsStack,
    navigationOptions: {
      tabBarLabel: 'Contact',
      tabBarIcon: ({ tintColor }) => <Icon name='ios-list' size={35} color={tintColor}/>,
    },
  },
  NewContact: {
    screen: NewContactsStack,
    navigationOptions: {
      tabBarLabel: 'NewContact',
      tabBarIcon: ({ tintColor }) => <Icon name='ios-add' size={25} color={tintColor}/>,
    },
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name='ios-contact' size={25} color={tintColor}/>,
    },
  },
});

export const Drawer = DrawerNavigator({
  Contacts: {
    screen: ContactsStack,
    navigationOptions: {
      DrawerLabel: 'Contact',
      DrawerIcon: ({ tintColor }) => <Icon name='ios-list' size={35} color={tintColor}/>,
    },
  },
  NewContact: {
    screen: NewContactsStack,
    navigationOptions: {
      DrawerLabel: 'NewContact',
      DrawerIcon: ({ tintColor }) => <Icon name='ios-add' size={25} color={tintColor}/>,
    },
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      DrawerLabel: 'Me',
      DrawerIcon: ({ tintColor }) => <Icon name='ios-contact' size={25} color={tintColor}/>,
    },
  },
});
