// @ts-ignore
import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { styles } from '../styles';

export default function WorkExperience(
  {
    company, date, location, positions,
  }:
  {
    company: string
    date: string
    location: string
    positions: Array<{
      title: string
      points: string[]
      date: string
    }>
  },
) {
  const renderedPositions = positions.map((position) => {
    const renderedPoints = position.points.map((point) => (
      <View key={point} style={({ flexDirection: 'row', gap: 4, padding: '0 24px 0 12px' })}>
        <Text style={styles.text}>•</Text>
        <Text style={styles.text}>{point}</Text>
      </View>
    ));

    return (
      <View>
        <View style={({ flexDirection: 'row', gap: 12, alignItems: 'center' })}>
          {/* Position Title */}
          <Text style={({ ...styles.title2, marginBottom: 4 })}>{position.title}</Text>
          {/* Position Date */}
          <Text style={({ ...styles.extraTextSmall, marginBottom: 2 })}>{position.date}</Text>
        </View>

        <View style={({ gap: 4 })}>
          {renderedPoints}
        </View>
      </View>
    );
  });

  return (
    <View style={({ flexDirection: 'column' })}>
      <View style={({ justifyContent: 'space-between', flexDirection: 'row' })}>
        {/* Company name */}
        <Text style={({ ...styles.title1, alignSelf: 'flex-end', marginBottom: 4 })}>{company}</Text>

        {/* Company location + date range */}
        <View style={({ alignItems: 'flex-end' })}>
          <Text style={({ ...styles.extraTextSmall, marginBottom: 1 })}>{location}</Text>
          <Text style={({ ...styles.extraTextSmall, marginBottom: 1 })}>{date}</Text>
        </View>
      </View>

      {/* Positions */}
      <View style={({ flexDirection: 'column', gap: 12 })}>
        {renderedPositions}
      </View>
    </View>
  );

  // const stuff = points.map(point => (
  //   <View key={point} style={({ flexDirection: 'row', gap: 4, padding: '0 24px 0 12px' })}>
  //     <Text style={styles.text}>•</Text>
  //     <Text style={styles.text}>{point}</Text>
  //   </View>
  // ))

  // return (
  //   <View style={({ flexDirection: 'column', gap: 4 })}>
  //     <Text style={styles.title1}>{title}</Text>

  //     <View style={({ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4, marginTop: -10 })}>
  //       {/* Company name */}
  //       <Text style={({ ...styles.title2, alignSelf: 'flex-end' })}>{company}</Text>

  //       {/* Company location + date range */}
  //       <View style={({ alignItems: 'flex-end' })}>
  //         <Text style={({ ...styles.extraTextSmall, marginBottom: 1 })}>Atlanta, GA</Text>
  //         <Text style={({ ...styles.extraTextSmall, marginBottom: 1 })}>{date}</Text>
  //       </View>
  //     </View>

  //     {stuff}
  //   </View>
  // )
}
