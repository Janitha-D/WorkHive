// TypeScript interfaces for WorkHive

export interface Opportunity {
  id: string;
  title: string;
  platform: string;
  categorySlug: string;
  categoryName: string;
  description: string;
  earningsRange: string;
  earningsMin: number;
  earningsMax: number;
  paymentMethods: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeToStart: string;
  website: string;
  websiteLabel: string;
  steps: Step[];
  requirements: string[];
  tips: string[];
  tags: string[];
  featured?: boolean;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  count: number;
  color: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface SavedState {
  savedIds: string[];
  toggleSaved: (id: string) => void;
  isSaved: (id: string) => boolean;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
}
