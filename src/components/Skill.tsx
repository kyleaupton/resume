import React from 'react'
import { Text } from '@react-pdf/renderer'
import { colors } from '../styles'

export const Skill = ({ skill }: { skill: string }) => (
  <Text style={({ color: 'white', fontSize: 12, padding: '4px 8px', backgroundColor: colors.brand, borderRadius: 4 })}>{skill}</Text>
)
