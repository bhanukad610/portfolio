export interface MediumPost {
  title: string;
  description: string;
  link: string;
  thumbnail?: string;
}

export interface MediumRssResponse {
  items: MediumPost[];
}
