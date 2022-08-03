import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import React from 'react';
import CardView from './CardView';
import Card from '../../../components/Card';

type Props = {
  data: Array<Card>;
};

type Card = {
  title: string;
  subtitle_1: string;
  subtitle_2: string;
  content: string;
  username: string;
  date: string;
  userimage: string;
  contentimage: string;
};

const LifestyleScreen = (props: Props) => {
  return (
    <>
      <FlatList
        numColumns={1}
        data={props.data}
        renderItem={({item}: {item: Card}) => (
          <View style={styles.card}>
            <CardView card={item} />
          </View>
        )}></FlatList>
    </>
  );
};

export default LifestyleScreen;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingHorizontal:5,
    paddingVertical:5,
  },
});
