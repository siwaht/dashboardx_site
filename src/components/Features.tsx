import { Target, Compass, Users, Lock, BarChart3, Sparkles, Clock, Brain } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Features() {
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
              }, index * 100);
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

  const primaryFeatures = [
    {
      icon: Target,
      title: 'Strategic Assessment',
      description: 'Deep-dive analysis of your data landscape, technology stack, and business objectives to identify high-impact AI opportunities.',
      gradient: 'from-brand-blue-start via-brand-teal-mid to-brand-emerald-start',
      glowColor: 'emerald',
    },
    {
      icon: Compass,
      title: 'Custom AI Roadmaps',
      description: 'Tailored implementation plans that align with your strategic goals, budget, and organizational readiness.',
      gradient: 'from-brand-teal-mid via-brand-blue-mid to-brand-coral-start',
      glowColor: 'blue',
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Work with seasoned AI consultants who understand both technology and business transformation.',
      gradient: 'from-brand-emerald-mid via-brand-teal-end to-brand-amber-start',
      glowColor: 'emerald',
    },
  ];

  const additionalFeatures = [
    {
      icon: Lock,
      title: 'Governance First',
      description: 'Build responsible AI from the ground up.',
    },
    {
      icon: Clock,
      title: 'Rapid Value Delivery',
      description: 'See ROI within months, not years.',
    },
    {
      icon: Brain,
      title: 'Knowledge Transfer',
      description: 'Empower your team with AI expertise.',
    },
    {
      icon: BarChart3,
      title: 'Measurable Outcomes',
      description: 'Track success with clear KPIs and metrics.',
    },
    {
      icon: Sparkles,
      title: 'Industry Expertise',
      description: 'Leverage proven frameworks and best practices.',
    },
  ];

  return (
    <section ref={sectionRef} id="features" aria-labelledby="features-heading" className="py-16 md:py-24 bg-light-secondary dark:bg-dark-secondary border-t border-b border-border-light dark:border-border-dark transition-colors relative overflow-hidden">

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 id="features-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-text-light-primary dark:text-text-dark-primary tracking-tight">
            Why Choose Our Consulting
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI consulting services designed to deliver measurable business impact and sustainable competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 mb-10 md:mb-16 max-w-7xl mx-auto px-4">
          {primaryFeatures.map((feature, index) => (
            <div
              key={index}
              className="scroll-reveal relative bg-light-primary/95 dark:bg-dark-primary/95 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border border-brand-slate-light/30 dark:border-brand-slate/30 hover:border-brand-teal-mid dark:hover:border-brand-emerald-mid transition-all duration-300 shadow-elevation-2 hover:shadow-elevation-3 hover:-translate-y-1 h-full"
            >
              <div className="relative z-10">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-8 shadow-elevation-3 border-2 border-white/20`}>
                  <feature.icon className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-5 text-text-light-primary dark:text-text-dark-primary">
                  {feature.title}
                </h3>
                <p className="text-base md:text-lg text-text-light-secondary dark:text-text-dark-secondary leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="scroll-reveal flex items-start gap-4 sm:gap-5 bg-light-primary/95 dark:bg-dark-primary/95 p-5 sm:p-6 md:p-7 rounded-2xl border border-brand-slate-light/20 dark:border-brand-slate/20 hover:border-brand-teal-mid dark:hover:border-brand-emerald-mid transition-all duration-300 shadow-elevation-2"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-blue-mid via-brand-teal-mid to-brand-emerald-mid flex items-center justify-center flex-shrink-0 shadow-elevation-2 border-2 border-white/20">
                  <feature.icon className="w-7 h-7 text-white drop-shadow-md" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm md:text-base text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
