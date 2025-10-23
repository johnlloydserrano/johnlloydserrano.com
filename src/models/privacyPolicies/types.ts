export interface PrivacyPolicyItem {
  number: number;
  title: string;
  content: string;
  list?: string[];
}

export interface PrivacyPolicy {
  title: string;
  description: string;
  items: PrivacyPolicyItem[];
  update: string;
  author: string;
}
