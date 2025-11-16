import { MessageSquare, Phone, Video, Database, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AnimatedVisual() {
  const [typedText, setTypedText] = useState('');
  const [showWorkflow, setShowWorkflow] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const fullText = 'Process customer inquiry with AI agents...';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowWorkflow(true), 300);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (!showWorkflow) return;

    const stepInterval = setInterval(() => {
      setActiveStep(prev => (prev < 5 ? prev + 1 : prev));
    }, 800);

    return () => clearInterval(stepInterval);
  }, [showWorkflow]);

  const workflowSteps = [
    {
      icon: MessageSquare,
      title: 'Customer Query',
      subtitle: 'Incoming request',
      color: 'from-brand-blue-start to-brand-blue-mid',
      textColor: 'text-brand-blue-mid',
      delay: '0.2s'
    },
    {
      icon: Database,
      title: 'RAG Retrieval',
      subtitle: 'Knowledge lookup',
      color: 'from-brand-teal-start to-brand-teal-mid',
      textColor: 'text-brand-teal-mid',
      delay: '0.4s'
    },
    {
      icon: Sparkles,
      title: 'AI Processing',
      subtitle: 'Generate response',
      color: 'from-brand-emerald-start to-brand-emerald-mid',
      textColor: 'text-brand-emerald-mid',
      delay: '0.6s'
    },
    {
      icon: Phone,
      title: 'Voice/Chat',
      subtitle: 'Multi-channel',
      color: 'from-brand-amber-start to-brand-coral-start',
      textColor: 'text-brand-coral-start',
      delay: '0.8s'
    },
    {
      icon: CheckCircle,
      title: 'Delivered',
      subtitle: 'Customer satisfied',
      color: 'from-brand-emerald-mid to-brand-teal-end',
      textColor: 'text-brand-emerald-mid',
      delay: '1s'
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 md:mt-12 bg-gradient-to-br from-light-primary/95 to-light-secondary/95 dark:from-dark-primary/95 dark:to-dark-secondary/95 border border-brand-slate-light/30 dark:border-brand-slate/30 rounded-2xl relative shadow-elevation-3 overflow-hidden backdrop-blur-sm">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal-mid/5 via-brand-emerald-mid/5 to-brand-blue-mid/5 pointer-events-none"></div>

      <div className="w-[95%] mx-auto relative z-10 py-6 sm:py-8">
        {/* Command input */}
        <div className="bg-light-secondary/90 dark:bg-dark-secondary/90 backdrop-blur-sm text-text-light-primary dark:text-text-dark-primary px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-left border border-brand-slate-light/30 dark:border-brand-slate/30 shadow-elevation-2 font-mono text-sm sm:text-base">
          <span className="text-brand-teal-mid">&gt;</span> {typedText}
          <span className="inline-block w-2 h-4 sm:h-5 bg-brand-teal-mid ml-1 animate-pulse"></span>
        </div>

        {/* Workflow visualization */}
        {showWorkflow && (
          <div className="mt-8 sm:mt-12 pb-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative">
              {/* Connecting lines for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue-mid via-brand-teal-mid to-brand-emerald-mid opacity-30 -translate-y-1/2"></div>

              {workflowSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center relative w-full md:w-auto">
                  {/* Node */}
                  <div
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-elevation-3 border-2 border-white/30 dark:border-white/20 transition-all duration-500 ${
                      activeStep >= index ? 'scale-100 opacity-100' : 'scale-75 opacity-30'
                    }`}
                    style={{
                      animationDelay: step.delay,
                      animation: activeStep >= index ? 'node-pop 0.5s ease-out both' : 'none'
                    }}
                  >
                    <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-lg" />

                    {/* Pulse effect when active */}
                    {activeStep === index && (
                      <div className="absolute inset-0 rounded-2xl bg-white/30 animate-ping"></div>
                    )}

                    {/* Data flow particle */}
                    {activeStep > index && index < workflowSteps.length - 1 && (
                      <div className="hidden md:block absolute left-full top-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 bg-white rounded-full shadow-lg animate-flow-particle ml-4"></div>
                      </div>
                    )}
                  </div>

                  {/* Label */}
                  <div
                    className={`mt-3 sm:mt-4 text-center transition-opacity duration-500 ${
                      activeStep >= index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className={`text-sm sm:text-base font-bold ${step.textColor}`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-text-light-secondary dark:text-text-dark-secondary">
                      {step.subtitle}
                    </div>
                  </div>

                  {/* Arrow for mobile */}
                  {index < workflowSteps.length - 1 && (
                    <div className="md:hidden my-3">
                      <ArrowRight className={`w-5 h-5 transition-opacity duration-500 ${
                        activeStep > index ? 'opacity-100 text-brand-teal-mid' : 'opacity-30 text-text-light-secondary dark:text-text-dark-secondary'
                      }`} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Success message */}
            {activeStep >= 5 && (
              <div
                className="mt-8 bg-gradient-to-r from-brand-emerald-start/10 to-brand-teal-mid/10 border border-brand-emerald-mid/30 rounded-xl p-4 text-center animate-fade-in-up"
                style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
              >
                <div className="flex items-center justify-center gap-2 text-brand-emerald-mid font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>Workflow completed successfully in 1.2s</span>
                </div>
                <div className="text-xs text-text-light-secondary dark:text-text-dark-secondary mt-1">
                  AI agents processed request through all channels
                </div>
              </div>
            )}
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

        @keyframes node-pop {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes flow-particle {
          0% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(60px) scale(0.5);
            opacity: 0;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-flow-particle {
          animation: flow-particle 0.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
