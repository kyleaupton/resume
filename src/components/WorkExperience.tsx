// @ts-ignore
import React from 'react'
import { View, Text } from '@react-pdf/renderer'
import { styles } from '../styles'

export default function WorkExperience ({ title, company, date, points }: { title: string, company: string, date: string, points: string[] }) {
  const stuff = points.map(point => (
    <View key={point} style={({ flexDirection: 'row', gap: 4, padding: '0 24px 0 12px' })}>
      <Text style={styles.text}>•</Text>
      <Text style={styles.text}>{point}</Text>
    </View>
  ))

  return (
    <View style={({ flexDirection: 'column', gap: 4 })}>
      <Text style={styles.title1}>{title}</Text>

      <View style={({ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4, marginTop: -10 })}>
        {/* Company name */}
        <Text style={({ ...styles.title2, alignSelf: 'flex-end' })}>{company}</Text>

        {/* Company location + date range */}
        <View style={({ alignItems: 'flex-end' })}>
          <Text style={({ ...styles.extraTextSmall, marginBottom: 1 })}>Atlanta, GA</Text>
          <Text style={({ ...styles.extraTextSmall, marginBottom: 1 })}>{date}</Text>
        </View>
      </View>

      {stuff}
    </View>
  )
}
