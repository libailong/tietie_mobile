import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from '../../../../components/Card';
import Button from '../../../../components/Button';

type Props = {
  data: CourseInfoData;
};

export type CourseInfoData = {
  coursename: string;
  professor: string;
  semester: string;
  timespend: number;
  difficulty: number;
  coursecomment: string;
};

const CourseInfo = (props: Props) => {
  const {coursename, professor, semester, timespend, difficulty,coursecomment} = props.data;

  const agree = () => {};
  const disagree = () => {};
  const cardDom = (
    <>
      <View style={styles.textGroup}>
        <Text style={styles.title}>Course Name:</Text>
        <Text style={styles.textContent}>{coursename}</Text>
      </View>
      <View style={styles.textGroup}>
        <Text style={styles.title}>Professor:</Text>
        <Text style={styles.textContent}>{professor}</Text>
      </View>
      <View style={styles.textGroup}>
        <Text style={styles.title}>Semester:</Text>
        <Text style={styles.textContent}>{semester}</Text>
      </View>
      <View style={styles.textGroup}>
        <Text style={styles.title}>Time Spent per Week:</Text>
        <Text style={styles.textContent}>{timespend}</Text>
      </View>
      <View style={styles.textGroup}>
        <Text style={styles.title}>Difficulty:</Text>
        <Text style={styles.textContent}>{difficulty}</Text>
      </View>

      <View style={styles.buttonGroup}>
        <Button onPress={agree}></Button>
        <Button onPress={disagree}></Button>
      </View>
    </>
  );

  return (
    <View>
      <Card children={cardDom}></Card>
      <Text style={styles.title}>How Does It Feel?</Text>
      <Text style={styles.textContent}>{coursecomment}</Text>
    </View>
  );
};

export default CourseInfo;

const styles = StyleSheet.create({
  card: {},
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
  },
  textGroup:{
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  textContent:{
    fontSize: 18,
  }
});
