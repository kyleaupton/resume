// @ts-ignore
import React from 'react';
import { Svg, Path } from '@react-pdf/renderer';
import { IconProps } from './utils';

function User({
  height,
  width,
  color,
}: IconProps) {
  return (
    <Svg height={height} width={width} viewBox="0 0 448 512">
      <Path fill={color} d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
    </Svg>
  );
}

User.defaultProps = {
  height: 12,
  width: 12,
  color: 'black',
};

export default User;
