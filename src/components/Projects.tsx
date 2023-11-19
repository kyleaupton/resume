// @ts-ignore
import React from 'react'
import { View, Text, Link } from '@react-pdf/renderer'
import { styles } from '../styles'

export default function Projects () {
  return (
    <View style={({ alignItems: 'center', padding: '24px 0', gap: 4 })}>
      <Text style={styles.extraTextSmall}>Coming soon...</Text>
      <Text style={styles.extraTextSmall}>See <Link src='https://kyleupton.info'>kyleupton.info</Link> for now</Text>
    </View>
  )
}
