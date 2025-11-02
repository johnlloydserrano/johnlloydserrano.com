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
  keyFeatures: project.keyFeatures ?? [],
  techStack: project.techStack ?? [],
  outcomes: project.outcomes ?? '',
  design: project.design ?? '',
  improvements: project.improvements ?? [],
  conclusion: project.conclusion ?? '',
  images: {
    banner: project.images?.banner ?? '',
    diagram: project.images?.diagram ?? '',
  },
  repository: project.repository ?? '',
  productHunt: project.productHunt
    ? {
        description: project.productHunt.description ?? '',
        position: project.productHunt.position ?? '',
        totalLaunches: project.productHunt.totalLaunches ?? '',
        launchDate: project.productHunt.launchDate ?? '',
        embedImageUrl: project.productHunt.embedImageUrl ?? '',
        screenshots: project.productHunt.screenshots ?? [],
        link: project.productHunt.link ?? '',
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
      'objectives' | 'keyFeatures' | 'techStack'
    >),
    objectives: project.objectives?.filter((v): v is string => !!v) ?? [],
    keyFeatures: project.keyFeatures?.filter((v): v is string => !!v) ?? [],
    techStack: project.techStack?.filter((v): v is string => !!v) ?? [],
    productHunt: project.productHunt
      ? {
          ...project.productHunt,
          screenshots:
            project.productHunt.screenshots?.filter((v): v is string => !!v) ??
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
