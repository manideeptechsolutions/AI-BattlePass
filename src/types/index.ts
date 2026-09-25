export interface CurriculumModule {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  subtopics: string[];
  tools: string[];
  categoryBadge: string;
  accentColor: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ToolItem {
  name: string;
  category: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface AudienceCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  gradient: string;
}

export interface LearningStep {
  step: string;
  title: string;
  desc: string;
  highlight?: boolean;
}

export interface ProjectCategory {
  title: string;
  description: string;
  examples: string[];
  iconName: string;
}
