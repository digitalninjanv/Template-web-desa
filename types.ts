

export interface NavLink {
  name: string;
  path: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  content: string;
}

export interface VillageService {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SME {
  id: number;
  name: string;
  category: string;
  product: string;
  imageUrl: string;
  owner: string;
  contact: string;
  description: string;
}

export interface TourismSpot {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  activities: string[];
  facilities: string[];
}

export interface GovernmentMember {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
  linkLabel: string;
}