// @ts-ignore
import React from 'react';
import { View } from '@react-pdf/renderer';
import { colors } from './styles';

function Separator() {
  return (
    <View style={{ height: 1, backgroundColor: colors.divider, marginTop: 2 }} />
  );
}

export default Separator;
