// @ts-ignore
import React from 'react';
import {
  Page, Text, View, Document,
} from '@react-pdf/renderer';
import Contact from './components/Contact';
import Skill from './components/Skill';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Education from './components/Education';
import { styles } from './styles';
import { skills } from './skills';

// Create Document Component
export default (
  <Document title="Kyle Upton's Resume" author="Kyle Upton" keywords="Version: 0.1">
    {/* Page 1 */}
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={({ ...styles.section, flexDirection: 'row' })}>
        {/* This would be the view for a picture */}

        <View>
          <View>
            <View style={({ flexDirection: 'row', justifyContent: 'space-between' })}>
              <Text style={styles.titleBrand}>Kyle Upton</Text>
              {/* <Text style={({ fontSize: 9 })}>View me on GitHub</Text> */}
            </View>

            <Text style={styles.extraTextLarge}>Senior Software Developer</Text>
          </View>

          <Text style={styles.text}>Passionate Software Developer with extensive experience in Full Stack Web Development and a proven track record in leadership and team management.</Text>
        </View>
      </View>

      {/* Contact */}
      <View style={({
        padding: `8px ${8 + 12}px`, margin: '0 -12px', flexDirection: 'row', gap: 8, justifyContent: 'space-evenly', backgroundColor: '#d4d4d4',
      })}
      >
        {/* Left column */}
        <View style={({ alignItems: 'flex-start', justifyContent: 'center' })}>
          <View style={({ flexDirection: 'column', alignItems: 'flex-start', gap: 8 })}>
            <Contact text="kyleaupton@gmail.com" icon="envelope" />
            <Contact text="+1 (704) 906 2378" icon="phone" />
          </View>
        </View>

        {/* Middle column */}
        <View style={({ alignItems: 'flex-start', justifyContent: 'center' })}>
          <View style={({ flexDirection: 'column', alignItems: 'flex-start', gap: 8 })}>
            <Contact text="github.com/kyleaupton" icon="gitHub" link="https://github.com/kyleaupton" height={14} />
            <Contact text="linkedin.com/in/kyle-upton-50bb1a188" icon="linkedIn" link="https://linkedin.com/in/kyle-upton-50bb1a188" height={13} />
          </View>
        </View>

        {/* Right column */}
        <View style={({ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' })}>
          <View style={({ flexDirection: 'column', alignItems: 'flex-start', gap: 8 })}>
            <Contact text="kyleupton.info" icon="globe" link="https://kyleupton.info" />
            <Contact text="Atlanta, GA" icon="location" />
          </View>
        </View>
      </View>

      {/* Skills */}
      <View style={({ ...styles.section })}>
        <Text style={styles.titleBrand}>Skills</Text>

        <View style={({
          display: 'flex', flexDirection: 'row', gap: 4, flexWrap: 'wrap',
        })}
        >
          {skills.map((thing) => <Skill key={thing} skill={thing} />)}
        </View>
      </View>

      {/* Work */}
      <View style={({ ...styles.section })}>
        <Text style={styles.titleBrand}>Work Experience</Text>

        <View style={({ gap: 12 })}>
          <WorkExperience
            company="DigitalGlue"
            date="Oct 2018 - Present"
            location="Atlanta, GA"
            positions={[
              {
                title: 'Senior Software Developer',
                points: [
                  'Led and supervised a team of 3 junior developers, providing mentorship, conducting code reviews, and establishing coding standards.',
                  'Designed, implemented, and deployed new features, translating project manager requests into effective software solutions.',
                  'Successfully redesigned the application\'s web stack, eliminating unnecessary middleware layers to enhance developer experience, eliminate bugs, and improve security.',
                  'Refactored the backend REST API with modern JavaScript practices, eliminating blocking I/O to substantially improve performance.',
                  'Spearheaded the design and implementation of an update pipeline for the company\'s Electron.js desktop application, enabling over-the-air updates for users.',
                  'Optimized and refactored legacy features to improve overall system performance.',
                ],
                date: 'Feb 2023 - Present',
              },
              {
                title: 'Software Developer',
                points: [
                  'Designed and implemented new features, contributing to the enhancement of product functionality.',
                  'Provided direct support to clients and effectively debugged production issues.',
                  'Played a key role as the manager\'s right-hand-person, assisting junior developers and contributing to their professional development.',
                  'Maintained multiple production codebases, ensuring the stability and efficiency of the software.',
                  'Developed a Python API to programmatically control BlackMagic Design\'s DaVinci Resolve video editing software, showcased in a demo that won the NAB Show Product of the Year 2022.',
                ],
                date: 'Nov 2021 - Feb 2023',
              },
              {
                title: 'Intern',
                points: [
                  'Tested software and contributed to the development of new features.',
                  'Collaborated with both backend and frontend teams to assist in various tasks.',
                  'Created a set of email templates for use in the notification system, enhancing communication efficiency.',
                  'Addressed and resolved bugs, contributing to the overall improvement of software quality.',
                  'Sharpened web development skills through hands-on experience and continuous learning.',
                ],
                date: 'Oct 2018 - Nov 2021',
              },
            ]}
          />
        </View>
      </View>
    </Page>

    {/* Page 2 */}
    <Page size="A4" style={styles.page}>
      {/* Projects */}
      <View style={({ ...styles.section })}>
        <Text style={styles.titleBrand}>Projects</Text>

        <Projects />
      </View>

      {/* Education */}
      <View style={({ ...styles.section })}>
        <Text style={styles.titleBrand}>Education</Text>

        <Education />
      </View>
    </Page>
  </Document>
);
