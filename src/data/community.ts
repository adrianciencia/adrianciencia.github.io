import type { CommunityItem } from '../types/content';

export const community = [
  {
    category: 'feature',
    title: 'Derívate',
    role: 'Founder · Advisor',
    description:
      'A student-led initiative helping Peruvian physics undergraduates develop research experience and prepare for graduate study. I advise the team and mentor students through research, applications, and the less visible parts of scientific training.',
    links: [
      {
        label: 'Visit Derívate',
        href: 'https://derivate.org.pe',
      },
    ],
  },
  {
    category: 'initiative',
    title: 'Entre Físicos',
    role: 'Founding organizer · Advisor',
    description:
      'An annual research symposium connecting Peruvian physics students with graduate researchers and professionals working in Peru and abroad.',
    links: [],
  },
  {
    category: 'initiative',
    title: 'Undergraduate Research Mentorship Program',
    role: 'Founding advisor',
    description:
      'A summer research pathway pairing Peruvian physics undergraduates with Peruvian graduate researchers abroad for mentored research experience.',
    links: [],
  },
  {
    category: 'outreach',
    title: 'Public science',
    role: '@adrianciencia · 2020–2022',
    description:
      'Astronomy and physics in Spanish for an audience of more than 300,000.',
    links: [],
  },
] satisfies CommunityItem[];
