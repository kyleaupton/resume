// @ts-ignore
import React from 'react';
import { View } from '@react-pdf/renderer';
import { IconProps } from './utils';

type Prop = IconProps & { icon: React.ReactNode };

function CircleIcon({
  icon,
  height,
  width,
  color,
}: Prop) {
  return (
    <View
      style={({
        width,
        height,
        borderRadius: '100%',
        backgroundColor: color,
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      {icon}
    </View>
  );
}

CircleIcon.defaultProps = {
  height: 24,
  width: 24,
  color: 'black',
};

export default CircleIcon;
