export interface PersonalProject {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
}

export type PersonalProjectSchema = {
  name: string | null;
  slug: string | null;
  imageUrl: string | null;
  description: string | null;
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};
