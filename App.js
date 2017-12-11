/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView,
  Dimensions,
  TouchableOpacity
} from 'react-native';
const {height, width} = Dimensions.get('window');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    let htmlPath = Platform.OS == 'ios' ? 'index.html' : 'file:///android_asset/index.html';
    return (
      <View style={styles.container}>
        <WebView
            ref={(ref) => {
              this.webview = ref
            }}
            automaticallyAdjustContentInsets={false}
            source={{uri: htmlPath}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            startInLoadingState={true}
            style={{height: height, width: width}}
            scrollEnabled={false}
        />
        {/* <TouchableOpacity style={{
          position: "absolute",
          left: 10,
          top: 10,
          width: 100,
          height: 100,
        }} onPress={() => {this.webview.reload()}}                  
        >
        </TouchableOpacity>                           */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});