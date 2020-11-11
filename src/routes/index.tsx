import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import List from '../pages/List';
import Cart from '../pages/Cart';
import AddItem from '../pages/AddItem';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#162736'},
      }}>
      <Auth.Screen name="List" component={List} />
      <Auth.Screen name="Cart" component={Cart} />
      <Auth.Screen name="AddItem" component={AddItem} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
