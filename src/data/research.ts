import type { ResearchItem } from '../types/content';

export const research = [
  {
    id: 'where-spectroscopy-constrains-sfr',
    title: 'What does spectroscopy actually constrain in recent-SFR inference?',
    question: "Which information in a JWST/NIRSpec spectrum changes what we infer about a galaxy's recent star formation?",
    summary:
      'In matched Prospector fits to 116 RUBIES galaxies at z ≈ 4–7, removing the NIRSpec spectrum shifts median 10 Myr SFRs by −0.45 dex and widens their posteriors by a factor of 3.3. Supplying an independent spectroscopic metallicity recovers little of that shift and does not restore the lost precision.',
    figure: {
      src: '/images/research/spectroscopy-sfr.png',
      alt: 'Changes in inferred 10 Myr SFR relative to the full-spectrum fit for three reduced-information experiments. Masking Balmer lines has a median shift of +0.01 dex, while photometry with spectroscopic metallicity and photometry alone each have medians of −0.44 dex; horizontal lines show galaxy 16–84% ranges.',
      width: 1800,
      height: 1000,
    },
    status: 'Manuscript in preparation',
    artifacts: [],
  },
  {
    id: 'recalibrating-halpha-high-redshift',
    title: 'How should Hα trace star formation at z > 3?',
    question: 'Can local Hα star-formation-rate calibrations be applied to galaxies in the early Universe?',
    summary:
      'Using JWST/NIRSpec spectroscopy and HST/NIRCam photometry for roughly 200 RUBIES galaxies at z = 3.4–7, I found that classical Hα calibrations overestimate 10 Myr Prospector SFRs by 0.16 ± 0.04 dex, with a gas-metallicity dependence. I developed a metallicity-dependent conversion that reduces the offset.',
    figure: {
      src: '/images/research/halpha-calibration.png',
      alt: 'Logarithmic Hα-to-SFR conversion factor versus stellar metallicity for the Prospector/MIST sample. Gray points and a red robust MIST relation show the conversion factor increasing with metallicity while remaining below the dashed local Chabrier calibration.',
      width: 2164,
      height: 1804,
    },
    status: 'M.Sc. research · JWST/RUBIES',
    artifacts: [],
  },
] satisfies ResearchItem[];
