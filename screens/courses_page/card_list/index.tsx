import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import React from 'react';
import CardView from './CardView';
import Card from '../../../components/Card';
import {CardType} from '../../courses_page/CoursesScreen'

type Props = {
  data: Array<CardType>;
  onPress?: () => void;
};

// type Card = {
//   title: string;
//   subtitle_1: string;
//   subtitle_2: string;
//   content: string;
//   username: string;
//   date: string;
//   userimage: string;
//   contentimage: string;
// };

const CardList = (props: Props) => {
  return (
    <>
      <FlatList
        numColumns={1}
        data={props.data}
        renderItem={({item}: {item: CardType}) => (
          <View style={styles.card}>
            <CardView card={item} onPress={props.onPress}/>
          </View>
        )}></FlatList>
    </>
  );
};

export default CardList;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingHorizontal:5,
    paddingVertical:5,
  },
});
