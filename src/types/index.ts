export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  pillarTitle: string;
  subtitle: string;
  tags: string[];
  responsibilities: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  date: string;
  shortDescription: string;
  technologies: string[];
  keyPoints: string[];
  architectureType?: 'observability' | 'rag' | 'classifier' | 'system';
  architectureSteps?: {
    step: string;
    detail: string;
    badge?: string;
  }[];
  overview?: string;
  problemStatement?: string;
  implementationDetails?: string[];
  accuracyNote?: string;
  githubUrl?: string; // only if real, else undefined
  demoUrl?: string;   // only if real, else undefined
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  platform: string;
  period: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
  level: string;
}
