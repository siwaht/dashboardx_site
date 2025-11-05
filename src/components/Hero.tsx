import AnimatedVisual from './AnimatedVisual';
import { Bot, Clock, TrendingDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.scroll-reveal');
            reveals.forEach((el) => {
              el.classList.add('revealed');
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
    <section ref={sectionRef} id="hero" aria-label="Hero section" className="py-12 sm:py-16 md:py-24 lg:py-32 text-center bg-light-secondary dark:bg-dark-primary transition-colors relative overflow-hidden">

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="scroll-reveal inline-flex items-center gap-2 bg-light-primary/90 dark:bg-dark-secondary/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-brand-teal-mid/30 dark:border-brand-emerald-mid/30 mb-6 sm:mb-8 shadow-elevation-2 hover:border-brand-emerald-mid/50 transition-all duration-300" aria-label="Next-Generation AI Agent Technology">
            <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-brand-emerald-mid" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-mid via-brand-teal-mid to-brand-emerald-mid">
              Next-Generation AI Agent Technology
            </span>
          </div>

          <h1 className="scroll-reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 md:mb-8 tracking-tight" style={{ animationDelay: '0.1s' }}>
            <span className="text-gradient block mb-2">
              Intelligent AI Agents
            </span>
            <span className="text-text-light-primary dark:text-text-dark-primary block">
              for Every Business Need
            </span>
          </h1>

          <p className="scroll-reveal text-base sm:text-lg md:text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4 font-medium" style={{ animationDelay: '0.2s' }}>
            Transform your business with AI voice agents, conversational chat bots, AI avatars, and complete workflow automation. Available 24/7, multilingual, and seamlessly integrated with your systems.
          </p>

          <div className="scroll-reveal flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 md:mb-16 px-4" style={{ animationDelay: '0.3s' }}>
            <a
              href="#demo-form"
              className="inline-block bg-gradient-brand text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:-translate-y-1 hover:shadow-elevation-4 transition-all duration-300 min-h-[52px] sm:min-h-[60px] flex items-center justify-center shadow-elevation-3"
              aria-label="Get started with AI agents"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="inline-block bg-light-primary/80 dark:bg-dark-tertiary/80 backdrop-blur-sm text-text-light-primary dark:text-text-dark-primary border-2 border-border-light dark:border-border-dark px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:-translate-y-1 hover:shadow-elevation-3 hover:border-brand-teal-mid transition-all duration-300 min-h-[52px] sm:min-h-[60px] flex items-center justify-center"
              aria-label="View our AI agent services"
            >
              View Services
            </a>
          </div>

          <div className="scroll-reveal grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-10 md:mb-16 px-4" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center sm:justify-start gap-3 bg-light-primary/95 dark:bg-dark-secondary/95 p-5 md:p-6 rounded-2xl border border-brand-slate-light/30 dark:border-brand-slate/30 shadow-elevation-1 transition-all duration-300" aria-label="24/7 Availability">
              <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-brand-blue-mid flex-shrink-0" aria-hidden="true" />
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-text-light-primary dark:text-text-dark-primary">24/7</div>
                <div className="text-xs sm:text-sm text-text-light-secondary dark:text-text-dark-secondary">Availability</div>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3 bg-light-primary/95 dark:bg-dark-secondary/95 p-5 md:p-6 rounded-2xl border border-brand-slate-light/30 dark:border-brand-slate/30 shadow-elevation-1 transition-all duration-300" aria-label="10x Efficiency Boost">
              <Bot className="w-6 h-6 sm:w-7 sm:h-7 text-brand-emerald-mid flex-shrink-0" aria-hidden="true" />
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-text-light-primary dark:text-text-dark-primary">10x</div>
                <div className="text-xs sm:text-sm text-text-light-secondary dark:text-text-dark-secondary">Efficiency</div>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3 bg-light-primary/95 dark:bg-dark-secondary/95 p-5 md:p-6 rounded-2xl border border-brand-slate-light/30 dark:border-brand-slate/30 shadow-elevation-1 transition-all duration-300" aria-label="70% Cost Reduction">
              <TrendingDown className="w-6 h-6 sm:w-7 sm:h-7 text-brand-teal-mid flex-shrink-0" aria-hidden="true" />
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-text-light-primary dark:text-text-dark-primary">70%</div>
                <div className="text-xs sm:text-sm text-text-light-secondary dark:text-text-dark-secondary">Cost Reduction</div>
              </div>
            </div>
          </div>

          <AnimatedVisual />
        </div>
      </div>
    </section>
  );
}
