// @ts-ignore
import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
} from '@react-pdf/renderer';
import { contactInfo } from '@/data';
import CustomLink from '@/components/Link';
import { Phone, Envelope, LinkedIn, Globe, Location } from '@/icons';
import Separator from './Separator';
import WorkExperience from './WorkExperience';
import registerFonts from './fonts';
import { s, colors } from './styles';

registerFonts();

function SectionHeader({ title }: { title: string }) {
  return (
    <View>
      <Text style={[s.sectionHeader]}>{title}</Text>
      <Separator />
    </View>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
      {icon}
      <Text>{text}</Text>
    </View>
  );
}

function ContactLink({ icon, url, text }: { icon: React.ReactNode; url: string; text: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
      {icon}
      <CustomLink url={url} text={text} showIcon={false} />
    </View>
  );
}

export default function PDF() {
  return (
    <Document title="Kyle Upton's Resume" author="Kyle Upton">
      <Page
        size="A4"
        style={[s.text, { gap: 10, padding: 36, paddingTop: 24 }]}
      >
        {/* Header */}
        <View style={{ gap: 4 }}>
          <Text style={[s.name]}>Kyle Upton</Text>
          <Text style={[s.subtitle]}>Senior Software Engineer</Text>

          <View style={{ gap: 4, marginTop: 2 }}>
            <View style={{ flexDirection: 'row', gap: 14 }}>
              <ContactItem
                icon={<Location height={9} width={9} color={colors.icon} />}
                text="Charlotte, NC"
              />
              <ContactItem
                icon={<Phone height={9} width={9} color={colors.icon} />}
                text={contactInfo.phone}
              />
              <ContactItem
                icon={<Envelope height={9} width={9} color={colors.icon} />}
                text={contactInfo.email}
              />
            </View>
            <View style={{ flexDirection: 'row', gap: 14 }}>
              <ContactLink
                icon={<LinkedIn height={9} width={9} color={colors.icon} />}
                url={contactInfo.linkedIn}
                text={contactInfo.linkedIn}
              />
              <ContactLink
                icon={<Globe height={9} width={9} color={colors.icon} />}
                url={contactInfo.website}
                text={contactInfo.website}
              />
            </View>
          </View>
        </View>

        {/* Work Experience */}
        <View style={{ gap: 4 }}>
          <SectionHeader title="Work Experience" />
          <WorkExperience />
        </View>

        {/* Bottom: Skills + Education side-by-side */}
        <View style={{ flexDirection: 'row', gap: 24 }}>
          {/* Skills */}
          <View style={{ flex: 65, gap: 4 }}>
            <SectionHeader title="Skills" />
            <Text>Go · TypeScript · JavaScript · Python · SQL · Java · Vue · React · Node.js · PostgreSQL · Docker · AWS · Nuxt · Tailwind · Electron · HTML · CSS · Git · GitHub Actions · REST APIs · Linux</Text>
          </View>

          {/* Education */}
          <View style={{ flex: 35, gap: 4 }}>
            <SectionHeader title="Education" />
            <View>
              <Text style={{ fontWeight: 'semibold' }}>Kennesaw State University</Text>
              <Text>B.S. Computer Science</Text>
              <Text style={[s.textSm, s.textMuted]}>2018 - 2021</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
