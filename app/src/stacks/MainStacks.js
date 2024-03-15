import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stasck.Screen name="Preload" component={Preload} />
        <Stasck.Screen name="SignIn" component={SignIn} />
        <Stasck.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
);