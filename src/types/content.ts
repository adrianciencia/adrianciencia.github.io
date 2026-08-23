export type ExternalLink = {
  label: string;
  href?: string;
};

export type ImageMetadata = {
  src?: string;
  alt?: string;
  caption?: string;
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

export type EditorialSection = {
  title: string;
  body: string;
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
  metadata: string;
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
  role?: string;
  period?: string;
  link?: ExternalLink;
  status?: string;
};

export type CommunityItem = {
  title?: string;
  description: string;
  period?: string;
  links: ExternalLink[];
};

export type PhotographyItem = ImageMetadata & {
  location?: string;
  year?: string;
  featured?: boolean;
};

export type ArchiveItem = {
  period: string;
  title?: string;
  description: string;
  link?: ExternalLink;
};
