// @ts-ignore
import React from 'react'
import { View, Text } from '@react-pdf/renderer'
import { styles } from '../styles'

export const WorkExperience = ({ title, company, date, points }: { title: string, company: string, date: string, points: string[] }) => {
  const stuff = points.map(point => (
    <View key={point} style={({ flexDirection: 'row', gap: 4 })}>
      <Text style={styles.text}>•</Text>
      <Text style={styles.text}>{point}</Text>
    </View>
  ))

  return (
    <View style={({ flexDirection: 'column', gap: 4 })}>
      <Text style={styles.title1}>{title}</Text>

      <View style={({ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 })}>
        {/* Company name + date range */}
        <View style={({ flexDirection: 'row', alignItems: 'flex-end', gap: 8 })}>
          <Text style={styles.title2}>{company}</Text>
          <Text style={styles.extraTextSmall}>{date}</Text>
        </View>

        {/* Company location */}
        <Text style={styles.extraTextSmall}>Atlanta, GA</Text>
      </View>

      {stuff}
    </View>
  )
}
