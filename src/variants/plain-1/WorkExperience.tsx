// @ts-ignore
import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import CustomLink from './Link';
import { Location, Calendar } from '@/icons';
import { s } from './styles';

export default function WorkExperience({
  company,
  companyUrl,
  date,
  location,
  positions,
}:
{
  company: string
  companyUrl: string
  date: string
  location: string
  positions: Array<{
    title: string
    points: string[]
    date: string
  }>
}) {
  const renderedPositions = positions.map((position) => {
    const renderedPoints = position.points.map((point) => (
      <View key={point} style={({ flexDirection: 'row', gap: 4, padding: '0 12px 0 12px' })}>
        <Text>•</Text>
        <Text>{point}</Text>
      </View>
    ));

    return (
      <View>
        <View
          style={({
            flexDirection: 'row',
            gap: 12,
            justifyContent: 'space-between',
            alignItems: 'center',
          })}
        >
          {/* Position Title */}
          <Text style={[s.titleSm, { marginBottom: 4 }]}>{position.title}</Text>
          {/* Position Date */}
          <Text style={[{ fontWeight: 'semibold', marginBottom: 2 }]}>{position.date}</Text>
        </View>

        <View style={({ gap: 4 })}>
          {renderedPoints}
        </View>
      </View>
    );
  });

  return (
    <View style={({ flexDirection: 'column', gap: 8 })}>
      <View style={({ flexDirection: 'column' })}>
        {/* Company name */}
        <View style={{ marginBottom: 4 }}>
          <CustomLink text={company} url={companyUrl} style={[s.titleSm]} />
        </View>

        {/* Company location + date range */}
        <View style={({ gap: 6, flexDirection: 'row' })}>
          <Location height={12} width={12} />
          <Text style={[{ fontWeight: 'semibold', marginRight: 3 }]}>{location}</Text>
          <Calendar height={12} width={12} />
          <Text style={[{ fontWeight: 'semibold' }]}>{date}</Text>
        </View>
      </View>

      {/* Positions */}
      <View style={({ flexDirection: 'column', gap: 8 })}>
        {renderedPositions}
      </View>
    </View>
  );
}
