import { useQuery } from '@tanstack/react-query';
import type {
  PersonalProject,
  PersonalProjectSchema,
} from '@/models/personalProjects/types';
import { client } from '@/libs/amplifyConfig';

export const QUERY_PERSONAL_PROJECT_KEY = 'QUERY_PERSONAL_PROJECT';

const transformPersonalProjectResponse = (
  project: PersonalProjectSchema
): PersonalProject => ({
  id: project.id ?? '',
  name: project.name ?? '',
  slug: project.slug ?? '',
  imageUrl: project.imageUrl ?? '',
  description: project.description ?? '',
  productHunt: project.productHunt
    ? {
        title: project.productHunt.title ?? '',
        position: project.productHunt.position ?? '',
        totalLaunches: project.productHunt.totalLaunches ?? '',
        launchDate: project.productHunt.launchDate ?? '',
        logoUrl: project.productHunt.logoUrl ?? '',
      }
    : undefined,
});

const fetchPersonalProject = async (): Promise<PersonalProject[]> => {
  const { data: projects, errors } = await client.models.PersonalProject.list();

  if (errors || !projects) {
    throw new Error('Personal projects not found');
  }

  const sortedProjects = [...projects].sort((a, b) =>
    a.createdAt.localeCompare(b.createdAt)
  );
  return sortedProjects.map(transformPersonalProjectResponse);
};

const useQueryPersonalProject = () => {
  return useQuery<PersonalProject[], Error>({
    queryKey: [QUERY_PERSONAL_PROJECT_KEY],
    queryFn: fetchPersonalProject,
    refetchOnWindowFocus: false,
  });
};

export default useQueryPersonalProject;
