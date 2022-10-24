import {StyleSheet, Text, View} from 'react-native';
import SegmentedPicker from '../../components/SegmentedPicker';
import SearchBar from '../../components/SearchBar';
import React, {useEffect, useState} from 'react';
import CardList from './card_list';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CoursesStackParams} from '../../navigation';


type Props = NativeStackScreenProps<CoursesStackParams, 'Courses'>;

export type CardType = {
  _id: String;
  id: String;
  title: String;
  courseName: String;
  professor: String;
  semester: String;
  workload: String;
  difficulty: String;
  comments: String;
  posterId: String;
  user_name: String;
  picture: String[];
  department_code: String;
  hotness: 0;
};

// static uri, should be changed in different localhost
const staticImage = './card_list/images/icon-192x192.png';



const CoursesScreen = ({route, navigation}: Props) => {
  const [cardValue, setCoursesValue] = useState([]);
  useEffect(() => {
    fetch(`https://www.tietieus.com/api/course/course_feedbacks`, {
    }).then(response => {
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      response.json().then(data =>setCoursesValue(data.courses))});
      console.log(cardValue);
    
  }, []);

  const onPress = (item:CardType) => {
    navigation.navigate('Details',item);
  };

  const [label, changeLabel] = useState('b');
 // const [cardValue, setCardValue] = useState(value);

  const labelChange = (value: any) => {
    changeLabel(value);
  };

//   useEffect(() => {
//     value = value.map((card: Card) => {
//       let temp = card;
//       temp.username = 'tietie用户' + label;
//       return temp;
//     });
//     setCardValue(value);
//   }, [label]);


const onSubmit =  (searchText: string) => {};

  return (
    <>
    <View>
    <SearchBar  onSubmit={onSubmit}></SearchBar>
   
    </View>
    <CardList data={cardValue} onPress={onPress}></CardList>
    {/* <View style={{flex: 1}}>
      <SegmentedPicker
        data={{A: 'b', C: 'd', E: 'f'}}
        onValueChanged={labelChange}
      /> 
    </View> */}
    </>
  );
};

export default CoursesScreen;

const styles = StyleSheet.create({});
