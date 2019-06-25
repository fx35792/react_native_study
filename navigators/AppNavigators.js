import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {Button} from 'react-native';
import Login from '../pages/Login';
import HomePage from '../pages/HomePage';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';


export const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage
    },
    Page1: {
        screen: Page1,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}页面名`
        })
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            title: 'This is Page2'
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: (props) => {
            const {navigation} = props;
            const {state, setParams} = navigation;
            const {params} = state;
            return {
                title: params.title ? params.title : 'This is Page3',
                headerRight: (
                    <Button
                        title={params.mode === 'edit' ? '保存' : '编辑'}
                        onPress={() =>
                            setParams({
                                mode: params.mode === 'edit' ? '' : 'edit'
                            })
                        }
                    />
                )
            }
        }
    },
    Page4: {
        screen: Page4,
        navigationOptions: {
            title: 'This is Page4'
        }
    },
    Page5: {
        screen: Page5,
        navigationOptions: {
            title: 'This is Page5'
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'This is Login'
        }
    }
});

