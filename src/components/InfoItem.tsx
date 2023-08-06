import React from 'react';
import { View, StatusBar, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native';
import theme from '../theme';
import Text from './Text';

type InfoItemProps = {
  text: string;
  value: string | number;
};

const InfoItem = ({ text, value }: InfoItemProps) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold">{`${value}`}</Text>
      <Text>text</Text>
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
