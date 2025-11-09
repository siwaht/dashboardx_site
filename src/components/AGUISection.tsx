import { Target, Lightbulb, TrendingUp } from 'lucide-react';
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
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 id="ag-ui-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-text-light-primary dark:text-text-dark-primary tracking-tight">
              Data-Driven AI Strategy
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto leading-relaxed">
              Our methodology combines deep business understanding with technical expertise to create AI strategies that deliver measurable ROI and sustainable competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch mb-12 md:mb-16">
            <div className="scroll-reveal px-4 lg:px-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-text-light-primary dark:text-text-dark-primary">
                Proven Framework
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary mb-6 leading-relaxed">
                We leverage industry best practices and our proprietary assessment framework to evaluate your AI readiness, identify quick wins, and build a comprehensive transformation roadmap.
              </p>
              <p className="text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                From data infrastructure to organizational change management, we ensure every aspect of your AI journey is carefully planned and executed.
              </p>
            </div>

            <div className="scroll-reveal bg-light-primary/80 dark:bg-dark-secondary/80 p-6 md:p-8 rounded-2xl border border-border-light dark:border-border-dark shadow-elevation-3 transition-all duration-300 relative overflow-hidden mx-4 lg:mx-0" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue-start to-brand-blue-mid flex items-center justify-center flex-shrink-0 shadow-elevation-2" aria-label="Target icon for business alignment">
                    <Target className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-light-primary dark:text-text-dark-primary mb-2">
                      Business-First Approach
                    </h4>
                    <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                      We start with your business goals and work backward to identify AI opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal-start to-brand-teal-mid flex items-center justify-center flex-shrink-0 shadow-elevation-2" aria-label="Lightbulb icon for innovation">
                    <Lightbulb className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-light-primary dark:text-text-dark-primary mb-2">
                      Innovation Enablement
                    </h4>
                    <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                      Build internal capabilities and foster an AI-ready culture for sustained innovation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-emerald-start to-brand-emerald-mid flex items-center justify-center flex-shrink-0 shadow-elevation-2" aria-label="TrendingUp icon for measurable results">
                    <TrendingUp className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-light-primary dark:text-text-dark-primary mb-2">
                      Measurable Impact
                    </h4>
                    <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                      Track success through clear KPIs and demonstrate ROI at every milestone
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
