// @ts-ignore
import React from 'react';
import { View } from '@react-pdf/renderer';
/* eslint-disable-next-line */
import { Style } from '@react-pdf/types';

function Divider({ style = {} }: { style?: Style }) {
  console.log(style);
  return (
    <View style={[style, { height: 1, backgroundColor: '#bbb' }]} />
  );
}

Divider.defaultProps = {
  style: {},
};

export default Divider;
