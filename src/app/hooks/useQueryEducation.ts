import { useQuery } from '@tanstack/react-query';
import { Education, EducationSchema } from '@/models/educations/types';
import { client } from '@/libs/amplifyConfig';

export const QUERY_EDUCATION_KEY = 'QUERY_EDUCATION';

const transformEducationResponse = (education: EducationSchema): Education => ({
  id: education.id ?? '',
  logo: education.logo ?? '',
  school: education.school ?? '',
  degree: education.degree ?? '',
  year: education.year ?? '',
});

const fetchEducation = async (): Promise<Education[]> => {
  const { data: educations, errors } = await client.models.Education.list();

  if (errors || !educations) {
    throw new Error('Education not found');
  }

  const sortedEducation = [...educations].sort((a, b) =>
    a.createdAt.localeCompare(b.createdAt)
  );
  return sortedEducation.map(transformEducationResponse);
};

const useQueryEducation = () => {
  return useQuery<Education[], Error>({
    queryKey: [QUERY_EDUCATION_KEY],
    queryFn: fetchEducation,
    refetchOnWindowFocus: false,
  });
};

export default useQueryEducation;
