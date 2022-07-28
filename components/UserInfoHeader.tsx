import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
      username: string,
      subHeadline: string,
      icon?: ImageSourcePropType
}

const UserInfoHeader = (props: Props) => {
      return (
            <View style={styles.container}>
                  <View style={styles.roundedSprite}>

                        <Image style={styles.image}
                              source={props.icon ?? require("../screens/homepage/images/icon-192x192.png")} />
                  </View>
                  <View style={styles.userInfoContainer}>
                        <Text style={styles.usernameText}>{props.username}</Text>
                        <Text style={styles.subHeadLine}>{props.subHeadline}</Text>
                  </View>
            </View>
      )
}

export default UserInfoHeader

const styles = StyleSheet.create({
      container: {
            flexDirection: "row"
      },

      image: {
            borderRadius: 20,
            resizeMode: "contain",
            height: 40,
            width: 40,
      },

      roundedSprite: {
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: "gray"
      },

      userInfoContainer: {
            marginLeft: 15,
            justifyContent: "space-between",
            // paddingVertical: 5
      },

      usernameText: {
            fontSize: 16,
            fontWeight: "normal",
      },

      subHeadLine: {
            fontSize: 12,
            color: "#D8D8D8"
      }
})