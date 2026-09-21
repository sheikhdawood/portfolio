import {
  SkillCategory,
  ExperienceItem,
  ProjectItem,
  EducationItem,
  CertificationItem,
  LanguageItem,
} from '../types';

export const personalInfo = {
  name: "Mehnoor Rafiqi",
  title: "AI/ML Developer | Python Backend Developer",
  headline: "AI/ML Developer & Python Backend Developer",
  supportingText: "Building practical AI systems, intelligent data pipelines, RAG applications, and production-ready backend systems.",
  shortIntro: "AI/ML and Python Backend Developer with hands-on experience building FastAPI-based backend systems, RESTful APIs, LLM-powered data pipelines, NLP applications, and retrieval-based chatbots.",
  location: "Srinagar, India",
  email: "rafiqimehnoor@gmail.com",
  phone: "6005772304",
  githubUrl: "https://github.com/MehnoorRafiqi18",
  linkedinUrl: "https://www.linkedin.com/in/mehnoor-rafiqi-1a7638318/",
  technicalProfileTags: [
    "AI / ML",
    "Backend Engineering",
    "LLM Applications",
    "RAG",
    "NLP",
    "API Development",
    "Data Processing",
  ],
  aboutNarrative: [
    "AI/ML and Python Backend Developer with hands-on experience building FastAPI-based backend systems, RESTful APIs, LLM-powered data pipelines, NLP applications, and retrieval-based chatbots.",
    "Specialized in transforming unstructured documents into structured outputs, designing production-ready REST APIs with FastAPI, managing databases with MongoDB, implementing secure authentication, and handling third-party API integrations.",
    "Experienced in production debugging, building resilient background workflows, and optimizing database retrieval. Deeply interested in machine learning, LLMs, RAG architectures, and scalable backend engineering."
  ],
};

