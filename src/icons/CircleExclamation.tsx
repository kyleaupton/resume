// @ts-ignore
import React from 'react';
import { Svg, Path } from '@react-pdf/renderer';
import { IconProps } from './utils';

function CircleExclamation({
  height,
  width,
  color,
}: IconProps) {
  return (
    <Svg height={height} width={width} viewBox="0 0 512 512">
      <Path fill={color} d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Svg>
  );
}

CircleExclamation.defaultProps = {
  height: 12,
  width: 12,
  color: 'black',
};

export default CircleExclamation;
