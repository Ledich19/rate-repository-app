import React from 'react';
import { View, StatusBar, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native';
import theme from '../../theme';
import Text from '../Text';
import InfoItem from './Statisticktem';
import LanguageBtn from './LanguageBtn';

type ItemProps = {
  fullName: string;
  description: string;
  language: string;
  forksCount: number;
  stargazersCount: number;
  ratingAverage: number;
  reviewCount: number;
  ownerAvatarUrl: string;
};

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}: ItemProps) => {
  return (
    <View style={styles.item}>
      <View style={styles.container}>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.photo} />
        <View style={styles.nameContainer}>
          <Text style={styles.fullName}>{fullName}</Text>
          <Text>{description}</Text>
          <LanguageBtn language={language}></LanguageBtn>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <InfoItem value={stargazersCount} text="Stars"></InfoItem>
        <InfoItem value={forksCount} text="Forks"></InfoItem>
        <InfoItem value={reviewCount} text="Reviews"></InfoItem>
        <InfoItem value={ratingAverage} text="Rating"></InfoItem>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: theme.borders.radius,
  },
  nameContainer: {
    paddingLeft: 10,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  fullName: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
});

export default RepositoryItem;
