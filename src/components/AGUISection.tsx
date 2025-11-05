import { Eye, GitBranch, Shield } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function AGUISection() {
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
    <section ref={sectionRef} id="ag-ui" aria-labelledby="ag-ui-heading" className="py-16 md:py-24 bg-light-secondary dark:bg-dark-primary transition-colors relative overflow-hidden">

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 px-4">
            <h2 id="ag-ui-heading" className="font-display text-4xl md:text-5xl font-bold mb-6 text-text-light-primary dark:text-text-dark-primary tracking-tight">
              AG UI Interface
            </h2>
            <p className="text-lg md:text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto leading-relaxed">
              Our AG UI interface provides a real-time animated graph visualization of your AI's reasoning process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start mb-12 md:mb-16">
            <div className="scroll-reveal px-4 md:px-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-text-light-primary dark:text-text-dark-primary">
                Full Transparency
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary mb-6 leading-relaxed">
                The AG UI interface visualizes your query's journey through your data ecosystem in real-time, providing full transparency into the AI's reasoning process.
              </p>
              <p className="text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                See which sources were accessed, how they connect, and how they contribute to each answer—essential for enterprise decisions and compliance.
              </p>
            </div>

            <div className="scroll-reveal bg-light-primary/80 dark:bg-dark-secondary/80 p-5 sm:p-6 md:p-8 rounded-2xl border border-border-light dark:border-border-dark shadow-elevation-3 transition-all duration-300 relative overflow-hidden mx-4 lg:mx-0" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue-start to-brand-blue-mid flex items-center justify-center flex-shrink-0 shadow-elevation-2" aria-label="Eye icon for real-time visualization">
                    <Eye className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-light-primary dark:text-text-dark-primary mb-2">
                      Real-Time Visualization
                    </h4>
                    <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                      Watch connections form as AI navigates your data
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal-start to-brand-teal-mid flex items-center justify-center flex-shrink-0 shadow-elevation-2" aria-label="Git branch icon for agent decision path">
                    <GitBranch className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-light-primary dark:text-text-dark-primary mb-2">
                      Agent Decision Path
                    </h4>
                    <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                      See each reasoning step as agents plan and execute their search strategy
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-emerald-start to-brand-emerald-mid flex items-center justify-center flex-shrink-0 shadow-elevation-2" aria-label="Shield icon for interactive graph">
                    <Shield className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-light-primary dark:text-text-dark-primary mb-2">
                      Interactive Graph
                    </h4>
                    <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                      Click nodes to explore sources, zoom into retrieval chains, and understand agent actions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
