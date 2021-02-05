import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
('');



export default function App() {

displayalert=()=>{
  alert("My name is sarim")
}

  return (
    <View style={{ width: 200, height: 100, marginTop: 80 }}>
      <Button
        title="sound"
        color="red"
      />

     <Button
        title="sound"
        color="limegreen"
      />

     <Button
        title="sound"
        color="blue"
      />

     <Button
        title="sound"
        color="cyan"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
