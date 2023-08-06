import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import theme from '../../theme';
import Text from '../Text';

type ItemProps = {
  language: string;
};

const LanguageBtn = ({ language }: ItemProps) => {
  return (
    <Pressable style={styles.language}>
      <Text color="textSecondary" fontSize="subheading">
        {language}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  language: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borders.radius,
    color: theme.colors.textSecondary,
    alignSelf: 'flex-start',
    height: 35,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default LanguageBtn;
