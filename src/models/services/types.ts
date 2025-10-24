export interface Service {
  id: string;
  description: string;
}

export type ServiceSchema = {
  description: string | null;
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};
