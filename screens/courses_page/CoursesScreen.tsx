import { StyleSheet, Text, View } from 'react-native'
import SegmentedPicker from '../../components/SegmentedPicker'
import React , { useEffect, useState } from 'react'
import CardList from './card_list/CardList'

type Props = {}

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

    // static uri, should be changed in different localhost
const staticImage = "/Users/hanyiyu/Documents/code/tietie_mobile/screens/homepage/images/icon-192x192.png";

let value : Card[]= [

      {title: "Advanced Algorithm",subtitle_1:"WUSTL-CSE541T",subtitle_2:"Spring-2022",content:"这门课能劝一个是一个，除非你是对算法非常感兴趣，否则不要选。",
       username:"tietie用户b",date:"Sun Jun 26 2022",userimage:staticImage,contentimage:staticImage},
       {title: "Advanced Algorithm",subtitle_1:"WUSTL-CSE541T",subtitle_2:"Spring-2022",content:"这门课能劝一个是一个，除非你是对算法非常感兴趣，否则不要选。",
       username:"tietie用户b",date:"Sun Jun 26 2022",userimage:staticImage,contentimage:staticImage},
       {title: "Advanced Algorithm",subtitle_1:"WUSTL-CSE541T",subtitle_2:"Spring-2022",content:"这门课能劝一个是一个，除非你是对算法非常感兴趣，否则不要选。",
       username:"tietie用户b",date:"Sun Jun 26 2022",userimage:staticImage,contentimage:staticImage},
       {title: "Advanced Algorithm",subtitle_1:"WUSTL-CSE541T",subtitle_2:"Spring-2022",content:"这门课能劝一个是一个，除非你是对算法非常感兴趣，否则不要选。",
       username:"tietie用户b",date:"Sun Jun 26 2022",userimage:staticImage,contentimage:staticImage},
    
];

const CoursesScreen = (props: Props) => {
      const [label, changeLabel] = useState("b");
      const [cardValue,setCardValue] = useState(value);

      const labelChange = (value: any) => {
            changeLabel(value);
      }

      useEffect(() => {
            value = value.map((card:Card) =>  {
                  let temp = card;
                  temp.username ="tietie用户"+label;
                  return temp;
            });
            setCardValue(value);
        }, [label]);

      return (
            <View style={{flex: 1}}>
                  <SegmentedPicker
                        data={{"A": "b", "C": "d", "E": "f"}}
                        onValueChanged={labelChange}
                  />
                  <CardList data={cardValue}></CardList>
            </View>
      )
}

export default CoursesScreen

const styles = StyleSheet.create({})