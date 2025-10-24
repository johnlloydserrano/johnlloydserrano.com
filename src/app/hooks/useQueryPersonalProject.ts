import { useQuery } from '@tanstack/react-query';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../../amplify/data/resource';
import { AmplifyConfig } from '@/libs/config';
import type {
  PersonalProject,
  PersonalProjectSchema,
} from '@/models/personalProjects/types';

export const QUERY_PERSONAL_PROJECT_KEY = 'QUERY_PERSONAL_PROJECT';

AmplifyConfig();

const client = generateClient<Schema>();

const transformPersonalProjectResponse = (
  project: PersonalProjectSchema
): PersonalProject => ({
  id: project.id ?? '',
  name: project.name ?? '',
  slug: project.slug ?? '',
  imageUrl: project.imageUrl ?? '',
  description: project.description ?? '',
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
