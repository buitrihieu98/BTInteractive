import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InteractiveComponent from "./src/Components/InteractiveComponent";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>alo alo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
