import { useEffect, useRef } from 'react';
import WorkflowAnimation from './WorkflowAnimation';

export default function WorkflowSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.scroll-reveal');
            reveals.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="workflow" aria-labelledby="workflow-heading" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-light-primary dark:bg-dark-primary transition-colors relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 px-2 sm:px-3 md:px-4">
            <h2 id="workflow-heading" className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-text-light-primary dark:text-text-dark-primary tracking-tight">
              AI Agent Workflow Architecture
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto leading-relaxed">
              Watch how our specialized AI agents collaborate seamlessly to process your queries. Data flows from multiple sources through intelligent agents to a central orchestrator that synthesizes accurate, verified responses.
            </p>
          </div>

          <WorkflowAnimation />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-10 md:mt-12 px-2 sm:px-4">
            <div className="scroll-reveal bg-light-secondary/50 dark:bg-dark-secondary/50 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-border-light dark:border-border-dark">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-text-light-primary dark:text-text-dark-primary">
                Intelligent Agent Coordination
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                Each specialized agent handles specific data sources and tasks, coordinated by a central orchestrator that ensures optimal query execution and result synthesis.
              </p>
            </div>

            <div className="scroll-reveal bg-light-secondary/50 dark:bg-dark-secondary/50 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-border-light dark:border-border-dark" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-text-light-primary dark:text-text-dark-primary">
                Multi-Source Integration
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                Connect databases, documents, APIs, and knowledge bases. Our agents intelligently route queries to the right sources and combine insights for comprehensive answers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
