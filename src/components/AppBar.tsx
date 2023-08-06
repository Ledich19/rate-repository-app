import { View, StyleSheet, Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 20,
    color: theme.colors.textSecondary,
    backgroundColor: theme.colors.panelColor,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text  color="textSecondary" fontWeight="bold" fontSize="title">
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
