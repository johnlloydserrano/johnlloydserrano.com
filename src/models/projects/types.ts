export interface ProjectDetail {
  id: string;
  slug: string;
  title: string;
  overview?: string;
  objectives?: string[];
  key_features?: string[];
  tech_stack?: string[];
  outcomes?: string;
  design?: string;
  improvements?: string[];
  conclusion?: string;
  images?: {
    banner?: string;
    diagram?: string;
  };
  repository?: string;
  product_hunt?: {
    description?: string;
    position?: string;
    total_launches?: string;
    launch_date?: string;
    embed_image_url?: string;
    screenshots?: string[];
    link?: string;
  };
}

export type ProjectDetailSchema = {
  slug: string | null;
  title: string | null;
  overview: string | null;
  objectives: string[] | null;
  key_features: string[] | null;
  tech_stack: string[] | null;
  outcomes: string | null;
  design: string | null;
  improvements: string[] | null;
  conclusion: string | null;
  images: {
    banner: string | null;
    diagram: string | null;
  } | null;
  repository: string | null;
  product_hunt?: {
    description: string | null;
    position: string | null;
    total_launches: string | null;
    launch_date: string | null;
    embed_image_url: string | null;
    screenshots: string[] | null;
    link: string | null;
  } | null;
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};
