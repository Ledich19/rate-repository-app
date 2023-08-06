import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './src/components/Main';

const BACKGROUND_COLOR = '#ffffff';

const App = () => {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
