import { useQuery } from '@tanstack/react-query';
import { Skill, SkillSchema } from '@/models/skills/types';
import { client } from '@/libs/amplifyConfig';

export const QUERY_SKILL_KEY = 'QUERY_SKILL';

const transformSkillResponse = (skill: SkillSchema): Skill => ({
  id: skill.id ?? '',
  name: skill.name ?? '',
  imageUrl: skill.imageUrl ?? '',
});

const fetchSkill = async (): Promise<Skill[]> => {
  const { data: skills, errors } = await client.models.Skill.list();

  if (errors || !skills) {
    throw new Error('Skills not found');
  }

  const sortedSkills = [...skills].sort((a, b) =>
    a.createdAt.localeCompare(b.createdAt)
  );
  return sortedSkills.map(transformSkillResponse);
};

const useQuerySkill = () => {
  return useQuery<Skill[], Error>({
    queryKey: [QUERY_SKILL_KEY],
    queryFn: fetchSkill,
    refetchOnWindowFocus: false,
  });
};

export default useQuerySkill;
