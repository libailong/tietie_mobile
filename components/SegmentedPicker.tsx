import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

type Props = {
      data: { [key: string]: any }
      onValueChanged?: (value: any) => void;
      defaultLabel?: number;
      enabled?: boolean
}

const SegmentedPicker = (props: Props) => {
      const offset = useSharedValue(0);
      const [segmentOffset, setSegmentOffset] = useState(0);
      const animatedSegmentSelector = useAnimatedStyle(() => {
            return {
                  transform: [{
                        translateX: withTiming(offset.value, {
                              duration: 500
                        })
                  }]
            }
      })
      let i = 0
      const labels = Object.entries(props.data).map(entry => {
            const index = i;
            i ++;
            // console.log(index)
            return (
                  <TouchableWithoutFeedback
                        onPress={() => {
                              offset.value = index * segmentOffset
                              if (props.onValueChanged) {
                                    props.onValueChanged(props.data[entry[0]])
                              }
                        }}
                        key={ i }
                        disabled={ props.enabled === false }
                  >
                        <View style={styles.segmentLabel} >
                              <Text numberOfLines={1}>{ entry[0] }</Text>
                        </View>
                  </TouchableWithoutFeedback>
            );
      })

      return (
            <View style={styles.segmentedControlContainer}
                  onLayout={(event) => {
                        let componentWidth_ = event.nativeEvent.layout.width;
                        let dataSize = Object.keys(props.data).length;
                        setSegmentOffset((componentWidth_ - 2) / dataSize)
                        if (props.defaultLabel) {
                              offset.value = props.defaultLabel * (componentWidth_ - 2) / dataSize
                        }
                  }}
            >
                  { labels }
                  <Animated.View style={[styles.segmentSelector, animatedSegmentSelector, { width: segmentOffset }]} >
                  </Animated.View>
                  <Animated.View style={[styles.segmentBottomIndicator, animatedSegmentSelector, { width: segmentOffset }]} />
            </View>
      )
}

export default SegmentedPicker

const styles = StyleSheet.create({

      segmentedControlContainer: {
            flexDirection: 'row',
            justifyContent: "space-between",
            height: 30,
            backgroundColor: "white",
            marginHorizontal: 0,
            borderRadius: 0
      },

      segmentLabel: {
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "stretch",
            flex: 1
      },

      segmentSelector: {
            position: 'absolute',
            top: 0,
            backgroundColor: '#B1B1B1',
            height: 30,
            borderRadius: 5,
            opacity: 0,
            shadowRadius: 2,
            shadowOpacity: 0.5,
            shadowOffset: { width: 0, height: 0 }
      },

      segmentBottomIndicator: {
            position: 'absolute',
            top: 29,
            height: 4,
            backgroundColor: "red",
            alignSelf: "stretch"
      }
}) 