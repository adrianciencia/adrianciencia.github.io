import type { AboutContent, Profile } from '../types/content';

export const profile = {
  name: 'Adrian Díaz Espinoza',
  title: 'Astrophysicist',
  descriptor: 'High-redshift galaxies · spectroscopy · inference',
  currentStatus: 'JWST/RUBIES research collaboration',
  location: 'Lima, Peru',
  portrait: {
    src: '/images/profile/portrait.jpg',
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
    'I am an observational astrophysicist studying how galaxies build their stellar mass at high redshift, and how much of what we infer depends on the observational information and assumptions supplied to our models. My current work uses JWST/RUBIES spectroscopy and photometry to test recent star-formation-rate inference through controlled comparisons between different data constraints.',
    'I am especially interested in separating astrophysical trends from fitting systematics and, over time, extending that work toward broader multi-wavelength inference. Beyond research, I build tools and communities around difficult problems—work that also shapes how I think about evidence, systems, and scientific training.',
  ],
} satisfies AboutContent;
