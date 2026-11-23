import type { AboutContent, ContactContent, Profile } from '../types/content';

export const profile = {
  name: 'Adrian Díaz Espinoza',
  title: 'Astrophysicist',
  descriptor: 'High-redshift galaxies · spectroscopy · inference',
  mission: "Building Peru's physics research community",
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

export const about = {
  paragraphs: [
    "I'm an astrophysicist studying how galaxies grew in the Universe's first two billion years, using JWST spectroscopy to test what our data can actually tell us. In Peru, I help physics students find their way into research: I founded Derívate and helped found Entre Físicos.",
    'I am interested in problems where what we can conclude depends critically on the evidence available, the assumptions we make, and the systems we build around them. Beyond research, I contribute to tools and communities that make difficult scientific work more accessible, rigorous, and durable.',
  ],
} satisfies AboutContent;

export const contact = {
  heading: 'Get in touch',
  invitation:
    'Write to me about research collaborations, about Derívate and mentoring Peruvian physics students, or about building tools for science.',
  email: 'adrdiazes@gmail.com',
} satisfies ContactContent;
