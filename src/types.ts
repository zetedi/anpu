export type Language = 'en' | 'ar' | 'zh' | 'es';

export interface Content {
  header: {
    navHome: string;
    navHow: string;
    navFeatures: string;
    navTeam: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  howItWorks: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  features: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  team: {
    title: string;
    members: {
      name: string;
      role: string;
    }[];
  };
  footer: {
    text: string;
    links: {
      project: string;
      community: string;
      legal: string;
    }
  };
}
