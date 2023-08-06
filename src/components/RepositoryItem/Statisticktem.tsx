import React from 'react';
import { View, StatusBar, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native';
import theme from '../../theme';
import Text from '../Text';

type InfoItemProps = {
  text: string;
  value: number;
};

const InfoItem = ({ text, value }: InfoItemProps) => {
  const valueForShow = (value) => {
    const valueString = value.toString();
    if (valueString.length < 3) {
      return valueString;
    }
    return `${(value / 1000).toFixed(1)}k`;
  };

  return (
    <View style={styles.container}>
      <Text fontWeight="bold">{valueForShow(value)}</Text>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default InfoItem;
