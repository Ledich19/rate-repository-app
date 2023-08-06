import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, TextStyle, View } from 'react-native';
import RepositoryList from './RepositoryList';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
  text: {
    color: 'grey',
    fontSize: 14,
  },
  blueText: {
    color: 'blue' ,
  },
  bigText: {
    fontSize: 24,
    fontWeight: '700' as TextStyle['fontWeight'],
  },
});

const FancyText = ({ isBlue, isBig, children }) => {
  const textStyles = [styles.text, isBlue && styles.blueText, isBig && styles.bigText];
  return <Text style={textStyles}>{children}</Text>;
};

const Main = () => {
  return (
    <View style={styles.container}>
      <FancyText isBig isBlue>
        Big blue text
      </FancyText>
      <RepositoryList />
    </View>
  );
};

export default Main;
