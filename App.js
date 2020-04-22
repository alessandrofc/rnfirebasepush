import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import messaging from '@react-native-firebase/messaging';

export default class App extends Component {
  async componentDidMount() {
    await messaging().registerDeviceForRemoteMessages();
    await messaging().requestPermission();
    messaging().onMessage(async remoteMessage => {
      console.log(
        'Message handled in the foreground!',
        JSON.stringify(remoteMessage),
      );
    });
  }

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
