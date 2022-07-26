import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

type Props = {}

const SideDrawer = (props: Props) => {
      return (
            <View>
                  <Text>SideDrawer</Text>
            </View>
      )
}

export default SideDrawer

const styles = StyleSheet.create({
      container: {
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            position: "absolute",
            top: 0,
            left: 0
      }
})