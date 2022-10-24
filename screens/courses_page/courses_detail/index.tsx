import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import SegmentedPicker from '../../../components/SegmentedPicker';
import {CommentInfo} from './comment/CommentCard';
import Comment from './comment';
import CourseInfo, { CourseInfoData } from './courseInfo';
import { CardType } from '../CoursesScreen'



const CoursesDetail = (prop:CardType) => {
  const [label, changeLabel] = useState('a');
  const labelChange = (value: any) =>  {
    changeLabel(value);
  };

  console.log('Detail')
  
  let commentInfo:Array<CommentInfo>=[
    {username:'贴贴用户',subHeadline:'June 22,2022',commentText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro similique quo reiciendis esse iste, inventore cupiditate consequuntur minima architecto vel, placeat quos impedit illo nesciunt maiores. Ex, accusamus eveniet? '},
    {username:'贴贴用户',subHeadline:'June 22,2022',commentText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro similique quo reiciendis esse iste, inventore cupiditate consequuntur minima architecto vel, placeat quos impedit illo nesciunt maiores. Ex, accusamus eveniet? '},
    {username:'贴贴用户',subHeadline:'June 22,2022',commentText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro similique quo reiciendis esse iste, inventore cupiditate consequuntur minima architecto vel, placeat quos impedit illo nesciunt maiores. Ex, accusamus eveniet? '},
    {username:'贴贴用户',subHeadline:'June 22,2022',commentText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro similique quo reiciendis esse iste, inventore cupiditate consequuntur minima architecto vel, placeat quos impedit illo nesciunt maiores. Ex, accusamus eveniet? '},
    {username:'贴贴用户',subHeadline:'June 22,2022',commentText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro similique quo reiciendis esse iste, inventore cupiditate consequuntur minima architecto vel, placeat quos impedit illo nesciunt maiores. Ex, accusamus eveniet? '},
   
  ];

  // let courseInfoData:CourseInfoData={
  //   coursename:prop.courseName,
  //   professor:prop.professor,
  //   semester:prop.semester,
  //   timespend:prop.workload,
  //   difficulty:prop.difficulty,
  //   coursecomment:prop.comments
  // }

  let courseInfoData:CourseInfoData={
    coursename:"dss",
    professor:"s",
    semester:'s',
    timespend:'3',
    difficulty:'s',
    coursecomment:'s'
  }
  
  console.log(prop.courseName)
  
  return (
    <>
      <View style={styles.image}>
        <Image source={require('../card_list/images/icon-192x192.png')} />
      </View>
      <SegmentedPicker
        data={{课评: 'a', 评论: 'b'}}
        onValueChanged={labelChange}
      />
      { label == 'a' ? <CourseInfo data={courseInfoData}/> : <Comment info={commentInfo}/>}
    </>
  );
};

export default CoursesDetail;

const styles = StyleSheet.create({
  container: {
    width: '50%',
    justifyContent: 'center',
  },
  image: {
    margin: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
