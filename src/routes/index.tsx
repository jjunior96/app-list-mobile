import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import AddItem from '../pages/AddItem';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#162736'},
      }}>
      <Auth.Screen name="Home" component={Home} />
      <Auth.Screen name="AddItem" component={AddItem} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
