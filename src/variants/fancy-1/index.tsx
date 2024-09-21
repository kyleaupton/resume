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
import CustomLink from '@/components/Link';
import registerFont from './fonts';
import WorkExperience from './components/WorkExperience';
import LineGraph from './components/LineGraph';
import Divider from './components/Divider';
import { styles, colors, s } from './styles';

registerFont();

const { leftSectionItem } = StyleSheet.create({
  leftSectionItem: {
    gap: '18px',
    width: '100%',
  },
});

// Create Document Component
function PDF() {
  return (
    <Document title="Kyle Upton's Resume" author="Kyle Upton" keywords="Version: 0.1">
      <Page size="A4" style={[s.text, { flexDirection: 'row' }]}>
        {/* Left column */}
        <View
          style={{
            alignItems: 'center',
            gap: '28px',
            flexBasis: '35%',
            backgroundColor: colors.background,
            padding: '28px 18px 18px 18px',
          }}
        >
          {/* About me */}
          <View style={leftSectionItem}>
            <Text style={[s.titleMd, { textAlign: 'center' }]}>About Me</Text>
            <Text>{aboutMe.default}</Text>
          </View>

          {/* Languages */}
          <View style={leftSectionItem}>
            <Text style={[s.titleMd, { textAlign: 'center' }]}>Languages</Text>

            <View style={{ gap: '6px' }}>
              <LineGraph label="JavaScript" percentage={100} />
              <LineGraph label="TypeScript" percentage={100} />
              <LineGraph label="Python" percentage={70} />
              <LineGraph label="SQL" percentage={50} />
              <LineGraph label="Go" percentage={50} />
              <LineGraph label="Java" percentage={40} />
              <LineGraph label="C/C++" percentage={25} />
            </View>
          </View>

          {/* Technologies */}
          <View style={leftSectionItem}>
            <Text style={[s.titleMd, { textAlign: 'center' }]}>Technologies</Text>

            <View style={{ gap: '6px' }}>
              <LineGraph label="Node.js" percentage={100} />
              <LineGraph label="Vue" percentage={100} />
              <LineGraph label="Electron" percentage={100} />
              <LineGraph label="Tailwind" percentage={90} />
              <LineGraph label="Nuxt" percentage={80} />
              <LineGraph label="Docker" percentage={50} />
              <LineGraph label="React" percentage={50} />
            </View>
          </View>

          {/* Projects */}
          <View style={leftSectionItem}>
            <Text style={[s.titleMd, { textAlign: 'center' }]}>Projects</Text>

            <View style={{ gap: '6px' }}>
              <CustomLink text="Bucket Browser" url="https://github.com/kyleaupton/bucket-browser" textStyle={[s.textLg, { fontWeight: 'semibold' }]} />
              <CustomLink text="Boot Builder" url="https://github.com/kyleaupton/boot-builder" textStyle={[s.textLg, { fontWeight: 'semibold' }]} />
              <CustomLink text="Typed Electron IPC" url="https://github.com/kyleaupton/typed-electron-ipc" textStyle={[s.textLg, { fontWeight: 'semibold' }]} />
              <CustomLink text="Glob Copy" url="https://github.com/kyleaupton/glob-copy" textStyle={[s.textLg, { fontWeight: 'semibold' }]} />
              <CustomLink text="Node Rsync" url="https://github.com/kyleaupton/node-rsync" textStyle={[s.textLg, { fontWeight: 'semibold' }]} />
              <CustomLink text="Portfolio" url="https://github.com/kyleaupton/portfolio" textStyle={[s.textLg, { fontWeight: 'semibold' }]} />
            </View>
          </View>
        </View>

        {/* Right column */}
        <View
          style={{
            flexBasis: '65%',
            flexDirection: 'column',
            gap: '18px',
            padding: '18px',
          }}
        >
          {/* Name */}
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <View style={{ flexGrow: 1 }}>
              <Text style={[s.title2xl]}>Kyle Upton</Text>
              <Text style={[s.textLg, s.textMuted, { fontWeight: 'semibold' }]}>Senior Software Developer</Text>
            </View>

            {/* Contact */}
            <View style={[{ lineHeight: 1.5 }]}>
              <Text>{contactInfo.phone}</Text>
              <Text>{contactInfo.email}</Text>
              <CustomLink url={contactInfo.linkedIn} showIcon={false} />
              <CustomLink url={contactInfo.website} showIcon={false} />
            </View>
          </View>

          {/* Work Experience */}
          <View style={{ gap: 4, marginTop: -4 }}>
            <Text style={[s.titleLg]}>Work Experience</Text>
            <Divider style={{ marginBottom: 2 }} />
            <WorkExperience />
          </View>

          {/* Education */}
          <View style={{ gap: 4 }}>
            <Text style={styles.title1}>Education</Text>
            <Divider style={{ marginBottom: 2 }} />

            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.title2}>BS Computer Science</Text>
              <Text style={styles.title3}>Kennesaw State University</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default PDF;
