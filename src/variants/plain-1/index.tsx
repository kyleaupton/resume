// @ts-ignore
import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
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
        style={[s.text, { gap: 12, padding: 36, paddingTop: 30 }]}
      >
        {/* <Page size="A4"> */}
        {/* Header */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={[s.title2xl]}>Kyle Upton</Text>
            <Text style={[s.textLg, s.textMuted, { fontWeight: 'semibold' }]}>Senior Software Developer</Text>
          </View>
          <View style={[{ lineHeight: 1.5 }]}>
            <Text>(704)-906-2378</Text>
            <Text>kyleaupton@gmail.com</Text>
            <Text>linkedin.com/in/kyle-upton-dev</Text>
            <Text>kyleupton.dev</Text>
          </View>
        </View>

        {/* About me */}
        <View style={[styles.section]}>
          <Text style={[s.titleLg]}>About me</Text>
          <Text>
            I am a full-stack developer with a passion for creating beautiful and functional
            applications. I have experience with a variety of technologies and am always eager to
            learn more.
          </Text>
        </View>

        {/* Work Experience */}
        <View style={[styles.section]}>
          <Text style={s.titleLg}>Work Experience</Text>
          <WorkExperience
            company="DigitalGlue"
            companyUrl="https://www.linkedin.com/company/digitalglue/"
            date="Oct 2018 - Present"
            location="Atlanta, GA"
            positions={[
              {
                title: 'Senior Software Developer',
                points: [
                  'Led and supervised a team of 3 junior developers, providing mentorship, conducting code reviews, and establishing coding standards.',
                  'Directed a company-wide transition from JavaScript to TypeScript, improving code quality and maintainability, which reduced bugs by 25% and increased developer productivity by 20%.',
                  'Spearheaded the design and implementation of an update pipeline for the company\'s Electron.js desktop application, enabling over-the-air updates for users.',
                  'Led the refactoring of the product\'s REST API using modern JavaScript practices, reducing page load times by 35% through the elimination of blocking I/O.',
                ],
                date: 'Feb 2023 - Present',
              },
              {
                title: 'Software Developer',
                points: [
                  'Designed and implemented new features for the core product, translating project manager requests into practical software solutions.',
                  'Provided direct support to clients and effectively debugged production issues.',
                  'Maintained multiple production codebases, ensuring the stability and efficiency of the software.',
                  'Developed a Python API to programmatically control BlackMagic Design\'s DaVinci Resolve video editing software, showcased in a demo that won the NAB Show Product of the Year 2022.',
                  'Successfully redesigned the products\'s web stack, eliminating unnecessary middleware layers to improve security, eliminate bugs, and enhance DX.',
                ],
                date: 'Nov 2021 - Feb 2023',
              },
              {
                title: 'Intern',
                points: [
                  'Collaborated with both backend and frontend teams to contribute to the development of new features.',
                  'Conducted thorough testing of new features, ensuring functionality and performance met quality standards before deployment.',
                  'Created a set of email templates for use in the product\'s notification system, enhancing communication efficiency.',
                  'Sharpened full-stack web development skills through hands-on experience and continuous learning.',
                ],
                date: 'Oct 2018 - Nov 2021',
              },
            ]}
          />
        </View>

        {/* Skills */}
        <View style={[styles.section]}>
          <Text style={[s.titleLg]}>Skills</Text>
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
          <Text style={s.titleLg}>Education</Text>
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
