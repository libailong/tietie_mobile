import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../../../components/Card';
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as themes from '../../../constants/themes';
import HorizontalDivider from '../../../components/HorizontalDivider';
import UserInfoHeader from '../../../components/UserInfoHeader';


type Props = {
      title: string;
      company: string;
      location: string;
      desc: string;
      username: string;
      postTime: string;
}

const PostCard = (props: Props) => {
      return (
            <Card style={styles.container}
                  onPress={() => {}}
            >
                  <View style={styles.jobInfoContainer}>
                        <View style={{ marginRight: 10 }}>
                              <View style={styles.jobHeader}>
                                    <Text style={styles.jobTitleText}>{props.title}</Text>
                                    <Text style={styles.companyText}>{props.company}</Text>
                              </View>

                              <View style={styles.locationTag}>
                                    <Ionicons name='location' size={20} color="#D8D8D8" style={{ marginRight: 5 }} />
                                    <Text>{props.location}</Text>
                              </View>
                        </View>

                        <Text style={{ fontSize: 16, flexWrap: 'wrap', flex: 1 }} numberOfLines={4} ellipsizeMode='head'>
                              {props.desc}
                        </Text>
                  </View>
                  <HorizontalDivider />

                  <UserInfoHeader
                        username={props.username}
                        subHeadline={props.postTime}
                  />
            </Card>
      )
}

export default PostCard

const styles = StyleSheet.create({
      container: {
            marginHorizontal: 5,
            marginVertical: 5,
            paddingHorizontal: 10,
            paddingVertical: 10
      },
      jobInfoContainer: {
            flexDirection: 'row',
      },
      locationTag: {
            flexDirection: 'row',
            alignItems: 'center',
      },
      jobHeader: {
            marginLeft: 5,
            marginBottom: 10
      },
      jobTitleText: {
            fontSize: 24,
            fontWeight: "bold"
      },
      companyText: {
            fontSize: 15,
            color: themes.default.secondary
      }
})