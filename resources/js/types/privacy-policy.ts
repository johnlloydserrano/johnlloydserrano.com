type PrivacyPolicyItem = {
    number: number;
    title: string;
    content: string;
    list?: string[];
};

type PrivacyPolicy = {
    title: string;
    description: string;
    items: PrivacyPolicyItem[];
    update: string;
    author: string;
};