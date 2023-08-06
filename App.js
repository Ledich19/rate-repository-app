import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, Pressable, Alert
} from 'react-native';

const BACKGROUND_COLOR = '#ffffff';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />

      <Pressable onPress={() => Alert.alert('You pressed the text!')}>
        <Text>You can press me</Text>
      </Pressable>
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
