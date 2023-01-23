import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListScreen from '../screens/ListScreen';
import EditNoteScreen from '../screens/EditNoteScreen';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#222',
      },
      headerTintColor: '#FFF',
    }}>
    <MainStack.Screen name="List" component={ListScreen} />
    <MainStack.Screen name="EditNote" component={EditNoteScreen} />
  </MainStack.Navigator>
);
