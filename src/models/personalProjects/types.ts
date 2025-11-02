export interface PersonalProject {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  productHunt?: {
    title?: string;
    position?: string;
    totalLaunches?: string;
    launchDate?: string;
    logoUrl: string;
  };
}

export type PersonalProjectSchema = {
  name: string | null;
  slug: string | null;
  imageUrl: string | null;
  description: string | null;
  productHunt?: {
    title: string | null;
    position: string | null;
    totalLaunches: string | null;
    launchDate: string | null;
    logoUrl: string | null;
  } | null;
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};
