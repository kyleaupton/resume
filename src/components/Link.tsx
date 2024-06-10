// @ts-ignore
import React from 'react';
import { Link as ExtLink, Text, View } from '@react-pdf/renderer';
import { External } from './Icons';

export default function Link({
  text,
  url,
  fontSize = 11,
  fontWeight = 600,
}: {
  text: string,
  url: string,
  fontSize?: number
  fontWeight?: number
}) {
  return (
    <ExtLink
      src={url}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: '6px',
        fontSize: '14px',
        color: 'black',
        textDecoration: 'none',
      }}
    >
      <Text style={{ fontSize, fontWeight }}>{text}</Text>
      <View style={{ marginTop: 2 }}>
        <External height={10} width={10} />
      </View>
    </ExtLink>
  );
}
