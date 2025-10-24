export interface Timeline {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  time: string;
}

export type TimelineSchema = {
  imageUrl: string | null;
  title: string | null;
  description: string | null;
  time: string | null;
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};
