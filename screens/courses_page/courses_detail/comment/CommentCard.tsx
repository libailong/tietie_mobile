import { StyleSheet, Text, View ,ImageSourcePropType} from 'react-native'
import React from 'react'
import UserInfoHeader from '../../../../components/UserInfoHeader'
import Card from '../../../../components/Card'

type Props = {
    info:CommentInfo,
}

export type CommentInfo = {
    username: string,
    subHeadline: string,
    icon?: ImageSourcePropType,
    commentText:String,
}

const CommentCard = (props: Props) => {
      
      return (
           <Card>
             <UserInfoHeader username={props.info.username} subHeadline={props.info.subHeadline}></UserInfoHeader>
             <Text>{props.info.commentText}</Text>
           </Card>
        )
}

export default CommentCard

const styles = StyleSheet.create({})