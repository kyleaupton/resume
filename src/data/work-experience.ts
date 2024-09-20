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
  digitalGlue: {
    name: 'DigitalGlue',
    companyUrl: 'https://www.linkedin.com/company/digitalglue/',
    location: 'Atlanta, GA',
    date: 'Oct 2018 - Present',
    positions: {
      // Allow the definition of multiple sets of positions
      // for granular control over the content
      default: [
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
            'Collaborated with both backend and frontend teams to contribute to the development of new features.',
            'Conducted thorough testing of new features, ensuring functionality and performance met quality standards before deployment.',
            'Created a set of email templates for use in the product\'s notification system, enhancing communication efficiency.',
            'Sharpened full-stack web development skills through hands-on experience and continuous learning.',
          ],
          date: 'Oct 2018 - Nov 2021',
        },
      ],
    },
  },
});

export default workExperience;
