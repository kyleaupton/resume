// @ts-ignore
import React from 'react';
import { View } from '@react-pdf/renderer';
import Project from './Project';
import projects from '../projects';

export default function Projects() {
  return (
    <View style={({ gap: 12 })}>
      {projects.map((project) => Project({ project }))}
    </View>
  );
}
