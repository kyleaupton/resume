// @ts-ignore
import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
// import { Divider } from './components/Divider'
import { Contact } from './components/Contact'
import { Skill } from './components/Skill'
import { WorkExperience } from './components/WorkExperience'
import { styles } from './styles'

const helperStyles = StyleSheet.create({
  column: {
    flexBasis: '50%'
  },
  section: {
    padding: 10,
    margin: 10
  }
})

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
  'Docker',
  'Postgres',
  'MariaDB',
  'MongoDB',
  'GitHub',
  'DevOps',
  'Webpack',
  'Vite',
  'Linux',
  'Figma'
]

// Create Document Component
export default (
  <Document title="Kyle Upton's Resume" author="Kyle Upton" keywords={'Version: 0.1'}>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={({ ...styles.section, flexDirection: 'row' })}>
        <View style={({ flexBasis: '50%', gap: 8 })}>
          <View>
            <Text style={styles.titleBrand}>Kyle Upton</Text>
            <Text style={styles.extraTextLarge}>Senior Software Developer</Text>
          </View>

          <Text style={styles.text}>Passionate Software Developer with extensive experience in Full Stack Web Development and a proven track record in leadership and team management.</Text>
        </View>

        <View style={({ gap: 6, alignItems: 'flex-start', justifyContent: 'center', margin: 10 })}>
          <Contact text="kyleaupton@gmail.com" icon="envelope" />
          <Contact text="linkedin.com/in/kyle-upton-50bb1a188" icon="linkedIn" link="https://linkedin.com/in/kyle-upton-50bb1a188" height={13} />
          <Contact text="github.com/kyleaupton" icon="gitHub" link="https://github.com/kyleaupton" height={14} />
          <Contact text="Atlanta, GA" icon="location" />
        </View>
      </View>

      {/* Content */}
      <View style={({ flexDirection: 'row' })}>
        {/* Left - Work */}
        <View style={helperStyles.column}>
          <View style={helperStyles.section}>
            <Text style={styles.titleBrand}>Work Experience</Text>

            <View style={({ gap: 24 })}>
              <WorkExperience
                title="Senior Software Developer"
                company="DigitalGlue"
                date="02/2023 - Present"
                points={[
                  'Led a cross-functional development team in the design, implementation, and deployment of various features for the creative.space platform.',
                  'Spearheaded the migration of legacy code to modern technologies, resulting in a 30% reduction in system maintenance costs and a 50% improvement in page load times.',
                  'Acted as a mentor for junior developers, conducting regular code reviews and providing training in best practices and coding standards.'
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
                  'Collaborated with the senior development team to enhance and maintain a critical component of the company\'s flagship product, gaining exposure to the entire software development lifecycle.',
                  'Worked closely with the QA team to identify and rectify software defects'
                ]}
              />
            </View>
          </View>
        </View>

        {/* Right */}
        <View style={helperStyles.column}>
          {/* Skills */}
          <View style={helperStyles.section}>
            <Text style={styles.titleBrand}>Skills</Text>

            <View style={({ display: 'flex', flexDirection: 'row', gap: 4, flexWrap: 'wrap' })}>
              {THINGS_I_DONT_SUCK_AT.map(thing => <Skill key={thing} skill={thing} />)}
            </View>
          </View>

          {/* Projects */}
          <View style={helperStyles.section}>
            <Text style={styles.titleBrand}>Projects</Text>
          </View>

          {/* Education */}
          <View style={helperStyles.section}>
            <Text style={styles.titleBrand}>Education</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
)
