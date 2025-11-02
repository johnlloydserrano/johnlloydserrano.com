export interface ProjectDetail {
  id: string;
  slug: string;
  title: string;
  overview?: string;
  objectives?: string[];
  keyFeatures?: string[];
  techStack?: string[];
  outcomes?: string;
  design?: string;
  improvements?: string[];
  conclusion?: string;
  images?: {
    banner?: string;
    diagram?: string;
  };
  repository?: string;
  productHunt?: {
    description?: string;
    position?: string;
    totalLaunches?: string;
    launchDate?: string;
    embedImageUrl?: string;
    screenshots?: string[];
    link?: string;
  };
}

export type ProjectDetailSchema = {
  slug: string | null;
  title: string | null;
  overview: string | null;
  objectives: string[] | null;
  keyFeatures: string[] | null;
  techStack: string[] | null;
  outcomes: string | null;
  design: string | null;
  improvements: string[] | null;
  conclusion: string | null;
  images: {
    banner: string | null;
    diagram: string | null;
  } | null;
  repository: string | null;
  productHunt?: {
    description: string | null;
    position: string | null;
    totalLaunches: string | null;
    launchDate: string | null;
    embedImageUrl: string | null;
    screenshots: string[] | null;
    link: string | null;
  } | null;
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};
