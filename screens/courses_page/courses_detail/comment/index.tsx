import { StyleSheet, Text, View , ImageSourcePropType, ScrollView } from 'react-native'
import React from 'react'
import CommentCard, {CommentInfo} from './CommentCard'

type Props = {
      info:Array<CommentInfo>,
}



const Comment = (props: Props) => {
      const commentCardDom = props.info.map((info)=><CommentCard info={info}></CommentCard>)

      return (
           <ScrollView>
           {commentCardDom}
           </ScrollView>
      )
}

export default Comment

const styles = StyleSheet.create({})