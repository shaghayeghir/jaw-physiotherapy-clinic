// src/types/blog.ts

export interface MuscleInfo {
  name: string;
  referredPain: string;
  symptoms: string[];
}

export interface PatientExperience {
  temporalis: string;
  masseter: string;
  digastric: string;
}

export interface BlogPost {
  id: string;
  slug: string;

  title: string;

  image: string;
  date: string;
  readTime: string;
  contentImage: string[];
  category: string[];
  tags: string[];

  content: {
    intro?: string;
    main?: string;
    conclusion?: string;
  };

  patientExperience: PatientExperience;
}