export const skillsData: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Python", "C", "C++", "SQL", "JavaScript"],
  },
  {
    title: "AI / Machine Learning",
    skills: ["Machine Learning", "NLP", "RAG", "LLMs", "Transformers", "SentenceTransformers"],
  },
  {
    title: "Backend / APIs",
    skills: ["FastAPI", "Flask", "REST APIs", "JWT Authentication", "APScheduler"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "SQL"],
  },
  {
    title: "AI / LLM Tools",
    skills: ["HuggingFace", "OpenAI API", "Groq API", "Stable Diffusion API"],
  },
  {
    title: "Data / Big Data",
    skills: ["Apache Spark", "Apache Ozone", "Apache Iceberg"],
  },
  {
    title: "DevOps / Observability",
    skills: ["Git", "Docker", "Prometheus", "Grafana", "Loki", "Promtail", "OpenTelemetry", "Jaeger"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "Streamlit"],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "report-generation-system",
    role: "AI/ML Intern",
    company: "AiiOTs GEEK WORLD PVT LTD",
    location: "Srinagar, Jammu & Kashmir",
    period: "October 2025 – Present",
    pillarTitle: "Report Generation System",
    subtitle: "Automated Document Processing & Dynamic Data Synthesis",
    tags: ["FastAPI", "Groq LLM", "PyMuPDF", "PowerPoint XML", "PostgreSQL", "MongoDB", "CTE SQL"],
    responsibilities: [
      "Developed a FastAPI-based pipeline that automates report generation from PPTX and PDF files.",
      "Resolved {{placeholder}} variables using live PostgreSQL and MongoDB data.",
      "Implemented Groq-powered LLM placeholder identification.",
      "Implemented CTE-based SQL generation for dynamic data retrieval.",
      "Built a unified document-processing pipeline.",
      "Used PowerPoint XML, PyMuPDF, pdf2docx, and vision LLMs to extract structured content from PPTX and PDF files."
    ],
  },
  {
    id: "attendance-management-backend",
    role: "AI/ML Intern",
    company: "AiiOTs GEEK WORLD PVT LTD",
    location: "Srinagar, Jammu & Kashmir",
    period: "October 2025 – Present",
    pillarTitle: "Attendance Management Backend — Clokin",
    subtitle: "Production Enterprise Management Platform",
    tags: ["FastAPI", "MongoDB", "JWT Auth", "REST APIs", "Leave Engine", "WFH Validation"],
    responsibilities: [
      "Contributed to the production FastAPI and MongoDB platform for enterprise attendance and organization management.",
      "Engineered backend modules for Authentication, Attendance, Leave management, WFH, Teams, and Notifications.",
      "Implemented backend API logic, leave-quota enforcement, and critical validation fixes.",
      "Built team and manager-facing leave approval workflows.",
      "Delivered end-to-end employee leave-management functionality."
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "observability-web-apps",
    name: "Observability in Web Applications",
    date: "February 2025 – July 2025",
    shortDescription: "Built a fully observable chat application with metrics, centralized logging, and distributed tracing.",
    technologies: [
      "Docker Compose",
      "Prometheus",
      "Grafana",
      "Loki",
      "Promtail",
      "OpenTelemetry",
      "Jaeger",
    ],
    architectureType: "observability",
    architectureSteps: [
      { step: "Chat Application", detail: "Core microservice handling chat activity and user interactions", badge: "Source Service" },
      { step: "Prometheus & Grafana", detail: "Scrapes runtime metrics and renders visual performance dashboards", badge: "Metrics Layer" },
      { step: "Promtail & Loki", detail: "Ships and aggregates container logs for centralized search and correlation", badge: "Logging Layer" },
      { step: "OpenTelemetry & Jaeger", detail: "Collects distributed spans and visualizes execution request latency traces", badge: "Tracing Layer" },
    ],
    overview: "Built a fully observable chat application equipped with multi-layered monitoring, centralized logging, and distributed tracing to monitor service health and pinpoint latency bottlenecks.",
    problemStatement: "Modern microservices require visibility across metrics, logs, and distributed traces to diagnose production issues and maintain reliable uptime.",
    implementationDetails: [
      "Built a fully observable chat application.",
      "Integrated Prometheus for metrics collection.",
      "Created Grafana monitoring dashboards.",
      "Implemented centralized logging using Loki and Promtail.",
      "Implemented distributed tracing using OpenTelemetry and Jaeger."
    ],
    keyPoints: [
      "Built a fully observable chat application.",
      "Integrated Prometheus for metrics collection.",
      "Created Grafana monitoring dashboards.",
      "Implemented centralized logging using Loki and Promtail.",
      "Implemented distributed tracing using OpenTelemetry and Jaeger."
    ],
  },
  {
    id: "company-info-chatbot",
    name: "Company Information Chatbot",
    date: "January 2026",
    shortDescription: "AI-powered chatbot that retrieves company information and generates contextual answers.",
    technologies: [
      "Python",
      "SentenceTransformers",
      "Vector Similarity Search",
      "HuggingFace",
      "OpenAI",
    ],
    architectureType: "rag",
    architectureSteps: [
      { step: "Company Website", detail: "Raw source content containing organizational information and documentation", badge: "Data Source" },
      { step: "Scraping & Processing", detail: "Extracts textual content and structures it into semantic chunks", badge: "Data Ingestion" },
      { step: "Embeddings", detail: "SentenceTransformers converts text chunks into dense vector representations", badge: "Embedding Model" },
      { step: "Vector Similarity Search", detail: "Indexes and queries vectors against user queries using cosine similarity", badge: "Vector Store" },
      { step: "Relevant Context", detail: "Retrieves top-k closest chunks matching the semantic query", badge: "Retriever" },
      { step: "LLM Generation", detail: "HuggingFace and OpenAI models synthesize retrieved context into accurate answers", badge: "Inference" },
    ],
    overview: "An intelligent retrieval-augmented system designed to scrape company websites, ingest domain knowledge, perform semantic vector similarity matching, and generate accurate context-aware responses.",
    problemStatement: "Company knowledge bases are frequently unstructured, making direct keyword search ineffective for precise natural language inquiry.",
    implementationDetails: [
      "Scraped company information.",
      "Processed collected content for question answering.",
      "Generated semantic embeddings using SentenceTransformers.",
      "Performed vector similarity search.",
      "Integrated HuggingFace and OpenAI models.",
      "Generated contextual responses."
    ],
    keyPoints: [
      "Scraped company information.",
      "Processed collected content for question answering.",
      "Generated semantic embeddings using SentenceTransformers.",
      "Performed vector similarity search.",
      "Integrated HuggingFace and OpenAI models.",
      "Generated contextual responses."
    ],
  },
  {
    id: "spam-classifier",
    name: "Email/SMS Spam Classifier",
    date: "November 2025 – December 2025",
    shortDescription: "End-to-end spam classification system for real-time message classification.",
    technologies: [
      "Python",
      "Machine Learning",
      "Multinomial Naive Bayes",
      "NLP",
    ],
    architectureType: "classifier",
    architectureSteps: [
      { step: "Incoming Message", detail: "Raw text payload from email or SMS transmission", badge: "Input" },
      { step: "NLP Preprocessing", detail: "Tokenization, stopword removal, stemming, and vectorization", badge: "Preprocessing" },
      { step: "Multinomial Naive Bayes", detail: "Probabilistic classifier calculating spam vs. ham likelihood", badge: "ML Inference" },
      { step: "Real-time Prediction", detail: "Immediate binary verdict with high precision scoring", badge: "Verdict" },
    ],
    overview: "An end-to-end NLP and machine learning pipeline constructed to classify real-time incoming messages as either spam or legitimate communication (ham).",
    problemStatement: "Unsolicited spam messages create security risks and productivity overhead; rapid probabilistic filtering is required at low latency.",
    implementationDetails: [
      "Built an end-to-end spam classification system.",
      "Used Multinomial Naive Bayes.",
      "Classified messages as spam or not spam.",
      "Implemented real-time prediction.",
      "Achieved 92% accuracy on the evaluated dataset."
    ],
    accuracyNote: "Achieved 92% accuracy on the evaluated dataset. (Note: Specific to the evaluated test dataset).",
    keyPoints: [
      "Built an end-to-end spam classification system.",
      "Used Multinomial Naive Bayes.",
      "Classified messages as spam or not spam.",
      "Implemented real-time prediction.",
      "Achieved 92% accuracy on the evaluated dataset."
    ],
  },
  {
    id: "salary-management-app",
    name: "Salary Management Application",
    date: "January 2024 – February 2024",
    shortDescription: "Employee and administrator salary management application.",
    technologies: [
      "PHP",
      "SQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    architectureType: "system",
    architectureSteps: [
      { step: "User Authentication", detail: "Role-based secure login separating employee and administrator sessions", badge: "Security" },
      { step: "Administrator Console", detail: "Interface for employee record management, salary updates, and adjustments", badge: "Admin Layer" },
      { step: "Optimized Database", detail: "Structured relational SQL database with fine-tuned queries and indexing", badge: "Data Store" },
      { step: "Employee Dashboard", detail: "Frontend interface for reviewing compensation statements and payroll logs", badge: "Client UI" },
    ],
    overview: "A comprehensive payroll and workforce salary management portal providing administrative control, secure employee access, and streamlined relational database queries.",
    problemStatement: "Managing compensation records manually leads to inconsistencies and access control challenges across organizations.",
    implementationDetails: [
      "Employee management.",
      "Administrator functionality.",
      "Secure login.",
      "Salary updates.",
      "Database query optimization.",
      "Frontend interaction improvements."
    ],
    keyPoints: [
      "Employee management",
      "Administrator functionality",
      "Secure login",
      "Salary updates",
      "Database query optimization",
      "Frontend interaction improvements"
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Islamic University of Science and Technology",
    location: "Srinagar, India",
    period: "November 2021 – September 2025",
    details: "Rigorous foundation in computer science principles, algorithms, data structures, database management systems, operating systems, and software engineering."
  },
  {
    degree: "Higher Secondary School — PCM with EVS",
    institution: "Government Girls Higher Secondary Institute",
    location: "Srinagar, India",
    period: "2019 – 2020",
    details: "Physics, Chemistry, Mathematics with Environmental Science."
  },
];

export const certificationData: CertificationItem[] = [
  {
    title: "Technical Support Fundamentals",
    issuer: "Google",
    platform: "Coursera",
    period: "January 2023 – February 2023",
  },
];

export const languagesData: LanguageItem[] = [
  {
    name: "English",
    proficiency: "Full Professional Proficiency",
    level: "Professional",
  },
  {
    name: "Kashmiri",
    proficiency: "Native or Bilingual Proficiency",
    level: "Native",
  },
  {
    name: "Urdu",
    proficiency: "Native or Bilingual Proficiency",
    level: "Native",
  },
];
