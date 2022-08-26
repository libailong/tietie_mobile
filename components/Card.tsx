import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'

type Props = {
      children?: React.ReactNode;
      onPress?: () => void;
      style?: StyleProp<ViewStyle>
}

const Card = (props: Props) => {
      return (
            <TouchableOpacity
                  onPress={props.onPress}
                  disabled={props.onPress === undefined}
            >
                  <View style={[styles.card, props.style]}>
                        {props.children}
                  </View>
            </TouchableOpacity>
      )
}

export default Card

const styles = StyleSheet.create({
      card: {
            backgroundColor: "rgba(255, 255, 255, 1)",
            paddingHorizontal: 5,
            paddingVertical: 5,
            borderRadius: 3,
            borderColor: "#C0C0C0",
            borderWidth: 1,
      },

})