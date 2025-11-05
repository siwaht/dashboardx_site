import { Headphones, ShoppingCart, Calendar, HelpCircle, Users, Building2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function UseCases() {
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
              }, index * 120);
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

  const cases = [
    {
      icon: Headphones,
      industry: 'Customer Support',
      title: 'Support Automation',
      subtitle: 'Instant ticket resolution',
      gradient: 'from-brand-blue-start via-brand-blue-mid to-brand-teal-start',
      borderColor: 'brand-blue-mid',
    },
    {
      icon: ShoppingCart,
      industry: 'E-Commerce',
      title: 'Sales Assistant',
      subtitle: 'Product recommendations',
      gradient: 'from-brand-teal-mid via-brand-emerald-start to-brand-emerald-mid',
      borderColor: 'brand-emerald-mid',
    },
    {
      icon: Calendar,
      industry: 'Scheduling',
      title: 'Appointment Booking',
      subtitle: 'Automated scheduling',
      gradient: 'from-brand-amber-start via-brand-coral-start to-brand-coral-mid',
      borderColor: 'brand-coral-mid',
    },
    {
      icon: HelpCircle,
      industry: 'Knowledge Base',
      title: 'FAQ Automation',
      subtitle: 'Instant answers 24/7',
      gradient: 'from-brand-teal-start via-brand-teal-mid to-brand-emerald-start',
      borderColor: 'brand-teal-mid',
    },
    {
      icon: Users,
      industry: 'Lead Generation',
      title: 'Qualification',
      subtitle: 'Smart lead scoring',
      gradient: 'from-brand-blue-mid via-brand-teal-start to-brand-emerald-start',
      borderColor: 'brand-blue-mid',
    },
    {
      icon: Building2,
      industry: 'Enterprise',
      title: 'Internal Support',
      subtitle: 'Employee assistance',
      gradient: 'from-brand-emerald-start via-brand-teal-mid to-brand-blue-start',
      borderColor: 'brand-emerald-mid',
    },
  ];

  return (
    <section ref={sectionRef} id="use-cases" aria-labelledby="use-cases-heading" className="py-16 md:py-24 bg-light-primary dark:bg-dark-secondary transition-colors relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient-alt pointer-events-none opacity-10" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 id="use-cases-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-text-light-primary dark:text-text-dark-primary tracking-tight">
            Real-World Applications
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Transform every customer touchpoint with intelligent automation across your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 max-w-6xl mx-auto px-4">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="scroll-reveal group relative bg-light-primary/95 dark:bg-dark-primary/95 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-brand-slate-light/30 dark:border-brand-slate/30 hover:border-brand-teal-mid dark:hover:border-brand-emerald-mid transition-all duration-300 shadow-elevation-2 hover:shadow-elevation-3 hover:-translate-y-1 aspect-square flex flex-col items-center justify-center text-center"
            >

              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-4 md:mb-6 shadow-elevation-2 transition-all duration-300 border-2 border-white/30`}>
                  <useCase.icon className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
                </div>

                <div className="mb-3 md:mb-4">
                  <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-light-secondary/80 dark:bg-dark-secondary/80 text-text-light-primary dark:text-text-dark-primary text-xs font-bold rounded-full border border-brand-slate-light/40 dark:border-brand-slate/40 shadow-elevation-1">
                    {useCase.industry}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-2">
                  {useCase.title}
                </h3>

                <p className="text-xs md:text-sm text-text-light-secondary dark:text-text-dark-secondary">
                  {useCase.subtitle}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
