// @ts-ignore
import React from 'react';
import { Link as ExtLink, Text, View } from '@react-pdf/renderer';
import { type Style } from '@react-pdf/types';
import { External } from '@/icons';

export default function Link({
  text,
  url,
  style = {},
}: {
  text: string,
  url: string,
  style?: Style | Style[],
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
      <Text style={style}>{text}</Text>
      <View style={{ marginTop: 2 }}>
        <External height={10} width={10} />
      </View>
    </ExtLink>
  );
}

Link.defaultProps = {
  style: {},
};
