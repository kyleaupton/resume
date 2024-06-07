// @ts-ignore
import React from 'react';
import { Link as ExtLink, View } from '@react-pdf/renderer';
import { External } from './Icons';

export default function Link({ text, url }: { text: string, url: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: '6px' }}>
      <ExtLink src={url} style={{ fontSize: '14px', color: 'black', textDecoration: 'none' }}>{text}</ExtLink>
      <External />
    </View>
  );
}
