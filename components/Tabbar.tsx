import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tab, TabView } from '@rneui/themed'

type Props = {
      data: { [key: string]: any }
      onValueChanged: (value: number) => void;
      label: number;
      enabled?: boolean
      scrollable?: boolean
}

const Tabbar = (props: Props) => {

      const tabItems = Object.keys(props.data).map((value) => {
            return (
                  <Tab.Item
                        title={value}
                        titleStyle={{ fontSize: 12, color: "black", fontWeight: "bold" }}
                        containerStyle={{ paddingVertical: 0, backgroundColor: "white" }}
                        key={value}
                  />
            )
      })
      const scrollable = props.scrollable ?? false;
      return (
            <>
                  <Tab
                        value={props.label}
                        onChange={(e) => {
                              console.log(e);
                              props.onValueChanged(e)
                        }}
                        indicatorStyle={{
                              backgroundColor: 'red',
                              height: 3,
                        }}
                        variant="primary"
                        scrollable={ scrollable }
                  >
                        { tabItems }
                  </Tab>

                  
            </>
      )
}

export default Tabbar

const styles = StyleSheet.create({})