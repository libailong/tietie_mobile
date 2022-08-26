import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { cos } from 'react-native-reanimated';

type Props = {
      color?: string;
      text: string;
}

const Tag = (props: Props) => {
      let color: string = "gray"
      if (props.color) {
            color = props.color
      }
      return (
            <View style={[styles.capsule, { backgroundColor: color }]}>
                  <Text style={{ color: "white", fontWeight: 'bold', fontSize: 15 }}>{props.text}</Text>
            </View>
      )
}

export default Tag

const styles = StyleSheet.create({
      capsule: {
           height: 24,
           borderRadius: 12,
           shadowRadius:4,
           shadowOffset: {width: 0, height: 4},
           alignItems: "center",
           justifyContent: "center", 
           marginHorizontal: 5,
           marginVertical: 0
      }
})

