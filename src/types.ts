/** A link shown on the site. If `href` is empty the link is hidden in the
 *  production build and shown as a dashed "add URL" reminder in `npm run dev`. */
export interface ExternalLink {
  label: string;
  /** Full URL (https://...), mailto: link, or a path under /public (e.g. "files/cv.pdf"). */
  href?: string;
}

export interface Profile {
  name: string;
  role: string;
  /** One sentence under your name on the home page. */
  tagline: string;
  affiliation: string;
  location: string;
  email: string;
  /** Path under /public, e.g. "images/profile.jpg". Leave empty to show initials. */
  photo?: string;
  /** Path under /public, e.g. "files/cv.pdf". Leave empty to hide the CV button. */
  cvUrl?: string;
  /** One line saying what you are looking for. Shown under the introduction. */
  availability?: string;
  /** Introduction paragraphs. The first is shown in larger type. */
  intro: string[];
  links: ExternalLink[];
  /** Four or so headline figures shown as a strip on the home page. */
  glance: { value: string; label: string }[];
}

export interface ResearchDirection {
  title: string;
  summary: string;
  questions: string[];
  /** Shorter secondary threads, each a heading and a sentence. */
  threads: { title: string; text: string }[];
  keywords: string[];
}

export type PublicationStatus = 'published' | 'preprint' | 'under-review' | 'in-preparation';

export interface Publication {
  id: string;
  title: string;
  /** Write names exactly as they should appear. Your own name is bolded automatically. */
  authors: string[];
  venue: string;
  year?: number;
  /** Replaces the year in the left-hand column, e.g. "Manuscript". */
  dateLabel?: string;
  status: PublicationStatus;
  abstract?: string;
  /** Two plain sentences for the home page card. */
  summary?: string;
  /** Anything worth saying in a line, e.g. "Equal contribution" or "Best paper nominee". */
  note?: string;
  links?: ExternalLink[];
}

/** One entry in the Experience or Education lists. */
export interface Entry {
  id: string;
  title: string;
  /** Role and place, e.g. "Co-author, ISA Journal of Engineering and Technology". */
  subtitle?: string;
  /** Left-hand label: a year, a range, or "In progress". */
  when: string;
  summary: string;
  /** What you personally did. Professors look for this. */
  contribution?: string;
  highlights?: string[];
  links?: ExternalLink[];
}

/** One stop on the research path. Listed oldest first, ending with where you are heading. */
export interface TimelineItem {
  id: string;
  /** Date range or label shown on the left, e.g. "Jan to Sep 2024" or "In progress". */
  when: string;
  title: string;
  /** Full title of the work itself. When set, the Research page shows it in italics as the heading
   *  instead of `title`; `title` stays as the short label used on the home page. */
  workTitle?: string;
  /** True when the work is a paper: its title is then also shown in quotation marks. */
  isPaper?: boolean;
  /** Place and supervisor or collaborators. */
  place?: string;
  summary: string;
  /** What you personally did. Shown after the summary as "My role." */
  contribution?: string;
  highlights?: string[];
  links?: ExternalLink[];
  /** True for work that has not happened yet. Drawn with a hollow marker. */
  upcoming?: boolean;
}

export interface Achievement {
  year: string;
  text: string;
  /** Optional proof, e.g. a certificate image under /public. Opens in a new tab. */
  link?: ExternalLink;
}

export interface SkillGroup {
  title: string;
  items: string[];
  note?: string;
}

/** An open-source project, shown on the home page and the Publications page. */
export interface Software {
  id: string;
  name: string;
  /** Year of the first release. */
  year: number;
  /** One or two plain sentences on what it does. */
  description: string;
  /** Short facts shown as a line, e.g. ['Python', 'MIT licence']. */
  meta: string[];
  /** The paper or manuscript it is the code for, if any. */
  accompanies?: { title: string; venue: string };
  links: ExternalLink[];
}

/** A figure reproduced from a paper or manuscript. Images live in public/images/figures/. */
export interface ResultFigure {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  /** True for photographs and video frames, which sit edge to edge. Diagrams and charts have
   *  white backgrounds, so they keep a white frame around them. */
  photo?: boolean;
}

/** A small results table, written out as data so it stays sharp and readable on any screen. */
export interface ResultTable {
  caption: string;
  columns: string[];
  rows: string[][];
  /** Index of a row to emphasise, e.g. the proposed method. */
  highlightRow?: number;
  note?: string;
}

/** Selected figures and tables for one piece of work, shown on the Research page. */
export interface WorkResults {
  id: string;
  title: string;
  /** Short citation and licence line shown under the block, e.g. where the figures come from. */
  source: string;
  summary: string;
  figures: ResultFigure[];
  tables: ResultTable[];
  links?: ExternalLink[];
}
