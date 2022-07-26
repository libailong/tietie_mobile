import { StyleSheet, Text, View } from 'react-native'
import SegmentedPicker from '../../components/SegmentedPicker'
import React from 'react'

type Props = {}

const CoursesScreen = (props: Props) => {
      return (
            <View style={{flex: 1, backgroundColor: "green"}}>
                  <SegmentedPicker
                        data={{"A": "b", "C": "d", "E": "f"}}
                  />
            </View>
      )
}

export default CoursesScreen

const styles = StyleSheet.create({})