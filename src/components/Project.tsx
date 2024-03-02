// @ts-ignore
import React from 'react';
import {
  View, Text, Image, Link,
} from '@react-pdf/renderer';
import { styles } from '../styles';
import projects from '../projects';

type ProjectType = typeof projects[0];

export default function Project({ project }: { project: ProjectType }) {
  return (
    <View style={({ gap: 4 })}>
      <View style={({
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 4,
      })}
      >
        {/* eslint-disable-next-line */}
        <Link src={`https://github.com/${project.id}`} style={styles.title2}>{project.title}</Link>
        <View style={({ gap: 4, flexDirection: 'row' })}>
          {project.icons.map((icon) => <Image src={`public/${icon}.png`} style={styles.languageIcon} />)}
        </View>
      </View>

      <Text style={styles.text}>{project.description}</Text>
    </View>
  );
}
