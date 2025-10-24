import { useQuery } from '@tanstack/react-query';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../../amplify/data/resource';
import { AmplifyConfig } from '@/libs/config';
import {
  WorkExperience,
  WorkExperienceSchema,
} from '@/models/workExperiences/types';

export const QUERY_WORK_EXPERIENCE_KEY = 'QUERY_WORK_EXPERIENCE';

AmplifyConfig();

const client = generateClient<Schema>();

const transformWorkExperienceResponse = (
  work: WorkExperienceSchema
): WorkExperience => ({
  id: work.id ?? '',
  logo: work.logo ?? '',
  company: work.company ?? '',
  role: work.role ?? '',
  period: work.period ?? '',
});

const fetchWorkExperience = async (): Promise<WorkExperience[]> => {
  const { data: workExperiences, errors } =
    await client.models.WorkExperience.list();

  if (errors || !workExperiences) {
    throw new Error('Work experience not found');
  }

  const sortedWorkExperience = [...workExperiences].sort((a, b) =>
    a.createdAt.localeCompare(b.createdAt)
  );
  return sortedWorkExperience.map(transformWorkExperienceResponse);
};

const useQueryWorkExperience = () => {
  return useQuery<WorkExperience[], Error>({
    queryKey: [QUERY_WORK_EXPERIENCE_KEY],
    queryFn: fetchWorkExperience,
    refetchOnWindowFocus: false,
  });
};

export default useQueryWorkExperience;
