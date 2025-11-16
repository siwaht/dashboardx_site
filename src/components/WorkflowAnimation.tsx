import { Brain, Database, MessageSquare, Layers, CheckCircle, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function WorkflowAnimation() {
  const [activeStep, setActiveStep] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            startAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startAnimation = () => {
    const steps = [0, 1, 2, 3, 4];
    steps.forEach((step, index) => {
      setTimeout(() => setActiveStep(step + 1), index * 1000);
    });
  };

  const workflowSteps = [
    {
      icon: MessageSquare,
      title: 'User Input',
      subtitle: 'Query Received',
      color: 'from-brand-blue-start to-brand-blue-mid',
      textColor: 'text-brand-blue-mid',
      borderColor: 'border-brand-blue-mid'
    },
    {
      icon: Database,
      title: 'RAG Retrieval',
      subtitle: 'Knowledge Base',
      color: 'from-brand-teal-start to-brand-teal-mid',
      textColor: 'text-brand-teal-mid',
      borderColor: 'border-brand-teal-mid'
    },
    {
      icon: Layers,
      title: 'Memory & Context',
      subtitle: 'History Store',
      color: 'from-brand-amber-start to-brand-amber-mid',
      textColor: 'text-brand-amber-mid',
      borderColor: 'border-brand-amber-mid'
    },
    {
      icon: Brain,
      title: 'LLM Processing',
      subtitle: 'AI Core',
      color: 'from-purple-500 to-violet-500',
      textColor: 'text-violet-400',
      borderColor: 'border-violet-500'
    },
    {
      icon: CheckCircle,
      title: 'Response',
      subtitle: 'Output Generated',
      color: 'from-brand-emerald-start to-brand-emerald-mid',
      textColor: 'text-brand-emerald-mid',
      borderColor: 'border-brand-emerald-mid'
    }
  ];

  return (
    <div ref={sectionRef} className="w-full max-w-7xl mx-auto mt-8 md:mt-12 bg-gradient-to-br from-light-primary/95 to-light-secondary/95 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border border-brand-slate-light/30 dark:border-slate-700/50 rounded-2xl shadow-elevation-3 overflow-hidden backdrop-blur-sm">
      <div className="relative w-full p-6 sm:p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative">

          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue-mid via-brand-teal-mid to-brand-emerald-mid opacity-20 -translate-y-1/2" style={{ top: '80px' }}></div>

          {workflowSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative w-full md:w-auto">
              {/* Node */}
              <div
                className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-elevation-3 border-2 ${
                  activeStep > index ? step.borderColor : 'border-slate-600'
                } transition-all duration-500 ${
                  activeStep > index ? 'scale-100 opacity-100' : 'scale-90 opacity-40'
                }`}
              >
                <step.icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white drop-shadow-lg" strokeWidth={2} />

                {/* Active pulse */}
                {activeStep === index + 1 && (
                  <>
                    <div className="absolute inset-0 rounded-2xl bg-white/30 animate-ping"></div>
                    <div className={`absolute -top-2 -right-2 bg-light-primary dark:bg-slate-800 rounded-full p-1 border-2 ${step.borderColor}`}>
                      <Zap className={`w-4 h-4 ${step.textColor}`} />
                    </div>
                  </>
                )}

                {/* Completed checkmark */}
                {activeStep > index + 1 && (
                  <div className="absolute -top-2 -right-2 bg-brand-emerald-mid rounded-full p-1">
                    <CheckCircle className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                )}

                {/* Flow particle for desktop */}
                {activeStep > index + 1 && index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute left-full top-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-brand-teal-mid to-brand-emerald-mid rounded-full shadow-lg animate-flow-particle ml-8"></div>
                  </div>
                )}
              </div>

              {/* Label */}
              <div
                className={`mt-4 text-center transition-opacity duration-500 ${
                  activeStep > index ? 'opacity-100' : 'opacity-40'
                }`}
              >
                <div className={`text-base sm:text-lg font-bold ${activeStep > index ? step.textColor : 'text-slate-500'}`}>
                  {step.title}
                </div>
                <div className="text-xs sm:text-sm text-text-light-secondary dark:text-slate-500 mt-1">
                  {step.subtitle}
                </div>
              </div>

              {/* Mobile arrow */}
              {index < workflowSteps.length - 1 && (
                <div className="md:hidden my-4">
                  <ArrowRight className={`w-6 h-6 transition-all duration-500 ${
                    activeStep > index + 1 ? 'opacity-100 text-brand-teal-mid' : 'opacity-30 text-slate-500'
                  }`} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Success message */}
        {activeStep >= 5 && (
          <div className="mt-8 bg-gradient-to-r from-brand-emerald-start/10 to-brand-teal-mid/10 border border-brand-emerald-mid/30 rounded-xl p-4 text-center animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 text-brand-emerald-mid font-semibold">
              <Sparkles className="w-5 h-5" />
              <span>AI agent processing complete</span>
            </div>
            <div className="text-xs text-text-light-secondary dark:text-text-dark-secondary mt-1">
              Response generated using RAG, memory, and LLM processing
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes flow-particle {
          0% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(80px) scale(0.5);
            opacity: 0;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-flow-particle {
          animation: flow-particle 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
