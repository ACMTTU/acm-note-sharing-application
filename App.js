import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Tabs from './components/Tabs'

export default function App() {
  return (
    <Tabs/>
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
