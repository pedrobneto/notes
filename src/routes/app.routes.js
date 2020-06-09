import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import colors from '../../util/colors'

import HomeScreen from '../screens/HomeScreen'
import NoteScreen from '../screens/NoteScreen'

const AppStack = createStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator
        screenOptions={{
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                backgroundColor: colors.black,
            },
            headerTintColor: colors.white,
            headerTitleAlign: 'center',
            cardStyle: {
                backgroundColor: 'transparent',
                opacity: 1,
            },
        }}
    >
        <AppStack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
                title: 'Notes',
            }}
        />
        <AppStack.Screen
            name='NoteScreen'
            component={NoteScreen}
            options={{
                title: ''
            }}
        />
    </AppStack.Navigator>
)

export default AppRoutes;