import {StyleSheet, Text, View} from 'react-native';
import SegmentedPicker from '../../components/SegmentedPicker';
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

// let value: Card[] = [
//   {
//     title: 'Advanced Algorithm',
//     subtitle_1: 'WUSTL-CSE541T',
//     subtitle_2: 'Spring-2022',
//     content: '这门课能劝一个是一个，除非你是对算法非常感兴趣，否则不要选。',
//     username: 'tietie用户b',
//     date: 'Sun Jun 26 2022',
//     userimage: staticImage,
//     contentimage: staticImage,
//   },
//   {
//     title: 'Advanced Algorithm',
//     subtitle_1: 'WUSTL-CSE541T',
//     subtitle_2: 'Spring-2022',
//     content: '这门课能劝一个是一个，除非你是对算法非常感兴趣，否则不要选。',
//     username: 'tietie用户b',
//     date: 'Sun Jun 26 2022',
//     userimage: staticImage,
//     contentimage: staticImage,
//   },
//   {
//     title: 'Advanced Algorithm',
//     subtitle_1: 'WUSTL-CSE541T',
//     subtitle_2: 'Spring-2022',
//     content: '这门课能劝一个是一个，除非你是对算法非常感兴趣，否则不要选。',
//     username: 'tietie用户b',
//     date: 'Sun Jun 26 2022',
//     userimage: staticImage,
//     contentimage: staticImage,
//   },
//   {
//     title: 'Advanced Algorithm',
//     subtitle_1: 'WUSTL-CSE541T',
//     subtitle_2: 'Spring-2022',
//     content: '这门课能劝一个是一个，除非你是对算法非常感兴趣，否则不要选。',
//     username: 'tietie用户b',
//     date: 'Sun Jun 26 2022',
//     userimage: staticImage,
//     contentimage: staticImage,
//   },
// ];

const CoursesScreen = ({route, navigation}: Props) => {
  const [cardValue, setCoursesValue] = useState([]);
  useEffect(() => {
    fetch(`https://www.tietieus.com/api/course/course_feedbacks`, {
      //   headers : {
      //     //"Content-Type" : "application/json",
      //     "Access-Control-Allow-Headers" : "Content-Type",
      //     "Access-Control-Allow-Origin": "*",
      // },
    }).then(response => {
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      response.json().then(data =>setCoursesValue(data.courses))});
      console.log(cardValue);
    
  }, []);

  const onPress = () => {
    navigation.navigate('Details');
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

  return (
    <View style={{flex: 1}}>
      <SegmentedPicker
        data={{A: 'b', C: 'd', E: 'f'}}
        onValueChanged={labelChange}
      />
      <CardList data={cardValue} onPress={onPress}></CardList>
    </View>
  );
};

export default CoursesScreen;

const styles = StyleSheet.create({});
