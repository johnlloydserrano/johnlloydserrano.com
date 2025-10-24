export interface Education {
  id: string;
  logo: string;
  school: string;
  degree?: string;
  year: string;
}

export type EducationSchema = {
  logo: string | null;
  school: string | null;
  degree: string | null;
  year: string | null;
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};
