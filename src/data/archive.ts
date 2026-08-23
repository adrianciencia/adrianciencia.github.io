import type { ArchiveItem } from '../types/content';

export const archive = [
  {
    period: '2020–2021',
    title: 'Resolved galaxy evolution with SDSS-IV MaNGA',
    description:
      'Used MaNGA integral-field spectroscopy and Pipe3D maps to study resolved stellar and gas properties in 3,794 galaxies, including 247 systems with indeterminate ionization. Developed a concentric-annulus analysis to trace ionization with galactocentric radius across green-valley, red-sequence, and blue-cloud systems.',
    link: {
      label: 'Thesis',
      href: 'https://hdl.handle.net/20.500.12672/16957',
    },
  },
  {
    period: '2022–2024',
    title: 'Exploratory near-infrared spectroscopy',
    description:
      'Tested the ESO KMOS pipeline on VLT/KMOS integral-field data, followed later by a separate reduction effort using PypeIt on MMIRS spectra. These were exploratory reduction projects rather than a combined analysis or publication-producing program.',
  },
  {
    period: '2015–2019',
    title: 'Science writing & astronomy community',
    description:
      'Co-organized the SPACE Seminar Series at UNMSM, which hosted roughly 30 astronomy talks per year, and later wrote science articles for the Hispanic edition of N+1.',
  },
] satisfies ArchiveItem[];
