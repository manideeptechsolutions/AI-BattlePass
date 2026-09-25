import type { ToolItem } from '../types';

export const aiTools: ToolItem[] = [
  {
    name: 'Python',
    category: 'Core Language',
    description: 'The foundation language for data science, machine learning, and modern AI engineering.',
    iconName: 'Code',
    badge: 'ESSENTIAL'
  },
  {
    name: 'Jupyter Notebooks',
    category: 'Environment',
    description: 'Interactive computational environment for experimentation, data analysis, and model building.',
    iconName: 'BookOpen',
    badge: 'PRACTICE'
  },
  {
    name: 'VS Code',
    category: 'IDE Workspace',
    description: 'Industry-standard code editor configured with AI extensions and debugging toolchains.',
    iconName: 'Terminal',
    badge: 'WORKSPACE'
  },
  {
    name: 'OpenAI API',
    category: 'LLM Ecosystem',
    description: 'Access to GPT-4o, embeddings, function calling, and multimodal vision models.',
    iconName: 'Cpu',
    badge: 'API & LLMS'
  },
  {
    name: 'Hugging Face',
    category: 'Open Source AI',
    description: 'The global repository for pretrained models, datasets, and open-weight transformer architectures.',
    iconName: 'Boxes',
    badge: 'MODELS'
  },
  {
    name: 'LangChain',
    category: 'Agent Framework',
    description: 'Framework for building contextual LLM applications, retrieval chains, and autonomous agents.',
    iconName: 'Workflow',
    badge: 'RAG & AGENTS'
  },
  {
    name: 'Streamlit',
    category: 'Web Interface',
    description: 'Rapid prototyping tool for deploying interactive python web applications and AI dashboards.',
    iconName: 'Layout',
    badge: 'UI DEPLOYMENT'
  },
  {
    name: 'Vector Databases',
    category: 'Storage & Retrieval',
    description: 'Pinecone, ChromaDB & Qdrant for storing embeddings and ultra-fast similarity search.',
    iconName: 'Database',
    badge: 'VECTOR SEARCH'
  },
  {
    name: 'AI Coding Assistants',
    category: 'Developer Productivity',
    description: 'GitHub Copilot, Cursor, and modern AI coding assistants to accelerate development.',
    iconName: 'Sparkles',
    badge: 'PRODUCTIVITY'
  },
  {
    name: 'Modern AI Tools',
    category: 'Evolving Ecosystem',
    description: 'Dynamic tools introduced by trainers as the global GenAI and Agentic AI ecosystem evolves.',
    iconName: 'Zap',
    badge: 'ECOSYSTEM'
  }
];
