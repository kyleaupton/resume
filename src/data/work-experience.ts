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
            'Core engineer on a configurable, multi-tenant CRM that replaces Salesforce for home-services companies with long lead-to-install workflows (Go, Vue 3, PostgreSQL, Kubernetes, ~2k users).',
            'Built and shipped Wilbur, the CRM\'s production AI assistant, with a provider-agnostic Go agent loop (Claude today), tenant-scoped tools that query and aggregate CRM data, and a streaming Vue chat UI.',
            'Designed a partner API that defines each of its ~20 operations once and generates a single JSON Schema for both MCP tools and the REST/OpenAPI surface, with scoped auth, audit logging, and 160 tests.',
            'Created reusable, config-driven UI, including a schema-driven form engine and a data table used in 40+ views.',
            'Took over a stalled Vue 2 and Vuetify migration, moved it to Vue 3 and shadcn-vue in one pass, and wrote an AI agent playbook the team used to convert the 216-component core app in about two months.',
            'Stopped silent data loss on shared field forms with optimistic locking and a three-way merge, then added live presence over SSE, synced across Kubernetes pods with Postgres LISTEN/NOTIFY.',
            'Shipped a notification pipeline that sends about 3,000 messages a day across email, push, and in-app.',
            'Set up GitHub Actions CI that runs unit and Testcontainers integration tests on every pull request.',
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
            'Led the Vue 3 and Vite migration of the main web app, converting it on a parallel branch while three junior engineers kept shipping features, and landed it in a single release.',
            'Built support for any customer Active Directory or LDAP server, with schema mapping, scaled to 10,000+ users.',
            'Mentored three developers through code reviews and coding standards, led TypeScript adoption across frontend and backend, introduced Vitest, and owned the GitHub Actions CI/CD pipelines.',
          ],
          date: 'Feb 2023 - Feb 2025',
        },
        {
          title: 'Software Developer',
          points: [
            'Built a shared Vue and Tailwind component library used by both the web and Electron apps.',
            'Developed a Python API to control DaVinci Resolve for a demo that won NAB Show Product of the Year 2022.',
            'Improved rendering performance for directories with thousands of files using pagination and virtual scrolling.',
          ],
          date: 'Nov 2021 - Feb 2023',
        },
        {
          title: 'Intern',
          points: [
            'Progressed from testing and small UI features to shipping production features across frontend and backend.',
          ],
          date: 'Oct 2018 - Nov 2021',
        },
      ],
    },
  },
});

export default workExperience;
