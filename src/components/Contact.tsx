import React, { type FunctionComponent } from 'react'
import { View, Text, Link } from '@react-pdf/renderer'
import { Envelope, GitHub, LinkedIn, Location } from './Icons'
import { styles } from '../styles'

const icons: Record<string, FunctionComponent> = {
  envelope: Envelope,
  gitHub: GitHub,
  linkedIn: LinkedIn,
  location: Location
}

export const Contact = (
  { text, icon, link, height, width }:
  { text: string, icon: keyof typeof icons, link?: string, height?: number, width?: number }
) => {
  const i = icons[icon]

  if (!i) {
    throw Error('Invalid icon')
  }

  const comp = link ? <Link style={styles.text} src={link}>{text}</Link> : <Text style={styles.text}>{text}</Text>

  return (
    <View style={({ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 })}>
      {/* @ts-ignore */}
      {React.createElement(i, { height, width })}
      {comp}
    </View>
  )
}
