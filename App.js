import React from 'react';
//navigation
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

//importing Screens
import HomeScreen from './Screens/HomeScreen'
import RegisterUser from './Screens/RegisterUser';
import Update from './Screens/Update';
import ViewScreen from './Screens/ViewScreen';
import ViewAll from './Screens/ViewAll';
import Delete from './Screens/Delete';

//creating navigation variable
const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home'>
        <Stack.Screen 
          name = 'Home'
          component = {HomeScreen}
        />
        <Stack.Screen 
          name = 'Register'
          component = {RegisterUser}
        />
        <Stack.Screen 
          name = 'Update'
          component = {Update}
        />
        <Stack.Screen 
          name = 'View'
          component = {ViewScreen}
        />
        <Stack.Screen 
          name = 'ViewAll'
          component = {ViewAll}
        />
        <Stack.Screen 
          name = 'Delete'
          component = {Delete}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;