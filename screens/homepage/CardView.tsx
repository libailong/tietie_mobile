import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'
import Card from '../../components/Card';


const styles = StyleSheet.create({
  Container: {

  },

  image: {
    borderRadius: 25,
    resizeMode: "contain",
    height: 50,
    width: 50,
    marginRight: 10,
  },
});

type Card = {
  username: string;
  image: string;
  date: string;
  content: string;
}
type CardProps = {
  card: Card;
}

const CardView = (props: CardProps) => {
  const { username, image, date, content } = props.card;
  console.log(image);
  const cardDom =
    <View style={styles.Container}>
      <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
        <Image style={styles.image}
          source={require('./images/icon-192x192.png')} />

        <View>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>{username}</Text>
          <Text style={{
            color: 'lightgray',
            fontWeight: 'bold',
          }}>{date}</Text>
        </View>
      </View>
      <Text style={{
        fontSize: 20,
        marginBottom: 20
      }}>{content}</Text>

    </View>;

  return (
    <>
      <Card children={cardDom}></Card>
    </>
  )

}

export default CardView



