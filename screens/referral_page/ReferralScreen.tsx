import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PostCard from './components/PostCard';
import Tabbar from '../../components/Tabbar';
import TabView from '../../components/TabView';

type Props = {}

const ReferralScreen = (props: Props) => {
      const [index, setIndex] = useState(0);
      const amazonDummyPage = (
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
      const googleDummyPage = (
            <>
                  <PostCard
                        title='2023 NG SDE'
                        company='Google'
                        location='Seattle-WA'
                        desc='A new position at Amazon'
                        username='user_10000'
                        postTime='Jun 26, 2022'
                  />
                  <PostCard
                        title='2023 NG SDE'
                        company='Google'
                        location='Seattle-WA'
                        desc='A new position at Amazon'
                        username='user_10000'
                        postTime='Jun 26, 2022'
                  />
            </>
      )
      const tiktokDummyPage = (
            <>
                  <PostCard
                        title='2023 NG SDE'
                        company='TikTok'
                        location='Seattle-WA'
                        desc='A new position at Amazon'
                        username='user_10000'
                        postTime='Jun 26, 2022'
                  />
                  <PostCard
                        title='2023 NG SDE'
                        company='TikTok'
                        location='Seattle-WA'
                        desc='A new position at Amazon'
                        username='user_10000'
                        postTime='Jun 26, 2022'
                  />
            </>
      )
      const pages = [amazonDummyPage, googleDummyPage, tiktokDummyPage];
      return (
            <>

                  <Tabbar
                        data={{
                              "Amazon": "amazon",
                              "Google": "google",
                              "TikTok": "TikTok"
                        }}
                        onValueChanged={(value) => { setIndex(value) }}
                        label={index}
                  />
                  <TabView
                        pages={pages}
                        index={index}
                        setIndex={setIndex}
                  />
            </>
      )
}

export default ReferralScreen

const styles = StyleSheet.create({
})