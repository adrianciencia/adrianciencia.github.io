import type { ResearchItem } from '../types/content';

export const research = [
  {
    id: 'research-item-01',
    title: 'Research item 01',
    question: 'Question / title placeholder.',
    summary: 'Short result placeholder.',
    figure: { placeholder: 'Figure placeholder' },
    metadata: 'Metadata / artifact placeholders',
    artifacts: [],
  },
  {
    id: 'research-item-02',
    title: 'Research item 02',
    question: 'Question / title placeholder.',
    summary: 'Short result placeholder.',
    figure: { placeholder: 'Figure placeholder' },
    metadata: 'Metadata / artifact placeholders',
    artifacts: [],
  },
] satisfies ResearchItem[];
