import React from 'react';
import { motion } from 'framer-motion';
import { Video, Code, MessageSquare, HelpCircle, UserCheck, UploadCloud, Terminal, Circle } from 'lucide-react';

const liveFeatures = [
  { title: 'Live Online Classes', desc: 'Interactive sessions 4 days per week', icon: Video, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  { title: 'Interactive Teaching', desc: 'Real-time explanations & conceptual clarity', icon: UserCheck, color: 'text-blue-600 bg-blue-50 border-blue-200' },
  { title: 'Live Coding', desc: 'Trainer codes algorithms step-by-step in real-time', icon: Code, color: 'text-orange-600 bg-orange-50 border-orange-200' },
  { title: 'Practical Demonstrations', desc: 'Hands-on execution of ML/DL/AI pipelines', icon: Terminal, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  { title: 'Doubt Clarification', desc: 'Ask questions and get answers during live sessions', icon: HelpCircle, color: 'text-blue-600 bg-blue-50 border-blue-200' },
  { title: 'Project Guidance', desc: 'Direct guidance on assigned projects & capstone', icon: MessageSquare, color: 'text-orange-600 bg-orange-50 border-orange-200' },
  { title: 'Trainer Feedback', desc: 'Individual code reviews & LMS evaluation', icon: UserCheck, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  { title: 'LMS Submissions', desc: 'Submit project milestones & track progress', icon: UploadCloud, color: 'text-blue-600 bg-blue-50 border-blue-200' }
];

export const LiveTraining: React.FC = () => {
  return (
    <section className="py-24 bg-mesh-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-extrabold text-blue-700 tracking-wider uppercase shadow-sm">
            LIVE ONLINE FORMAT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            LEARN LIVE. <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">BUILD FOR REAL.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Experience real-time interactive teaching combined with practical live coding and trainer guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Feature Bullet Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {liveFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
                >
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 ${feat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">{feat.title}</h4>
                    <p className="text-xs text-slate-600 font-medium">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Realistic Laptop LMS & Live Class Mockup */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-2xl"
            >
              {/* Laptop Shell Outer */}
              <div className="relative rounded-t-2xl border-4 border-slate-300 bg-slate-100 p-2 shadow-xl shadow-blue-900/10">
                
                {/* Camera / Top Screen Bezel */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-slate-200 rounded-t-lg border-b border-slate-300 text-[10px] text-slate-700 font-bold">
                  <div className="flex items-center gap-1.5">
                    <Circle className="w-2.5 h-2.5 fill-red-500 text-red-500" />
                    <Circle className="w-2.5 h-2.5 fill-yellow-500 text-yellow-500" />
                    <Circle className="w-2.5 h-2.5 fill-green-500 text-green-500" />
                  </div>
                  <div className="font-mono text-slate-900 font-extrabold flex items-center gap-1.5 text-[9px] sm:text-xs truncate max-w-[150px] sm:max-w-none">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping flex-shrink-0" />
                    <span className="truncate">LIVE SESSION | Module 08</span>
                  </div>
                  <div className="text-emerald-700 font-extrabold flex-shrink-0 text-[10px] sm:text-xs">1:02:45</div>
                </div>

                {/* Laptop Screen Content */}
                <div className="bg-white p-3 sm:p-4 font-mono text-xs space-y-3 sm:space-y-4 rounded-b-lg overflow-hidden flex flex-col justify-between border border-slate-200">
                  
                  {/* Top Editor Bar */}
                  <div className="flex items-center justify-between bg-slate-50 p-2 sm:p-2.5 rounded-lg border border-slate-200">
                    <div className="flex items-center gap-2 text-slate-800 font-bold text-xs">
                      <Code className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-emerald-700 font-bold truncate">agent_workflow.py</span>
                    </div>
                    <div className="text-[10px] bg-slate-200 px-2 py-0.5 rounded text-slate-800 font-extrabold flex-shrink-0">Python 3.11</div>
                  </div>

                  {/* Code View Snippet */}
                  <div className="space-y-1 text-slate-900 bg-slate-50 p-2.5 sm:p-3 rounded-lg border border-slate-200 leading-relaxed font-mono text-[10px] sm:text-[11px] font-medium overflow-x-auto">
                    <div><span className="text-orange-600 font-bold">from</span> langchain.agents <span className="text-orange-600 font-bold">import</span> create_openai_tools_agent</div>
                    <div><span className="text-blue-600 font-bold">@tool</span></div>
                    <div><span className="text-orange-600 font-bold">def</span> <span className="text-blue-700 font-bold">execute_rag_search</span>(query: str):</div>
                    <div className="pl-4 text-slate-500 italic">"""Retrieve context from vector database"""</div>
                    <div className="pl-4"><span className="text-orange-600 font-bold">return</span> vector_store.<span className="text-emerald-600 font-bold">similarity_search</span>(query)</div>
                    <div className="pt-1 text-emerald-600 font-bold"># Live Demo: Initializing multi-agent executor...</div>
                  </div>

                  {/* Live Class Interactive Toolbar */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-center">
                    <div className="p-2 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-extrabold">
                      👥 Live Attendees Connected
                    </div>
                    <div className="p-2 rounded bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-extrabold">
                      💬 Q&A Chat Open
                    </div>
                    <div className="p-2 rounded bg-orange-50 border border-orange-200 text-orange-700 text-[10px] font-extrabold">
                      📁 LMS Project Code Shared
                    </div>
                  </div>

                </div>
              </div>

              {/* Laptop Base Stand */}
              <div className="relative mx-auto h-3 w-full max-w-[95%] rounded-b-xl bg-slate-200 border-t border-slate-300 shadow-md">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 w-16 rounded-b bg-slate-400" />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
