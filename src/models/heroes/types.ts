export interface Hero {
  id: string;
  name: string;
  imageUrl: string;
  headline: string;
  paragraphs: string[];
}

export type HeroSchema = {
  name: string | null;
  imageUrl: string | null;
  headline: string | null;
  paragraphs: string[] | string | number | boolean | object | null;
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};
