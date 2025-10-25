import { useQuery } from '@tanstack/react-query';
import {
  WorkExperience,
  WorkExperienceSchema,
} from '@/models/workExperiences/types';
import { client } from '@/libs/amplifyConfig';

export const QUERY_WORK_EXPERIENCE_KEY = 'QUERY_WORK_EXPERIENCE';

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
