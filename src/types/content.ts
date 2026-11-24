export type ExternalLink = {
  label: string;
  href?: string;
};

export type ImageSource = {
  src: string;
  width: number;
};

export type ImageMetadata = {
  src?: string;
  sources?: ImageSource[];
  sizes?: string;
  readoutCaption?: string;
  readout?: { label: string; value: string }[];
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
  placeholder?: string;
};

export type Profile = {
  name: string;
  title: string;
  bio: string;
  currentStatus: string;
  location?: string;
  portrait: ImageMetadata;
  links: ExternalLink[];
  cv?: ExternalLink;
};

export type ContactContent = {
  heading: string;
  invitation: string;
  email: string;
};

export type ResearchArtifactKind = 'paper' | 'arxiv' | 'ads' | 'code' | 'data' | 'project';

export type ResearchArtifact = ExternalLink & {
  kind: ResearchArtifactKind;
};

export type ResearchItem = {
  id: string;
  title: string;
  question: string;
  takeaway?: string;
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



export type PhotographyItem = ImageMetadata & {
  location?: string;
  year?: string;
  featured?: boolean;
};

