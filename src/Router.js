import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './component/Login';
import LocationCell from './component/LocationCell';
import TestSpeedNetwork from './component/TestSpeedNetwork';
import ListCellTested from './component/ListCellTested';
import ListCellReported from './component/ListCellReported';
import Notifications from './component/Notification';
import SendReport from './component/SendReport';
import ReportDetail from './component/ReportDetail';

export const StackTested = createStackNavigator({
    ListCellTested: {
        screen: ListCellTested,
    },
    SendReport: {
        screen: SendReport,
    }
},
    {
        headerMode: 'none',
    });

export const StackReported = createStackNavigator({
    ListCellReported: {
        screen: ListCellReported,
    },
    ReportDetail: {
        screen: ReportDetail,
    }
},
    {
        headerMode: 'none',
    });

export const BottomTab = createBottomTabNavigator({
    'Bản đồ': {
        screen: LocationCell,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name='place' color={tintColor} size={25} />
            )
        },
    },
    'Test mạng': {
        screen: TestSpeedNetwork,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name='network-check' color={tintColor} size={25} />
            )
        }
    },
    'Gửi PA': {
        screen: StackTested,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name='near-me' color={tintColor} size={25} />
            )
        }
    },
    'Quản lý PA': {
        screen: StackReported,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name='assignment' color={tintColor} size={25} />
            )
        }
    },
    'Thông báo': {
        screen: Notifications,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name='notifications-none' color={tintColor} size={25} />
            )
        }
    },
},
    {
        tabBarOptions: {
            activeTintColor: '#5ec3f2',
            inactiveTintColor: 'grey'
        }
    });

export const Router = createAppContainer(createStackNavigator({
    Login: {
        screen: Login,
    },
    BottomTab: {
        screen: BottomTab,
    }
},
    {
        headerMode: 'none',
    }));