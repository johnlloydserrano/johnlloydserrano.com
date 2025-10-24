export interface SocialLink {
  id: string;
  name: string;
  imageUrl: string;
  url: string;
}

export type SocialLinkSchema = {
  name: string | null;
  imageUrl: string | null;
  url: string | null;
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};
