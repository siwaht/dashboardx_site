import { Lightbulb, Compass, TrendingUp, Shield } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function HowItWorks() {
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

  const services = [
    {
      icon: Lightbulb,
      title: 'Opportunity Estimation & Idea Discovery',
      description: 'We identify where AI can create the greatest impact within your organization. Our consultants assess your data ecosystem, process maturity, and business goals to uncover practical, high-ROI AI opportunities.',
      gradient: 'from-brand-blue-start via-brand-blue-mid to-brand-teal-start',
      detailsTitle: 'Outcomes:',
      details: [
        'AI opportunity landscape and value estimation',
        'Feasibility analysis and readiness assessment',
        'Use case prioritization matrix'
      ]
    },
    {
      icon: Compass,
      title: 'Data & AI Strategy',
      description: 'Turn insights into execution with a comprehensive AI roadmap tailored to your business. We align AI initiatives with your strategic objectives, ensuring data foundations, governance, and talent readiness are in place.',
      gradient: 'from-brand-teal-start via-brand-teal-mid to-brand-emerald-start',
      detailsTitle: 'We deliver:',
      details: [
        'Data strategy and architecture blueprint',
        'AI implementation roadmap',
        'Organizational readiness and change plan'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Agentic AI Monetization',
      description: 'Move beyond proof-of-concept — create intelligent, revenue-driving systems. We design and implement Agentic AI architectures that automate decision-making, enhance customer experience, and generate new business models.',
      gradient: 'from-brand-emerald-mid via-brand-teal-end to-brand-amber-start',
      detailsTitle: 'Focus Areas:',
      details: [
        'Intelligent automation and workflow orchestration',
        'AI product design and monetization strategy',
        'Integration with existing enterprise systems'
      ]
    },
    {
      icon: Shield,
      title: 'AI Governance, Ethics & Risk Management',
      description: 'Build AI responsibly. We help you design a robust AI Governance framework that ensures transparency, fairness, and accountability — while keeping you compliant with evolving global regulations.',
      gradient: 'from-brand-blue-start via-brand-teal-mid to-brand-emerald-mid',
      detailsTitle: 'Includes:',
      details: [
        'Governance framework design',
        'Ethical AI principles and compliance alignment',
        'AI risk management and monitoring systems'
      ]
    },
  ];

  return (
    <section ref={sectionRef} id="services" aria-labelledby="services-heading" className="py-16 md:py-24 bg-light-primary dark:bg-dark-secondary transition-colors relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-emerald-mid/3 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 id="services-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-text-light-primary dark:text-text-dark-primary tracking-tight">
            AI Consulting & Strategy Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Expert guidance to unlock AI's full potential — from opportunity discovery to responsible implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
          {services.map((service, index) => (
            <div key={index} className="scroll-reveal relative">
              <div className="relative bg-light-secondary/90 dark:bg-dark-primary/90 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border border-brand-slate-light/30 dark:border-brand-slate/30 hover:border-brand-teal-mid dark:hover:border-brand-emerald-mid transition-all duration-300 shadow-elevation-2 hover:shadow-elevation-3 hover:-translate-y-1 h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-elevation-3 border-4 border-white/30`}>
                    <service.icon className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-text-light-primary dark:text-text-dark-primary text-center">
                  {service.title}
                </h3>
                <p className="text-text-light-secondary dark:text-text-dark-secondary leading-relaxed text-center text-sm sm:text-base md:text-lg font-medium mb-6">
                  {service.description}
                </p>

                <div className="mt-6 pt-6 border-t border-brand-slate-light/20 dark:border-brand-slate/20">
                  <h4 className="text-sm font-bold text-text-light-primary dark:text-text-dark-primary mb-3 text-center">
                    {service.detailsTitle}
                  </h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-text-light-secondary dark:text-text-dark-secondary flex items-start">
                        <span className="text-brand-teal-mid dark:text-brand-emerald-mid mr-2 flex-shrink-0">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
