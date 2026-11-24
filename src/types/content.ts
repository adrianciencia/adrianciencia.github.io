export type ExternalLink = {
  label: string;
  href?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: 'email' | 'github' | 'linkedin' | 'instagram' | 'x';
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
  /** Given name and both surnames; the surnames never break across lines. */
  givenName: string;
  surnames: string;
  title: string;
  bio: string;
  /** Highest degree and institution, e.g. "MSc in Astronomy, University of Wisconsin–Madison". */
  credential?: string;
  currentStatus: string;
  location?: string;
  portrait: ImageMetadata;
  /** The handle shared across every social profile, shown under the icons. */
  handle: string;
  links: SocialLink[];
  cv?: ExternalLink;
};

export type ContactContent = {
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
  /** The result in one number, shown on the homepage card until an illustration exists. */
  keyFigure?: { value: string; label: string };
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

