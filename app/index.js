import React from 'react';
import { Platform } from 'react-native';
import Contacts from './screens/Contacts';
import { Tabs, Drawer } from './config/routes';

const App = () => {
  if (Platform.OS === 'ios'){
    return <Tabs />;
  }
  return <Drawer />;
}

export default App;
