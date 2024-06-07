// @ts-ignore
import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';
import Contact from './components/Contact';
import Skill from './components/Skill';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Education from './components/Education';
import LineGraph from './components/LineGraph';
import Divider from './components/Divider';
import CustomLink from './components/Link';
import {
  Book,
  Briefecase,
  Code,
  Code2,
  Gear,
  Hammer,
  Terminal,
  User,
  CircleIcon,
} from './components/Icons';
import { styles, colors } from './styles';

const s = StyleSheet.create({
  leftSectionItem: {
    gap: '18px',
    width: '100%',
  },
  leftSectionTitle: {
    position: 'relative',
    gap: '12px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Create Document Component
export default (
  <Document title="Kyle Upton's Resume" author="Kyle Upton" keywords="Version: 0.1">
    <Page size="A4" style={{ flexDirection: 'row' }}>
      {/* Left column */}
      <View
        style={{
          alignItems: 'center',
          // justifyContent: 'center',
          gap: '32px',
          flexBasis: '35%',
          backgroundColor: colors.background,
          padding: '32px 18px 18px 18px',
        }}
      >
        {/* Profile photo */}
        <View>
          <Image src="public/avatar.png" style={{ height: '64px', width: '64px' }} />
        </View>

        {/* About me */}
        <View style={s.leftSectionItem}>
          <View style={s.leftSectionTitle}>
            <View style={{ position: 'absolute', left: 0 }}>
              <CircleIcon icon={<User color="white" />} />
            </View>
            <Text style={{ ...styles.title1 }}>About Me</Text>
          </View>

          <Text style={styles.text}>
            I am a full-stack developer with a passion for creating beautiful and functional
            applications. I have experience with a variety of technologies and am always eager to
            learn more.
          </Text>
        </View>

        {/* Languages */}
        <View style={s.leftSectionItem}>
          <View style={s.leftSectionTitle}>
            <View style={{ position: 'absolute', left: 0 }}>
              <CircleIcon icon={<Code2 color="white" height={14} width={14} />} />
            </View>
            <Text style={styles.title1}>Languages</Text>
          </View>

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
        <View style={s.leftSectionItem}>
          <View style={s.leftSectionTitle}>
            <View style={{ position: 'absolute', left: 0 }}>
              <CircleIcon icon={<Gear color="white" height={14} width={14} />} />
            </View>
            <Text style={styles.title1}>Technologies</Text>
          </View>

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
        <View style={s.leftSectionItem}>
          <View style={s.leftSectionTitle}>
            <View style={{ position: 'absolute', left: 0 }}>
              <CircleIcon icon={<Hammer color="white" height={14} width={14} />} />
            </View>
            <Text style={styles.title1}>Projects</Text>
          </View>

          <View style={{ gap: '8px' }}>
            <CustomLink text="Boot Builder" url="https://github.com/kyleaupton/boot-builder" />
            <CustomLink text="Leet Scold" url="https://github.com/kyleaupton/leet-scold" />
            <CustomLink text="Glob Copy" url="https://github.com/kyleaupton/glob-copy" />
            <CustomLink text="Node Rsync" url="https://github.com/kyleaupton/node-rsync" />
            <CustomLink text="Portfolio" url="https://github.com/kyleaupton/portfolio" />
            <CustomLink text="Win ISO" url="https://github.com/kyleaupton/win-iso" />
          </View>
        </View>
      </View>

      {/* Right column */}
      <View
        style={{
          flexBasis: '65%',
          flexDirection: 'column',
          gap: '32px',
          padding: '48px 18px 18px 18px',
        }}
      >
        {/* Name */}
        <View
          style={{
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Text style={styles.titleBrand}>Kyle Upton</Text>
          <Text style={styles.extraTextLarge}>Senior Software Developer</Text>
        </View>

        {/* Work Experience */}
        <View style={{ gap: '6px' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: '18px' }}>
            <CircleIcon width={28} height={28} icon={<Briefecase color="white" height={16} width={16} />} />
            <View style={{ flexGrow: 1 }}>
              <Text style={styles.title1}>Work Experience</Text>
              <Divider />
            </View>
          </View>

          <WorkExperience
            company="DigitalGlue"
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
                  'Collaborated with both backend and frontend teams to contribe to the development of new features.',
                  'Conducted thorough testing of new features, ensuring functionality and performance met quality standards before deployment.',
                  'Created a set of email templates for use in the product\'s notification system, enhancing communication efficiency.',
                  'Sharpened full-stack web development skills through hands-on experience and continuous learning.',
                ],
                date: 'Oct 2018 - Nov 2021',
              },
            ]}
          />
        </View>

        {/* Education */}
        <View style={{ gap: '6px' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: '18px' }}>
            <CircleIcon width={28} height={28} icon={<Book color="white" height={16} width={16} />} />
            <View style={{ flexGrow: 1 }}>
              <Text style={styles.title1}>Education</Text>
              <Divider />
            </View>
          </View>

          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.title2}>BS Computer Science</Text>
            <Text style={styles.title3}>Kennesaw State University</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
