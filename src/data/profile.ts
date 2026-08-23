import type { AboutContent, NowContent, Profile } from '../types/content';

export const profile = {
  name: 'Adrian Díaz Espinoza',
  title: 'Astrophysicist',
  descriptor: 'High-redshift galaxies · spectroscopy · inference',
  currentStatus: 'JWST/RUBIES research collaboration',
  location: 'Lima, Peru',
  portrait: {
    placeholder: 'Portrait placeholder',
  },
  links: [
    { label: 'Email', href: 'mailto:adrdiazes@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/adrianciencia' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adrianciencia' },
  ],
} satisfies Profile;

export const about = {
  paragraphs: [
    'I am an observational astrophysicist studying how galaxies build their stellar mass at high redshift, and how much of what we infer depends on the observational information and assumptions supplied to our models. My current work uses JWST/RUBIES spectroscopy and photometry to test recent star-formation-rate inference through controlled comparisons between different data constraints.',
    'I am especially interested in separating astrophysical trends from fitting systematics and, over time, extending that work toward broader multi-wavelength inference. Beyond research, I build tools and communities around difficult problems—work that also shapes how I think about evidence, systems, and scientific training.',
  ],
} satisfies AboutContent;

export const now = {
  items: [
    {
      label: 'Research',
      text: 'Continuing a JWST/RUBIES research collaboration with Michael V. Maseda, testing how spectroscopy changes recent-SFR inference at z ≈ 4–7.',
    },
    {
      label: 'Community',
      text: "Advising Derívate's research-training and mentoring work for Peruvian physics students pursuing research and graduate study.",
    },
    {
      label: 'Building',
      text: "Building Mindari's product and AI-assisted intake and therapist-matching system.",
    },
  ],
} satisfies NowContent;
