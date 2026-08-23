import type { EditorialSection, Profile } from '../types/content';

export const profile = {
  name: 'Adrian Díaz Espinoza',
  title: 'Astrophysicist',
  descriptor: 'Short scientific descriptor placeholder.',
  currentStatus: 'Current status / location placeholder.',
  portrait: {
    placeholder: 'Portrait placeholder',
  },
  links: [
    { label: 'Email' },
    { label: 'Google Scholar' },
    { label: 'ORCID' },
    { label: 'ADS' },
    { label: 'GitHub' },
  ],
} satisfies Profile;

export const about = {
  title: 'A short introduction placeholder.',
  body: 'This space will introduce the scientific work and wider practice in a concise way.',
} satisfies EditorialSection;

export const now = {
  title: 'Current focus placeholder',
  body: 'Compact current-activities placeholder.',
} satisfies EditorialSection;
