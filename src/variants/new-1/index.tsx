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
import { Phone, Envelope, LinkedIn, GitHub, Location } from '@/icons';
import Separator from './Separator';
import WorkExperience from './WorkExperience';
import registerFonts from './fonts';
import { s, colors } from './styles';

registerFonts();

const skills = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Go', 'Python', 'SQL', 'HTML', 'CSS'] },
  { label: 'Frontend', items: ['Vue', 'Nuxt', 'React', 'Pinia', 'TanStack Query/Table', 'Tailwind', 'shadcn-vue', 'Vite', 'Electron'] },
  { label: 'Backend & Data', items: ['Node.js', 'PostgreSQL', 'REST', 'OpenAPI', 'SSE'] },
  { label: 'AI', items: ['LLM agents and tool calling', 'MCP', 'Streaming chat UIs', 'Claude Code and agent skills', 'Anthropic and OpenAI APIs'] },
  { label: 'Testing & DevOps', items: ['Vitest', 'Playwright', 'Testcontainers', 'GitHub Actions', 'Docker', 'Kubernetes', 'AWS', 'Linux'] },
];

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
        size="LETTER"
        style={[s.text, { gap: 10, paddingHorizontal: 32, paddingTop: 24, paddingBottom: 28 }]}
      >
        {/* Header */}
        <View style={{ gap: 4 }}>
          <Text style={[s.name]}>Kyle Upton</Text>
          <Text style={[s.subtitle]}>
            Senior Software Engineer · Full-Stack & AI · TypeScript, Vue, React
          </Text>

          <View style={[s.textSm, { flexDirection: 'row', gap: 8, marginTop: 2 }]}>
            <ContactItem
              icon={<Location height={9} width={9} color={colors.icon} />}
              text={contactInfo.location}
            />
            <ContactItem
              icon={<Phone height={9} width={9} color={colors.icon} />}
              text={contactInfo.phone}
            />
            <ContactItem
              icon={<Envelope height={9} width={9} color={colors.icon} />}
              text={contactInfo.email}
            />
            <ContactLink
              icon={<LinkedIn height={9} width={9} color={colors.icon} />}
              url={contactInfo.linkedIn}
              text={contactInfo.linkedIn}
            />
            <ContactLink
              icon={<GitHub height={9} width={9} color={colors.icon} />}
              url={contactInfo.gitHub}
              text={contactInfo.gitHub}
            />
          </View>
        </View>

        {/* Work Experience */}
        <View style={{ gap: 4 }}>
          <SectionHeader title="Work Experience" />
          <WorkExperience />
        </View>

        {/* Skills and Education are stacked, not side-by-side, so resume
            parsers that read line-by-line don't interleave the two columns. */}

        {/* Skills */}
        <View style={{ gap: 4 }}>
          <SectionHeader title="Skills" />
          <View>
            {skills.map(({ label, items }) => (
              <View key={label} style={{ flexDirection: 'row', gap: 4 }}>
                <Text style={{ fontWeight: 'semibold' }}>{`${label}:`}</Text>
                <Text>{items.join(' · ')}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Education */}
        <View style={{ gap: 4 }} wrap={false}>
          <SectionHeader title="Education" />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View style={{ flexDirection: 'row', gap: 4 }}>
              <Text style={{ fontWeight: 'semibold' }}>Kennesaw State University</Text>
              <Text>· B.S. Computer Science</Text>
            </View>
            <Text style={[s.textSm, s.textMuted]}>2018 - 2021</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
