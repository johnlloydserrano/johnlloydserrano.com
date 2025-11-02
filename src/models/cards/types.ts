export interface CardListGrid {
  name: string;
  description?: string;
  imageUrl: string;
  slug?: string;
  productHunt?: {
    title?: string;
    position?: string;
    totalLaunches?: string;
    launchDate?: string;
    logoUrl: string;
  };
}
