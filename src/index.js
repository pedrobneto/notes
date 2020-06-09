import 'react-native-gesture-handler';
import React from 'react';

import { Provider } from 'react-redux'
import store from './redux/store/index'

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes/index'

const MainNavigation = () => (
    <Provider store={store}>
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    </Provider>
)

export default MainNavigation;