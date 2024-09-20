// @ts-ignore
import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
import { aboutMe, contactInfo } from '@/data';
import Separator from './Separator';
import WorkExperience from './WorkExperience';
import registerFonts from './fonts';
import { s } from './styles';

registerFonts();

const styles = StyleSheet.create({
  section: {
    gap: 4,
  },
});

// Create Document Component
export default function PDF() {
  return (
    <Document title="Kyle Upton's Resume" author="Kyle Upton" keywords="Version: 0.1">
      <Page
        size="A4"
        style={[s.text, { gap: 12, padding: 36, paddingTop: 20 }]}
      >
        {/* Header */}
        <View style={{ justifyContent: 'space-between', gap: 4, textAlign: 'center' }}>
          <Text style={[s.title2xl]}>Kyle Upton</Text>

          <View style={[{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 12,
            textAlign: 'center',
          }]}
          >
            <Text>{contactInfo.phone}</Text>
            <Text>{contactInfo.email}</Text>
            <Text>{contactInfo.linkedIn}</Text>
            <Text>{contactInfo.website}</Text>
          </View>
        </View>

        {/* About me */}
        <View style={[styles.section]}>
          <Text style={[s.titleLg, { textAlign: 'center' }]}>About Me</Text>
          <Separator />
          <Text style={[{ textAlign: 'center' }]}>{aboutMe.default}</Text>
        </View>

        {/* Work Experience */}
        <View style={[styles.section]}>
          <Text style={[s.titleLg, { textAlign: 'center' }]}>Work Experience</Text>
          <Separator />
          <WorkExperience />
        </View>

        {/* Skills */}
        <View style={[styles.section]}>
          <Text style={[s.titleLg, { textAlign: 'center' }]}>Skills</Text>
          <Separator />
          <View style={{ flexDirection: 'row', gap: '12px' }}>
            <Text style={[{ fontWeight: 'semibold' }]}>Languages:</Text>
            <Text>JavaScript</Text>
            <Text>TypeScript</Text>
            <Text>Python</Text>
            <Text>SQL</Text>
            <Text>Go</Text>
            <Text>Java</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: '12px' }}>
            <Text style={[{ fontWeight: 'semibold' }]}>Technologies:</Text>
            <Text>Node.js</Text>
            <Text>Vue</Text>
            <Text>Electron</Text>
            <Text>Tailwind</Text>
            <Text>Nuxt</Text>
            <Text>Docker</Text>
            <Text>React</Text>
          </View>
        </View>

        {/* Education */}
        <View style={[styles.section]}>
          <Text style={[s.titleLg, { textAlign: 'center' }]}>Education</Text>
          <Separator />
          <View>
            <Text style={[{ fontWeight: 'semibold' }]}>Kennesaw State University</Text>
            <Text style={[s.titleSm]}>B.S. Computer Science</Text>
            <Text style={[{ marginTop: 4, marginLeft: 12 }]}>• Completed 60/120 credit hours</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
