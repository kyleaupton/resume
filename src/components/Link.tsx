// @ts-ignore
import React from 'react';
import { Link as ExtLink, Text, View } from '@react-pdf/renderer';
import { External } from './Icons';

export default function Link({
  text,
  url,
  textSize = 11,
}: {
  text: string,
  url: string,
  textSize?: number
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
      <Text style={{ fontSize: textSize }}>{text}</Text>
      <View style={{ marginTop: 2 }}>
        <External height={10} width={10} />
      </View>
    </ExtLink>
  );
}
