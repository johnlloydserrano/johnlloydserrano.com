export interface WorkExperience {
  id: string;
  logo: string;
  company: string;
  role: string;
  period: string;
}

export type WorkExperienceSchema = {
  logo: string | null;
  company: string | null;
  role: string | null;
  period: string | null;
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};
