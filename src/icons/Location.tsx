// @ts-ignore
import React from 'react';
import { Svg, Path } from '@react-pdf/renderer';
import { IconProps } from './utils';

function Location({
  height,
  width,
  color,
}: IconProps) {
  return (
    <Svg height={height} width={width} viewBox="0 0 384 512">
      <Path fill={color} d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Svg>
  );
}

Location.defaultProps = {
  height: 12,
  width: 12,
  color: 'black',
};

export default Location;
