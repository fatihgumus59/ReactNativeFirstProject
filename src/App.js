import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Card from './components/Card';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Card title="Fatih" description="Hoşgeldin Dostum"></Card>
      <Card title="Betül" description="Hoşgeldin Dostum"></Card>
      <Card title="Yunus" description="Hoşgeldin Dostum"></Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#eBe0e0',
  },

});

export default App;
