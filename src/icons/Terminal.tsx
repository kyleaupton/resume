// @ts-ignore
import React from 'react';
import { Svg, Path } from '@react-pdf/renderer';
import { IconProps } from './utils';

function Terminal({
  height,
  width,
  color,
}: IconProps) {
  return (
    <Svg height={height} width={width} viewBox="0 0 576 512">
      <Path fill={color} d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Svg>
  );
}

Terminal.defaultProps = {
  height: 12,
  width: 12,
  color: 'black',
};

export default Terminal;
