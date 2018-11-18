import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Setting extends React.Component{
  render(){
    return(
      <View>
          <Text style={nbStyles.subtitle}>
            Setting
          </Text>
        </View>
    );
  }
}

const nbStyles = {
  subtitle: {
    textAlign: 'center',
    color: 'blue'
  },
  btn: {
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 25,
  },
}