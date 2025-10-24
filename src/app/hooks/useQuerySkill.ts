import { useQuery } from '@tanstack/react-query';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../../amplify/data/resource';
import { AmplifyConfig } from '@/libs/config';
import { Skill, SkillSchema } from '@/models/skills/types';

export const QUERY_SKILL_KEY = 'QUERY_SKILL';

AmplifyConfig();

const client = generateClient<Schema>();

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
