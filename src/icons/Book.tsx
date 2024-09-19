// @ts-ignore
import React from 'react';
import { Svg, Path } from '@react-pdf/renderer';
import { IconProps } from './utils';

function Book({
  height,
  width,
  color,
}: IconProps) {
  return (
    <Svg height={height} width={width} viewBox="0 0 640 512">
      <Path fill={color} d="M304 32V408L96 368V34.7C96 14.9 113.8-.2 133.3 3.1L304 32zM89.7 405.1L320 451.2l230.3-46.1c15-3 25.7-16.1 25.7-31.4V28.8l25.7-5.1C621.5 19.7 640 34.8 640 55V421.8c0 15.3-10.8 28.4-25.7 31.4L320 512 25.7 453.1C10.8 450.2 0 437 0 421.8V55C0 34.8 18.5 19.7 38.3 23.7L64 28.8v345c0 15.3 10.8 28.4 25.7 31.4zM336 408V32L506.7 3.1C526.2-.2 544 14.9 544 34.7V368L336 408z" />
    </Svg>
  );
}

Book.defaultProps = {
  height: 12,
  width: 12,
  color: 'black',
};

export default Book;
