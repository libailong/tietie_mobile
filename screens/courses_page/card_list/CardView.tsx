import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import Card from '../../../components/Card';


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
  card: Card;
  onPress?: () => void;
};

const CardView = (props: Props) => {
  
  
  
  const {
    username,
    userimage,
    date,
    content,
    contentimage,
    subtitle_1,
    subtitle_2,
    title,
  } = props.card;
  
  const cardDom = (
    <View style={styles.Container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle_1}</Text>
        <Text style={styles.subtitle}>{subtitle_2}</Text>
      </View>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 20,
        }}>
        {content}
      </Text>
      <View style={{flexDirection: 'row', paddingBottom: 20}}>
        <Image style={styles.image} source={{uri: userimage}} />

        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
            {username}
          </Text>
          <Text
            style={{
              color: 'lightgray',
              fontWeight: 'bold',
            }}>
            {date}
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
