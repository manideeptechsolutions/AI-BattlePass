import React from 'react';
import { motion } from 'framer-motion';
import { aiTools } from '../data/toolsData';
import { Code, BookOpen, Terminal, Cpu, Boxes, Workflow, Layout, Database, Sparkles, Zap, Info } from 'lucide-react';

export const ToolsSection: React.FC = () => {
  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-6 h-6 text-emerald-600" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-blue-600" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-orange-500" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-emerald-600" />;
      case 'Boxes':
        return <Boxes className="w-6 h-6 text-blue-600" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-orange-500" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-emerald-600" />;
      case 'Database':
        return <Database className="w-6 h-6 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-orange-500" />;
      default:
        return <Zap className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="tools" className="py-24 bg-mesh-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-extrabold text-emerald-700 tracking-wider uppercase shadow-sm">
            TOOLSTACK & ECOSYSTEM
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            LEARN WITH <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">MODERN AI TOOLS</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Master industry-standard frameworks, LLM APIs, vector databases, and developer environments.
          </p>
        </div>

        {/* 10 Tool Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {aiTools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getToolIcon(tool.iconName)}
                  </div>
                  {tool.badge && (
                    <span className="text-[9px] font-extrabold text-blue-700 bg-blue-50 px-2 py-0.5 rounded uppercase border border-blue-200">
                      {tool.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                  {tool.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {tool.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Tool Ecosystem Disclaimer Banner */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 max-w-3xl mx-auto flex items-center gap-3 text-slate-800 text-xs sm:text-sm shadow-sm font-medium">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <span>
            <strong className="text-slate-900">Important Note:</strong> Tools and platforms may evolve during the program as the AI ecosystem changes. Trainers will introduce state-of-the-art tools as new innovations emerge.
          </span>
        </div>

      </div>
    </section>
  );
};
