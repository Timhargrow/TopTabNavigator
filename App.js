import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from
'react-navigation-tabs';

export default class App extends Component {
  render(){
    return(
      <SafeAreaView style={{
         flex: 1, backgroundColor: 'white',
       }}>
      <AppTabNavigator/>
      </SafeAreaView>
    )
  }
}

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home
        </Text>
      </View>
    );
  }
}
class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Settings
        </Text>
      </View>
    );
  }
}
const AppTabNavigator = createMaterialTopTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <View>
        <Icon name= "ios-home" color= {tintColor} size={24} />
        </View>
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
    tabBarLabel: 'Settings',
    tabBarIcon: ({tintColor}) => (
      <View>
      <Icon name= "ios-settings" color= {tintColor} size={24} />
      </View>
    )
  }}
}, {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  navigationOptions:{
    tabBarVisible: true
  },
  tabBarOptions:{
    activeTintColor: 'orange',
    inactiveTintColor: 'grey',
    style:{
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderTopColor: 'grey'
    },
  indicatorStyle: {
    height: 0
  },
  showIcon: true
}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
