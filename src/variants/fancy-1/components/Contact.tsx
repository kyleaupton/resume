import React, { type FunctionComponent } from 'react';
import { View, Text } from '@react-pdf/renderer';
import {
  Envelope,
  GitHub,
  Globe,
  LinkedIn,
  Location,
  Phone,
} from '@/icons';
import CustomLink from './Link';
import { styles } from '../styles';

const icons: Record<string, FunctionComponent> = {
  envelope: Envelope,
  gitHub: GitHub,
  globe: Globe,
  linkedIn: LinkedIn,
  location: Location,
  phone: Phone,
};

function Contact({
  text,
  icon,
  link,
  height,
  width,
}:
{
  text: string,
  icon: keyof typeof icons,
  link?: string,
  height?: number,
  width?: number
}) {
  const i = icons[icon];

  if (!i) {
    throw Error('Invalid icon');
  }

  const comp = link
    ? <CustomLink url={link} text={text} />
    : <Text style={styles.text}>{text}</Text>;

  return (
    <View
      style={({
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8,
      })}
    >
      {/* @ts-ignore */}
      {React.createElement(i, { height, width })}
      {comp}
    </View>
  );
}

Contact.defaultProps = {
  link: '',
  height: 16,
  width: 16,
};

export default Contact;
