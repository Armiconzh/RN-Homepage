import React from 'react';
import {TabNavigator} from 'react-navigation';

import {Homepage} from './Components/Homepage';
import {Hero} from './Components/Heroes';
import {Setting} from './Components/Setting';

const Tab = TabNavigator({
  Home: {
    Screen: Home,
  },
  Hero: {
    Screen: Heroes,
  },
  Setting: {
    Screen: Setting,
  }
},{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: '#f8f8f8',
    activeBackgroundColor: '#586589',
    inactiveTintColor: '#1234',
    style:{
      backgroundColor:'#12345',
    },

    labelStyle: {
      fontSize: 13,
      color: 'black',
      padding: 6,
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Tab/>
    );
  }
}