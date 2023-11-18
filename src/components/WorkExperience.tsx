// @ts-ignore
import React from 'react'
import { View, Text } from '@react-pdf/renderer'
import { styles } from '../styles'

export const WorkExperience = ({ title, company, date, points }: { title: string, company: string, date: string, points: string[] }) => {
  const stuff = points.map(point => <Text key={point} style={styles.text}>{`- ${point}`}</Text>)

  return (
    <View style={({ flexDirection: 'column', gap: 4 })}>
      <Text style={styles.title1}>{title}</Text>
      <Text style={styles.title2}>{company}</Text>
      <Text style={styles.extraTextSmall}>{date}</Text>
      {stuff}
    </View>
  )
}
