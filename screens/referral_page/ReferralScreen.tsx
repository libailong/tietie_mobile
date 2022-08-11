import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../../components/Card';
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as themes from '../../constants/themes';
import HorizontalDivider from '../../components/HorizontalDivider';
import UserInfoHeader from '../../components/UserInfoHeader';
import PostCard from './components/PostCard';

type Props = {}

const ReferralScreen = (props: Props) => {
      return (
            <>
                  <PostCard
                        title='2023 NG SDE'
                        company='Amazon'
                        location='Seattle-WA'
                        desc='A new position at Amazon'
                        username='user_10000'
                        postTime='Jun 26, 2022'
                  />
                  <PostCard
                        title='2023 NG SDE'
                        company='Amazon'
                        location='Seattle-WA'
                        desc='A new position at Amazon'
                        username='user_10000'
                        postTime='Jun 26, 2022'
                  />
            </>
      )
}

export default ReferralScreen

const styles = StyleSheet.create({
})