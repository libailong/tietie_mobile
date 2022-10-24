import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import React from 'react';
import CardView from './CardView';

import {CardType} from '../../courses_page/CoursesScreen'
// import {CoursesStackParams} from '../../../navigation';
// import type {NativeStackScreenProps} from '@react-navigation/native-stack';

// //type Props = NativeStackScreenProps<CoursesStackParams, 'Courses'>;

type Props = {
  data: Array<CardType>;
  onPress?: (item:CardType) => void;
};


const CardList = (props: Props) => {
  // const onPress = () => {
  //   navigation.navigate('Details');
  // };

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
