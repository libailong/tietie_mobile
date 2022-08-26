import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tab, TabView as TbView } from '@rneui/themed'

type Props = {
      index: number
      setIndex: React.Dispatch<React.SetStateAction<number>>
      pages: React.ReactNode[]
}

const TabView = (props: Props) => {
      let index = 0;
      const pages = props.pages.map((value) => {
            index += 1;
            return (
                  <TbView.Item style={{ backgroundColor: 'white', width: '100%' }}
                  key={index}
                  >
                        {value}
                  </TbView.Item>
            )
      })

      return (
            <TbView value={props.index} onChange={props.setIndex} animationType="spring">
                  { pages }
            </TbView>
      )
}

export default TabView

const styles = StyleSheet.create({})