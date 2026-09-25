import type { CurriculumModule } from '../types';

export const curriculumModules: CurriculumModule[] = [
  {
    id: 'module-01',
    number: '01',
    title: 'Python + AI Foundations',
    shortDesc: 'Programming & Data Essentials',
    description: 'Build the core programming and data foundations required for modern AI development.',
    subtopics: [
      'Python Fundamentals',
      'Functions & Modules',
      'Object-Oriented Programming (OOP)',
      'File & Data Handling',
      'Exception Handling',
      'NumPy Array Computing',
      'Pandas Data Structures',
      'Data Visualization',
      'REST & Web APIs',
      'AI Development Environment Setup'
    ],
    tools: ['Python', 'Jupyter Notebooks', 'VS Code'],
    categoryBadge: 'FOUNDATION',
    accentColor: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'module-02',
    number: '02',
    title: 'Machine Learning',
    shortDesc: 'Data, Training & Evaluation',
    description: 'Learn how machine learning models are prepared, trained, evaluated and applied to real-world problems.',
    subtopics: [
      'ML Fundamentals & Taxonomy',
      'Data Preprocessing & Cleaning',
      'Exploratory Data Analysis (EDA)',
      'Feature Engineering & Selection',
      'Supervised Regression Algorithms',
      'Classification Methods',
      'Unsupervised Clustering',
      'Model Evaluation & Metrics',
      'Scikit-Learn Production Workflows',
      'Model Deployment Basics'
    ],
    tools: ['Python', 'Pandas', 'Scikit-Learn'],
    categoryBadge: 'CORE ML',
    accentColor: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'module-03',
    number: '03',
    title: 'Deep Learning',
    shortDesc: 'Neural Network Architectures',
    description: 'Understand neural networks and modern deep learning architectures through practical implementation.',
    subtopics: [
      'Neural Network Architecture & Perceptrons',
      'Training, Validation & Testing Loops',
      'Activation Functions (ReLU, Softmax, Sigmoid)',
      'Loss Functions & Optimization Concepts',
      'Convolutional Neural Networks (CNNs)',
      'Recurrent Neural Networks (RNNs)',
      'LSTMs & GRU Architectures',
      'Introduction to Transformer Models'
    ],
    tools: ['Python', 'PyTorch Concepts', 'Deep Learning Workflows'],
    categoryBadge: 'NEURAL NETWORKS',
    accentColor: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'module-04',
    number: '04',
    title: 'Natural Language Processing',
    shortDesc: 'Text Processing & Representation',
    description: 'Learn how machines process, represent, and understand human language.',
    subtopics: [
      'Text Preprocessing & Normalization',
      'Tokenization & Vocabulary Building',
      'Text Representation (TF-IDF, Bag-of-Words)',
      'Dense Word Embeddings',
      'Sentiment Analysis Pipelines',
      'Text Classification Systems',
      'Sequence-to-Sequence Modeling',
      'Modern NLP Architectures',
      'Practical NLP Applications'
    ],
    tools: ['Python', 'NLTK / SpaCy', 'Hugging Face Datasets'],
    categoryBadge: 'LANGUAGE AI',
    accentColor: 'from-purple-500 to-pink-500'
  },
  {
    id: 'module-05',
    number: '05',
    title: 'Large Language Models',
    shortDesc: 'Prompting, APIs & Function Calling',
    description: 'Understand modern LLMs and learn how to build applications using state-of-the-art models.',
    subtopics: [
      'LLM Architecture Fundamentals',
      'Tokens, Context Windows & Limits',
      'Advanced Prompt Engineering',
      'System, User & Assistant Prompts',
      'Structured JSON & Schema Outputs',
      'Function & Tool Calling Pipelines',
      'LLM API Integration',
      'Model Selection & Tradeoffs',
      'LLM Output Evaluation'
    ],
    tools: ['OpenAI API', 'Hugging Face', 'Prompt Workflows'],
    categoryBadge: 'LLMs',
    accentColor: 'from-pink-500 to-rose-500'
  },
  {
    id: 'module-06',
    number: '06',
    title: 'Generative AI',
    shortDesc: 'Multimodal & Generative Apps',
    description: 'Build applications that use modern generative models for text, images, and multimodal experiences.',
    subtopics: [
      'Generative AI Fundamentals',
      'Text Generation Workflows',
      'Image Generation & Diffusion Concepts',
      'Multimodal AI (Vision + Text)',
      'Advanced GenAI Prompt Strategies',
      'Generative AI API Integration',
      'GenAI Full-Stack Application Dev',
      'AI Coding Tools & Developer Workflows',
      'Practical GenAI Production Pipelines'
    ],
    tools: ['OpenAI', 'Streamlit', 'AI Coding Assistants'],
    categoryBadge: 'GEN AI',
    accentColor: 'from-rose-500 to-orange-500'
  },
  {
    id: 'module-07',
    number: '07',
    title: 'RAG & Vector Databases',
    shortDesc: 'Information Retrieval & Context',
    description: 'Learn how AI applications retrieve relevant private/custom information before generating responses.',
    subtopics: [
      'RAG Architecture & Fundamentals',
      'Document Parsing & Ingestion',
      'Chunking Strategies & Overlaps',
      'Text Embedding Models',
      'Vector Databases & Indexing',
      'Similarity Search (Cosine, Euclidean)',
      'Retrieval Pipelines & Rankers',
      'Dynamic Context Injection',
      'Production RAG Applications',
      'RAG Evaluation Basics'
    ],
    tools: ['LangChain', 'Vector Databases', 'OpenAI Embeddings'],
    categoryBadge: 'RETRIEVAL AI',
    accentColor: 'from-amber-500 to-yellow-500'
  },
  {
    id: 'module-08',
    number: '08',
    title: 'Agentic AI',
    shortDesc: 'Autonomous Tools & Multi-Step Workflows',
    description: 'Move from simple AI applications toward systems that can use tools, perform multi-step tasks, and execute autonomous workflows.',
    subtopics: [
      'AI Agent Core Architectures',
      'Agent Tools & Function Binding',
      'Dynamic Tool Execution Loops',
      'Short-term & Long-term Memory',
      'Autonomous Planning & Reasoning',
      'Multi-step Task Execution',
      'Agentic Workflow Patterns',
      'Multi-Agent Collaboration Concepts',
      'Modern Agent Frameworks',
      'Practical Production AI Agents'
    ],
    tools: ['LangChain / Agent Frameworks', 'Python Tools', 'APIs'],
    categoryBadge: 'AGENTIC AI',
    accentColor: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'module-09',
    number: '09',
    title: 'Final Capstone Project',
    shortDesc: 'End-to-End Applied AI System',
    description: 'Bring together all the skills learned throughout the 3-month program into a comprehensive practical project.',
    subtopics: [
      'Problem Identification & Domain Scoping',
      'Project Planning & System Architecture',
      'Data & AI Model Integration Strategy',
      'Full Application Implementation',
      'Testing, Validation & Error Handling',
      'Deployment & Hosting Setup',
      'Comprehensive Project Documentation',
      'Final Demonstration & Live Presentation',
      'Final Capstone Project Report Preparation'
    ],
    tools: ['Full AI Stack', 'GitHub', 'Deployment Platforms'],
    categoryBadge: 'CAPSTONE',
    accentColor: 'from-cyan-400 to-emerald-400'
  }
];
