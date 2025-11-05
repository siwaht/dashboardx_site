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
    <section ref={sectionRef} id="hero" aria-label="Hero section" className="py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 text-center bg-gradient-to-b from-light-secondary via-light-primary to-light-secondary dark:from-dark-primary dark:via-dark-secondary dark:to-dark-primary transition-colors relative overflow-hidden">
      {/* Elegant background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" style={{ animation: 'float-elegant 8s ease-in-out infinite' }}></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" style={{ animation: 'float-elegant 10s ease-in-out infinite 2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" style={{ animation: 'float-elegant 12s ease-in-out infinite 4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto overflow-visible">
          <div className="scroll-reveal inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-md px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full border border-purple-500/30 dark:border-pink-500/30 mb-4 sm:mb-6 md:mb-8 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-pink-500/30 hover:border-pink-500/50 transition-all duration-500 shimmer-effect" aria-label="Next-Generation AI Agent Technology">
            <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-500 dark:text-pink-400 animate-pulse" aria-hidden="true" />
            <span className="text-[10px] sm:text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400">
              Next-Generation AI Agent Technology
            </span>
          </div>

          <h1 className="scroll-reveal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.5] mb-4 sm:mb-6 md:mb-8 tracking-tight px-4 sm:px-6 md:px-8" style={{ animationDelay: '0.1s' }}>
            <span className="text-gradient inline-block mb-2 sm:mb-3 pb-3 sm:pb-4">
              Intelligent AI Agents
            </span>
            <span className="text-text-light-primary dark:text-text-dark-primary block">
              for Every Business Need
            </span>
          </h1>

          <p className="scroll-reveal text-sm sm:text-base md:text-lg lg:text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed px-3 sm:px-4 font-medium" style={{ animationDelay: '0.2s' }}>
            Transform your business with AI voice agents, conversational chat bots, AI avatars, and complete workflow automation. Available 24/7, multilingual, and seamlessly integrated with your systems.
          </p>

          <div className="scroll-reveal flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 md:mb-16 px-4" style={{ animationDelay: '0.3s' }}>
            <a
              href="#demo-form"
              className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 min-h-[52px] sm:min-h-[60px] flex items-center justify-center shadow-lg shadow-purple-500/30 relative overflow-hidden group shimmer-effect"
              aria-label="Get started with AI agents"
            >
              <span className="relative z-10">Get Started</span>
            </a>
            <a
              href="#services"
              className="inline-block bg-gradient-to-r from-light-primary/90 to-light-secondary/90 dark:from-dark-tertiary/90 dark:to-dark-secondary/90 backdrop-blur-sm text-text-light-primary dark:text-text-dark-primary border-2 border-purple-500/30 dark:border-pink-500/30 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/60 transition-all duration-500 min-h-[52px] sm:min-h-[60px] flex items-center justify-center relative overflow-hidden group"
              aria-label="View our AI agent services"
            >
              <span className="relative z-10">View Services</span>
            </a>
          </div>

          <div className="scroll-reveal grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-10 md:mb-16 px-4" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center sm:justify-start gap-3 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-purple-500/30 dark:border-purple-500/20 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-500 group" aria-label="24/7 Availability">
              <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600 dark:text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-500" aria-hidden="true" />
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-text-light-primary dark:text-text-dark-primary">24/7</div>
                <div className="text-xs sm:text-sm text-text-light-secondary dark:text-text-dark-secondary">Availability</div>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3 bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-pink-500/30 dark:border-pink-500/20 shadow-lg shadow-pink-500/10 hover:shadow-xl hover:shadow-pink-500/20 hover:-translate-y-1 transition-all duration-500 group" aria-label="10x Efficiency Boost">
              <Bot className="w-6 h-6 sm:w-7 sm:h-7 text-pink-600 dark:text-pink-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-500" aria-hidden="true" />
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-text-light-primary dark:text-text-dark-primary">10x</div>
                <div className="text-xs sm:text-sm text-text-light-secondary dark:text-text-dark-secondary">Efficiency</div>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-blue-500/30 dark:border-blue-500/20 shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-500 group" aria-label="70% Cost Reduction">
              <TrendingDown className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 dark:text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-500" aria-hidden="true" />
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
