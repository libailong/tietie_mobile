import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Card from '../../../../components/Card';
import {Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
    data: CourseInfoData;
};

export type CourseInfoData = {
    coursename: String;
    professor: String;
    semester: String;
    timespend: String;
    difficulty: String;
    coursecomment: String;
};

const CourseInfo = (props: Props) => {
    const {
        coursename,
        professor,
        semester,
        timespend,
        difficulty,
        coursecomment,
    } = props.data;
    const [agree_value, set_agree_value] = useState(0);
    const [disagree_value, set_disagree_value] = useState(0);

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
                <Button
                    size="sm"
                    type="outline"
                    onPress={() => {
                        set_agree_value(agree_value + 1);
                    }}
                    buttonStyle={styles.button}>
                    <Icon name="caret-up" size={20} color="#000000" />
                    <Text>{agree_value}</Text>
                </Button>
                <Button
                    size="sm"
                    type="outline"
                    onPress={() => {
                        set_disagree_value(disagree_value + 1);
                    }}
                    buttonStyle={styles.button}>
                    <Icon name="caret-down" size={20} color="#000000" />
                    <Text>{disagree_value}</Text>
                </Button>
            </View>
        </>
    );

    return (
        <View>
            <Card children={cardDom}></Card>
            <View style={styles.feelContent}>
               <Text style={styles.title}>How Does It Feel?</Text>
               <Text style={styles.textContent}>{coursecomment}</Text>
            </View>
           
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
        marginLeft: 10,
    },
    textGroup: {
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
       
    },
    textContent: {      
        fontSize: 18,
    },
    feelContent:{
      padding:10
    }
});
