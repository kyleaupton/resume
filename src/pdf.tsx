import React from 'react'
import { Page, Text, View, Document } from '@react-pdf/renderer'
import { Divider } from './components/Divider'
import { Contact } from './components/Contact'
import { Skill } from './components/Skill'
import { WorkExperience } from './components/WorkExperience'
import { styles } from './styles'

const THINGS_I_DONT_SUCK_AT = [
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Node.js',
  'Vue',
  'React',
  'Electron',
  'Ionic',
  'Fastify',
  'Express',
  'Python',
  'SQL',
  'Postgres',
  'MariaDB',
  'No SQL',
  'MongoDB',
  'GitHub',
  'DevOps',
  'Webpack',
  'Vite',
  'Linux',
  'Figma'
]

// Create Document Component
export const PDF = () => (
  <Document title="Kyle Upton's Resume" author="Kyle Upton" keywords={`Version: ${VERSION}`}>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.section}>
        <View>
          <Text style={styles.titleBrand}>Kyle Upton</Text>
          <Text style={styles.extraTextLarge}>Senior Software Developer</Text>
        </View>
        <Text style={styles.text}>Passionate Software Developer with extensive experience in Full Stack Web Development and a proven track record in leadership and team management.</Text>
      </View>

      <Divider />

      {/* Contact Section */}
      <View style={({ flexDirection: 'row', justifyContent: 'space-evenly', padding: 8 })}>
        <Contact text="kyleaupton@gmail.com" icon="envelope" />
        <Contact text="LinkedIn" icon="linkedIn" link="https://linkedin.com/in/kyle-upton-50bb1a188" height={13} />
        <Contact text="GitHub" icon="gitHub" link="https://github.com/kyleaupton" height={14} />
        <Contact text="Atlanta, GA" icon="location" />
      </View>

      <Divider />

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.titleBrand}>Skills</Text>
        <View style={({ display: 'flex', flexDirection: 'row', gap: 12, flexWrap: 'wrap' })}>
          {THINGS_I_DONT_SUCK_AT.map(thing => <Skill key={thing} skill={thing} />)}
        </View>

      </View>

      {/* Work */}
      <View style={styles.section}>
        <Text style={styles.titleBrand}>Work Experience</Text>

        <View style={({ gap: 24 })}>
          <WorkExperience
            title="Senior Software Developer"
            company="DigitalGlue"
            date="02/2023 - Present"
            points={[
              'test',
              'test'
            ]}
          />

          <WorkExperience
            title="Software Developer"
            company="DigitalGlue"
            date="11/2021 - 02/2023"
            points={[
              'test',
              'test'
            ]}
          />

          <WorkExperience
            title="Intern"
            company="DigitalGlue"
            date="10/2018 - 11/2021"
            points={[
              'test',
              'test'
            ]}
          />
        </View>
      </View>
    </Page>
  </Document>
)
