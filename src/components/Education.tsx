// @ts-ignore
import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { styles } from '../styles';

const completedCourses = ['Data Structures', 'Algorithm Analysis', 'Introduction to Database Systems', 'Software Engineering', 'Programming Principles 1 & 2'];
const extraCurriculars = ['Future Business Leaders of America (FBLA)', 'National Technical Honor Society (NTHS)', 'Forsyth County Hockey Team Alternate Captain'];

export default function Education() {
  const renderedCourses = completedCourses.map((course) => (
    <View key={course} style={({ flexDirection: 'row', gap: 4, padding: '0 12px' })}>
      <Text style={styles.text}>•</Text>
      <Text style={styles.text}>{course}</Text>
    </View>
  ));

  const renderedExtraCur = extraCurriculars.map((extra) => (
    <View key={extra} style={({ flexDirection: 'row', gap: 4, padding: '0 12px' })}>
      <Text style={styles.text}>•</Text>
      <Text style={styles.text}>{extra}</Text>
    </View>
  ));

  return (
    <View style={({ flexDirection: 'row', justifyContent: 'space-between', gap: 12 })}>
      <View style={({ gap: 4 })}>
        <View style={({ flexDirection: 'row', alignItems: 'center', gap: 8 })}>
          <Text style={styles.title1}>Kennesaw State University</Text>
          <Text style={({ ...styles.extraTextSmall, marginBottom: 1 })}>2018 - 2021</Text>
        </View>

        <View style={({ flexDirection: 'row', justifyContent: 'space-between', marginTop: 0 })}>
          <Text style={({ ...styles.title2, alignSelf: 'flex-end' })}>Bachelor of Science in Computer Science</Text>
        </View>

        <View style={({ padding: '0 12px' })}>
          <Text style={styles.text}>Completed Courses</Text>
          {renderedCourses}
        </View>
      </View>

      <View style={({ gap: 4 })}>
        <View style={({ flexDirection: 'row', alignItems: 'center', gap: 8 })}>
          <Text style={styles.title1}>Lambert High School</Text>
          <Text style={({ ...styles.extraTextSmall, marginBottom: 1 })}>2014 - 2018</Text>
        </View>

        <View style={({ padding: '0 12px' })}>
          <Text style={styles.text}>Extra Curricular Activities</Text>
          {renderedExtraCur}
        </View>
      </View>
    </View>
  );
}
