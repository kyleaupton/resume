// @ts-ignore
import React from 'react'
import { Page, Text, View, Document } from '@react-pdf/renderer'
// import { Divider } from './components/Divider'
import { Contact } from './components/Contact'
import { Skill } from './components/Skill'
import { WorkExperience } from './components/WorkExperience'
import { styles } from './styles'
import { skills } from './skills'

// Create Document Component
export default (
  <Document title="Kyle Upton's Resume" author="Kyle Upton" keywords={'Version: 0.1'}>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={({ ...styles.section, flexDirection: 'row' })}>
        {/* This would be the view for a picture */}

        <View>
          <View>
            <Text style={styles.titleBrand}>Kyle Upton</Text>
            <Text style={styles.extraTextLarge}>Senior Software Developer</Text>
          </View>

          <Text style={styles.text}>Passionate Software Developer with extensive experience in Full Stack Web Development and a proven track record in leadership and team management.</Text>
        </View>
      </View>

      {/* Contact */}
      <View style={({ padding: '8px', margin: '0 -12px', flexDirection: 'row', backgroundColor: '#c7c8c9' })}>
        {/* Left column */}
        <View style={({ alignItems: 'center', justifyContent: 'center', flexBasis: '50%' })}>
          <View style={({ flexDirection: 'column', alignItems: 'flex-start', gap: 8 })}>
            <Contact text="kyleaupton@gmail.com" icon="envelope" />
            <Contact text="linkedin.com/in/kyle-upton-50bb1a188" icon="linkedIn" link="https://linkedin.com/in/kyle-upton-50bb1a188" height={13} />
          </View>
        </View>

        {/* Right column */}
        <View style={({ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexBasis: '50%' })}>
          <View style={({ flexDirection: 'column', alignItems: 'flex-start', gap: 8 })}>
            <Contact text="github.com/kyleaupton" icon="gitHub" link="https://github.com/kyleaupton" height={14} />
            <Contact text="Atlanta, GA" icon="location" />
          </View>
        </View>
      </View>

      {/* Skills */}
      <View style={({ ...styles.section })}>
        <Text style={styles.titleBrand}>Skills</Text>

        <View style={({ display: 'flex', flexDirection: 'row', gap: 4, flexWrap: 'wrap' })}>
          {skills.map(thing => <Skill key={thing} skill={thing} />)}
        </View>
      </View>

      {/* Work */}
      <View style={({ ...styles.section })}>
        <Text style={styles.titleBrand}>Work Experience</Text>

        <View style={({ gap: 12 })}>
          <WorkExperience
            title="Senior Software Developer"
            company="DigitalGlue"
            date="02/2023 - Present"
            points={[
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet',
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.',
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.',
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet'
            ]}
          />

          <WorkExperience
            title="Software Developer"
            company="DigitalGlue"
            date="11/2021 - 02/2023"
            points={[
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.',
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet',
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet',
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.'
            ]}
          />

          <WorkExperience
            title="Intern"
            company="DigitalGlue"
            date="10/2018 - 11/2021"
            points={[
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet',
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.',
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet',
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.'
            ]}
          />
        </View>
      </View>
    </Page>
  </Document>
)
