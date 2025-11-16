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
    <section ref={sectionRef} id="workflow" aria-labelledby="workflow-heading" className="py-16 md:py-24 bg-light-primary dark:bg-dark-primary transition-colors relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-12 px-4">
            <h2 id="workflow-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-text-light-primary dark:text-text-dark-primary tracking-tight">
              AI Agent Workflow
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto leading-relaxed">
              See how our AI agents process requests through a sophisticated pipeline: retrieving knowledge from your data, maintaining conversation context, and leveraging advanced LLM processing to deliver accurate, intelligent responses.
            </p>
          </div>

          <WorkflowAnimation />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-10 md:mt-12 px-4">
            <div className="scroll-reveal bg-light-secondary/50 dark:bg-dark-secondary/50 p-5 md:p-6 rounded-xl border border-border-light dark:border-border-dark">
              <h3 className="text-xl font-bold mb-3 text-text-light-primary dark:text-text-dark-primary">
                Knowledge-Grounded Responses
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                Our RAG (Retrieval-Augmented Generation) system queries your knowledge base in real-time, ensuring every response is backed by your actual business data, documents, and proprietary information.
              </p>
            </div>

            <div className="scroll-reveal bg-light-secondary/50 dark:bg-dark-secondary/50 p-5 md:p-6 rounded-xl border border-border-light dark:border-border-dark" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-bold mb-3 text-text-light-primary dark:text-text-dark-primary">
                Intelligent Context Management
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                Advanced memory systems track conversation history and user preferences, while our LLM core synthesizes information to provide personalized, contextually-aware responses that improve over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
