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
import {
  Book,
  Briefecase,
  Code2,
  Gear,
  Hammer,
  User,
  CircleIcon,
} from '@/icons';
import { aboutMe, contactInfo } from '@/data';
import CustomLink from '@/components/Link';
import Contact from './components/Contact';
import WorkExperience from './components/WorkExperience';
import LineGraph from './components/LineGraph';
import Divider from './components/Divider';
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
function PDF() {
  return (
    <Document title="Kyle Upton's Resume" author="Kyle Upton" keywords="Version: 0.1">
      <Page size="A4" style={{ flexDirection: 'row' }}>
        {/* Left column */}
        <View
          style={{
            alignItems: 'center',
            // justifyContent: 'center',
            gap: '28px',
            flexBasis: '35%',
            backgroundColor: colors.background,
            padding: '28px 18px 18px 18px',
          }}
        >
          {/* Profile photo */}
          <View>
            <Image src="public/attempt-2-min.png" style={{ height: '100px', width: 'auto' }} />
          </View>

          {/* About me */}
          <View style={s.leftSectionItem}>
            <View style={s.leftSectionTitle}>
              <View style={{ position: 'absolute', left: 0 }}>
                <CircleIcon icon={<User color="white" />} />
              </View>
              <Text style={{ ...styles.title1 }}>About Me</Text>
            </View>

            <Text style={styles.text}>{aboutMe.default}</Text>
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

            <View style={{ gap: '6px' }}>
              <CustomLink text="Bucket Browser" url="https://github.com/kyleaupton/bucket-browser" textStyle={{ fontSize: 16, fontWeight: 600 }} />
              <CustomLink text="Boot Builder" url="https://github.com/kyleaupton/boot-builder" textStyle={{ fontSize: 16, fontWeight: 600 }} />
              <CustomLink text="Typed Electron IPC" url="https://github.com/kyleaupton/typed-electron-ipc" textStyle={{ fontSize: 16, fontWeight: 600 }} />
              <CustomLink text="Glob Copy" url="https://github.com/kyleaupton/glob-copy" textStyle={{ fontSize: 16, fontWeight: 600 }} />
              <CustomLink text="Node Rsync" url="https://github.com/kyleaupton/node-rsync" textStyle={{ fontSize: 16, fontWeight: 600 }} />
              <CustomLink text="Portfolio" url="https://github.com/kyleaupton/portfolio" textStyle={{ fontSize: 16, fontWeight: 600 }} />
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
              <Text style={styles.titleBrand}>Kyle Upton</Text>
              <Text style={styles.extraTextLarge}>Senior Software Developer</Text>
            </View>

            {/* Contact */}
            <View
              style={({
                // padding: '8px 0',
                // margin: '0 -12px',
                flexDirection: 'column',
                gap: 8,
                // width: '100%',
                alignItems: 'flex-start',
              })}
            >
              <Contact text={contactInfo.email} icon="envelope" />
              <Contact text={contactInfo.phone} icon="phone" />
              <Contact text={contactInfo.location} icon="location" />
              <Contact text="in/kyle-upton-dev" icon="linkedIn" link={contactInfo.linkedIn} height={13} />
              <Contact text={contactInfo.website} icon="globe" link={contactInfo.website} />
            </View>
          </View>

          {/* Work Experience */}
          <View style={{ gap: '6px', marginTop: '-16px' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: '18px' }}>
              <CircleIcon width={28} height={28} icon={<Briefecase color="white" height={16} width={16} />} />
              <View style={{ flexGrow: 1 }}>
                <Text style={styles.title1}>Work Experience</Text>
                <Divider />
              </View>
            </View>

            <WorkExperience />
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
}

export default PDF;
