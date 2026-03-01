interface Position {
  title: string;
  points: string[];
  date: string;
}

type Positions = Record<string, Position[]>;

export interface Company {
  name: string;
  companyUrl: string;
  location: string;
  date: string;
  positions: Positions;
}

export type WorkExperience = Record<string, Company>;

const workExperience = (<T extends WorkExperience>(payload: NoInfer<T>) => payload)({
  redOak: {
    name: 'Red Oak Development',
    companyUrl: 'https://www.redoakdev.com',
    location: 'Remote',
    date: 'Feb 2025 - Present',
    positions: {
      default: [
        {
          title: 'Senior Software Engineer',
          points: [
            'Built a full-stack CRM platform from the ground up for the solar industry, designed to replace Salesforce for verticals with complex lead-to-install workflows (Go, Vue, PostgreSQL).',
            'Designed and implemented an AI-powered project summary system with content-hash-based cache invalidation and a provider-agnostic client that supports multiple LLM backends.',
            'Built a production notification system processing thousands of messages daily across email, SMS, web push, and in-app channels, with a Go routine worker queue, exponential backoff retry, and permanent failure handling.',
            'Solved critical data integrity issues by implementing optimistic locking with a three-way merge algorithm, then extended it with real-time collaboration via SSE—live form updates and presence detection, backed by pg_notify for Kubernetes compatibility.',
            'Integrated Cloudtalk for in-app SMS and phone calls, building a webhook ingestion pipeline with background worker processing for reliable message delivery.',
            'Shipped the web client as a PWA with service worker update detection and web push notifications for a native-like mobile experience.',
          ],
          date: 'Feb 2025 - Present',
        },
      ],
    },
  },
  digitalGlue: {
    name: 'DigitalGlue',
    companyUrl: 'https://www.linkedin.com/company/digitalglue/',
    location: 'Atlanta, GA',
    date: 'Oct 2018 - Feb 2025',
    positions: {
      default: [
        {
          title: 'Senior Software Developer',
          points: [
            'Led and supervised a team of three developers, providing mentorship, conducting code reviews, and establishing coding standards.',
            'Directed a company-wide transition from JavaScript to TypeScript, reducing bugs by 25% and increasing developer productivity by 20%.',
            'Spearheaded the design and implementation of an update pipeline for the company\'s Electron.js desktop application, enabling over-the-air updates for users.',
          ],
          date: 'Feb 2023 - Feb 2025',
        },
        {
          title: 'Software Developer',
          points: [
            'Developed a Python API to programmatically control BlackMagic Design\'s DaVinci Resolve video editing software, showcased in a demo that won the NAB Show Product of the Year 2022.',
            'Redesigned the product\'s web stack, eliminating unnecessary middleware layers to improve security, eliminate bugs, and enhance DX.',
            'Led the refactoring of the product\'s REST API using modern JavaScript practices, reducing page load times by 35% through the elimination of blocking I/O.',
          ],
          date: 'Nov 2021 - Feb 2023',
        },
        {
          title: 'Intern',
          points: [
            'Contributed to full-stack feature development across backend and frontend teams, progressing from testing and email templates to shipping production features.',
          ],
          date: 'Oct 2018 - Nov 2021',
        },
      ],
    },
  },
});

export default workExperience;
