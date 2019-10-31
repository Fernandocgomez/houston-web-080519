import React from 'react';
import { Container, Item, Input, Content, Header, Card, CardItem, Body, Icon } from 'native-base';
import { View, Text } from 'react-native'
import { Router, Route } from './Router'
import { CameraScreen } from './CameraScreen'

export default () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <CameraScreen />
    </View>
  )
}

const About = () => {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  )
}