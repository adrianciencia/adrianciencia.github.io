import type { ContactContent, Profile } from '../types/content';

export const profile = {
  name: 'Adrian Díaz Espinoza',
  title: 'Astrophysicist',
  bio: "Studying how galaxies grew in the Universe's first two billion years with JWST. In Peru, I help physics students find their way into research.",
  currentStatus: 'JWST/RUBIES research collaboration',
  location: 'Lima, Peru',
  portrait: {
    src: '/images/profile/portrait.jpg',
    sources: [
      { src: '/images/profile/portrait-220.webp', width: 220 },
      { src: '/images/profile/portrait-440.webp', width: 440 },
      { src: '/images/profile/portrait-660.webp', width: 660 },
    ],
    sizes: '(max-width: 860px) 6.5rem, 13.75rem',
    alt: '',
    width: 778,
    height: 1167,
  },
  links: [
    { label: 'Email', href: 'mailto:adrdiazes@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/adrianciencia' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adrianciencia' },
  ],
} satisfies Profile;

export const contact = {
  heading: 'Contact',
  invitation:
    'Write to me about research collaborations, about Derívate and mentoring Peruvian physics students, or about building tools for science.',
  email: 'adrdiazes@gmail.com',
} satisfies ContactContent;
