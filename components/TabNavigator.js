import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import AddEntry from './AddEntry';
import History from './History';
import { white, purple } from '../utils/colors';


const TabNavigator = createBottomTabNavigator({
  History: History,
  AddEntry: AddEntry,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'History') {
          iconName = `ios-bookmarks`;
          IconComponent = Ionicons;
        } else if (routeName === 'AddEntry') {
          iconName = `plus-square`;
          IconComponent = FontAwesome;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : purple,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

export default createAppContainer(TabNavigator);