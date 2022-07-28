import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

type Props = {
      onEditEnd?: (searchText: string) => void;
      onSubmit: (searchText: string) => void;
}

const SearchBar = (props: Props) => {
      const [searchText, setSearchText] = useState("")
      return (
            <View style={styles.searchBarContainer}>
                  <TextInput
                        value={searchText}
                        onChangeText={setSearchText}
                        onEndEditing={(event) => {
                              // setFilterText(event.nativeEvent.text)
                              if (props.onEditEnd)
                                    props.onEditEnd(event.nativeEvent.text)
                        }}
                        onSubmitEditing={(event) => {
                              props.onSubmit(event.nativeEvent.text)
                        }}
                        style={styles.searchTextStyle}
                        placeholder="搜索..."
                  />
            </View>
      )
}

export default SearchBar

const styles = StyleSheet.create({

      searchBarContainer: {
            backgroundColor: "#D1D1D1",
            alignSelf: "stretch",
            marginHorizontal: 40,
            borderRadius: 5
      },

      searchTextStyle: {
            paddingVertical: Platform.OS === 'android' ? 0 : 10,
            paddingLeft: 10
      }
})