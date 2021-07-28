import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { OwnSidebarMenu } from './src/navigation/OwnSidebarMenu';
// import StackNavigation from './src/navigation/StackNavigator';
// import { SidebarMenu } from './src/navigation/SidebarMenu';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      {/* <SidebarMenu /> */}
      <OwnSidebarMenu />
    </NavigationContainer>
  );
};

export default App;
