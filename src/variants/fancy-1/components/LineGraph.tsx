// @ts-ignore
import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { colors } from '../styles';

export default function LineGraph({ label, percentage }: { label: string, percentage: number }) {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      gap: '12px',
    }}
    >
      {/* Label */}
      <Text style={{
        fontSize: '12px',
        flexBasis: '50%',
        fontWeight: 600,
      }}
      >
        {label}
      </Text>

      {/* Graph */}
      <View style={{
        height: '8px',
        width: '100%',
        flexBasis: '50%',
        backgroundColor: 'white',
        borderRadius: '8px',
      }}
      >
        <View style={{
          height: '100%',
          width: `${percentage}%`,
          backgroundColor: colors.brand,
          borderRadius: '8px',
        }}
        />
      </View>
    </View>
  );
}
