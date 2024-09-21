// @ts-ignore
import React from 'react';
import { Link as ExtLink, Text, View } from '@react-pdf/renderer';
/* eslint-disable-next-line */
import { Style } from '@react-pdf/types';
import { createUrl } from '@/utils';
import { External } from '@/icons';

interface IconStyle {
  color: string;
  height: number;
  width: number;
}

function Link({
  url,
  text,
  textStyle,
  iconStyle,
  showIcon,
}: {
  url: string,
  text?: string,
  textStyle?: Style | Style[],
  iconStyle?: IconStyle,
  showIcon?: boolean,
}) {
  const displayText = text || url;
  const urlNormalized = createUrl(url);

  return (
    <ExtLink
      src={urlNormalized}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: '6px',
        color: 'black',
        textDecoration: 'none',
      }}
    >
      <Text style={textStyle}>{displayText}</Text>
      {showIcon && (
      <View style={{ marginTop: 2 }}>
        <External
          height={iconStyle?.height}
          width={iconStyle?.width}
          color={iconStyle?.color}
        />
      </View>
      )}
    </ExtLink>
  );
}

Link.defaultProps = {
  text: undefined,
  textStyle: {},
  iconStyle: {
    color: 'black',
    height: 10,
    width: 10,
  },
  showIcon: true,
};

export default Link;
