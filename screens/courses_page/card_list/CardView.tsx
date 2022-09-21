import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import Card from '../../../components/Card';
import {CardType} from '../../courses_page/CoursesScreen'


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

type Props = {
  card: CardType;
  onPress?: () => void;
};

const CardView = (props: Props) => {
  
  
  
  const {
    user_name,
    id,
    courseName,
    professor,
    semester,
    comments,
    title,
  } = props.card;
  
  const cardDom = (
    <View style={styles.Container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{courseName+' '+semester}</Text>
        <Text style={styles.subtitle}>{professor}</Text>
      </View>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 20,
        }}>
        {comments}
      </Text>
      <View style={{flexDirection: 'row', paddingBottom: 20}}>
        <Image style={styles.image} source={require('./images/icon-192x192.png')} />

        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
            {user_name}
          </Text>
          <Text
            style={{
              color: 'lightgray',
              fontWeight: 'bold',
            }}>
            {id}
          </Text>
        </View>
      </View>
      
    </View>
  );

  return (
    <>
      <Card children={cardDom} onPress={props.onPress}></Card>
    </>
  );
};

export default CardView;


const styles = StyleSheet.create({
  Container: {},

  image: {
    borderRadius: 25,
    resizeMode: 'contain',
    height: 50,
    width: 50,
    marginRight: 10,
  },

  subtitle:{
    color: 'lightgray',
  },

  title:{
    fontSize: 20,
    fontWeight: 'bold',
  }
});
