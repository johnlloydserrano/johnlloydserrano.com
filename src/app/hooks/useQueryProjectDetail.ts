import { useQuery } from '@tanstack/react-query';
import type {
  ProjectDetail,
  ProjectDetailSchema,
} from '@/models/projects/types';
import { client } from '@/libs/amplifyConfig';

export const QUERY_PROJECT_DETAIL_KEY = 'QUERY_PROJECT_DETAIL';

const transformProjectDetailResponse = (
  project: ProjectDetailSchema
): ProjectDetail => ({
  id: project.id ?? '',
  slug: project.slug ?? '',
  title: project.title ?? '',
  overview: project.overview ?? '',
  objectives: project.objectives ?? [],
  key_features: project.key_features ?? [],
  tech_stack: project.tech_stack ?? [],
  outcomes: project.outcomes ?? '',
  design: project.design ?? '',
  improvements: project.improvements ?? [],
  conclusion: project.conclusion ?? '',
  images: {
    banner: project.images?.banner ?? '',
    diagram: project.images?.diagram ?? '',
  },
  repository: project.repository ?? '',
  product_hunt: project.product_hunt
    ? {
        description: project.product_hunt.description ?? '',
        position: project.product_hunt.position ?? '',
        total_launches: project.product_hunt.total_launches ?? '',
        launch_date: project.product_hunt.launch_date ?? '',
        embed_image_url: project.product_hunt.embed_image_url ?? '',
        screenshots: project.product_hunt.screenshots ?? [],
        link: project.product_hunt.link ?? '',
      }
    : undefined,
});

const fetchProjectDetail = async (slug: string): Promise<ProjectDetail> => {
  const { data: projects, errors } = await client.models.ProjectDetail.list({
    filter: { slug: { eq: slug } },
  });

  if (errors || !projects?.length) {
    throw new Error('Project not found');
  }

  const project = projects[0];
  const nullSafeProjects = {
    ...(project as Omit<
      ProjectDetailSchema,
      'objectives' | 'key_features' | 'tech_stack'
    >),
    objectives: project.objectives?.filter((v): v is string => !!v) ?? [],
    key_features: project.key_features?.filter((v): v is string => !!v) ?? [],
    tech_stack: project.tech_stack?.filter((v): v is string => !!v) ?? [],
    product_hunt: project.product_hunt
      ? {
          ...project.product_hunt,
          screenshots:
            project.product_hunt.screenshots?.filter((v): v is string => !!v) ??
            [],
        }
      : undefined,
  } as ProjectDetailSchema;

  return transformProjectDetailResponse(nullSafeProjects);
};

const useQueryProjectDetail = (slug: string) => {
  return useQuery<ProjectDetail, Error>({
    queryKey: [QUERY_PROJECT_DETAIL_KEY, slug],
    queryFn: () => fetchProjectDetail(slug),
    enabled: !!slug,
    refetchOnWindowFocus: false,
  });
};

export default useQueryProjectDetail;
