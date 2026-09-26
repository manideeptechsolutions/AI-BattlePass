import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, BarChart2, MessageSquareText, Sparkles, Database, Bot, Globe, Layers, AlertCircle } from 'lucide-react';

const categories = [
  { title: 'AI Models & Applications', icon: Cpu, desc: 'ML models, Scikit-learn workflows & prediction engines', color: 'text-emerald-600 bg-emerald-50' },
  { title: 'Data Analysis Projects', icon: BarChart2, desc: 'Exploratory data analysis, Pandas & NumPy data pipelines', color: 'text-blue-600 bg-blue-50' },
  { title: 'NLP Applications', icon: MessageSquareText, desc: 'Text classification, sentiment engines & tokenization', color: 'text-orange-600 bg-orange-50' },
  { title: 'Generative AI Applications', icon: Sparkles, desc: 'LLM text generation, image workflows & multimodal tools', color: 'text-emerald-600 bg-emerald-50' },
  { title: 'RAG Applications', icon: Database, desc: 'Document Q&A, vector databases & retrieval chains', color: 'text-blue-600 bg-blue-50' },
  { title: 'AI Agents & Automation', icon: Bot, desc: 'Autonomous tool calling, multi-step planning & multi-agents', color: 'text-orange-600 bg-orange-50' },
  { title: 'Web & AI Applications', icon: Globe, desc: 'Streamlit dashboards & web-integrated AI interfaces', color: 'text-emerald-600 bg-emerald-50' },
  { title: 'End-to-End AI Systems', icon: Layers, desc: 'Complete capstone projects combining full AI stack', color: 'text-blue-600 bg-blue-50' }
];

export const ProjectCategories: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-mesh-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-extrabold text-emerald-700 tracking-wider uppercase shadow-sm">
            PRACTICAL DOMAINS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            BUILD REAL <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">PROJECTS</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Diverse project categories assigned throughout the program to build real practical experience.
          </p>
        </div>

        {/* 8 Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 flex flex-col justify-between group shadow-sm hover:shadow-lg transition-all"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${cat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {cat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Assignment Disclaimer */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 max-w-3xl mx-auto flex items-center gap-3 text-slate-800 text-xs sm:text-sm shadow-sm font-medium">
          <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
          <span>
            <strong className="text-slate-900">Assignment Notice:</strong> Project assignments may vary based on the trainer's teaching plan and learning progression.
          </span>
        </div>

      </div>
    </section>
  );
};
