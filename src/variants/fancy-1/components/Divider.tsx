// @ts-ignore
import React from 'react';
import { View } from '@react-pdf/renderer';

export default function Divider() {
  return (
    <View style={({ height: 1, backgroundColor: 'grey', margin: '4px 0 8px 0' })} />
  );
}
