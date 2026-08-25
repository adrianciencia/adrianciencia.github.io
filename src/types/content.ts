export type ExternalLink = {
  label: string;
  href?: string;
};

export type ImageMetadata = {
  src?: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
  placeholder?: string;
};

export type Profile = {
  name: string;
  title: string;
  descriptor: string;
  currentStatus: string;
  location?: string;
  portrait: ImageMetadata;
  links: ExternalLink[];
  cv?: ExternalLink;
};

export type AboutContent = {
  paragraphs: string[];
};

export type ResearchArtifactKind = 'paper' | 'arxiv' | 'ads' | 'code' | 'data' | 'project';

export type ResearchArtifact = ExternalLink & {
  kind: ResearchArtifactKind;
};

export type ResearchItem = {
  id: string;
  title: string;
  question: string;
  summary: string;
  figure: ImageMetadata;
  metadata?: string;
  status?: string;
  year?: string;
  artifacts: ResearchArtifact[];
};

export type Publication = {
  title: string;
  authors: string;
  year: string;
  venueOrStatus: string;
  links: ExternalLink[];
  featured?: boolean;
};

export type BuildingItem = {
  title: string;
  description: string;
  contribution?: string;
  role?: string;
  link?: ExternalLink;
  status?: string;
};

export type CommunityItem = {
  category: 'feature' | 'initiative' | 'outreach';
  title: string;
  description: string;
  role?: string;
  links: ExternalLink[];
};

export type PhotographyItem = ImageMetadata & {
  location?: string;
  year?: string;
  featured?: boolean;
};

export type ArchiveItem = {
  title?: string;
  description: string;
  link?: ExternalLink;
};
