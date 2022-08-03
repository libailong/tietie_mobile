import { StyleSheet, Text, View } from 'react-native'
import SegmentedPicker from '../../components/SegmentedPicker'
import React from 'react'
import UserInfoHeader from '../../components/UserInfoHeader'
import { CoursesStackParams } from '../../navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = {}

const CoursesScreen = (props: Props) => {
      return (
            <View style={{flex: 1, backgroundColor: "green"}}>
                  <SegmentedPicker
                        data={{"A": "b", "C": "d", "E": "f"}}
                  />
                  <UserInfoHeader
                        username='User_10001'
                        subHeadline='Jun 26 2022, Sun'
                  ></UserInfoHeader>

            </View>
      )
}

export default CoursesScreen

const styles = StyleSheet.create({})