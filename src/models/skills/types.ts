export interface Skill {
  id: string;
  name: string;
  imageUrl: string;
}

export type SkillSchema = {
  name: string | null;
  imageUrl: string | null;
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};
