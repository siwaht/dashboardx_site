import { MessageSquare, Phone, User, Workflow, Settings, Video } from 'lucide-react';
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
      icon: MessageSquare,
      title: 'Chat Agents',
      description: 'Intelligent conversational bots that handle customer inquiries, support tickets, and lead qualification 24/7 with natural language understanding.',
      gradient: 'from-brand-blue-start via-brand-blue-mid to-brand-teal-start',
      category: 'Agent Core',
    },
    {
      icon: Phone,
      title: 'Voice Calling Agents',
      description: 'AI-powered voice agents that make and receive calls, schedule appointments, conduct surveys, and provide phone support with human-like conversation.',
      gradient: 'from-brand-teal-start via-brand-teal-mid to-brand-emerald-start',
      category: 'Agent Core',
    },
    {
      icon: User,
      title: 'AI Avatars',
      description: 'Lifelike digital representatives that provide personalized video interactions, product demonstrations, and virtual assistance with realistic expressions.',
      gradient: 'from-brand-emerald-mid via-brand-teal-end to-brand-amber-start',
      category: 'Agent Core',
    },
    {
      icon: Settings,
      title: 'Custom AI Agents',
      description: 'Tailor-made AI solutions built from the ground up to handle unique and complex business processes or integrate with proprietary systems. Maximum flexibility and functional alignment for enterprise needs.',
      gradient: 'from-brand-amber-start via-brand-coral-start to-brand-coral-mid',
      category: 'Specialized',
    },
    {
      icon: Workflow,
      title: 'RAG Data Retrieval',
      description: 'Retrieval-Augmented Generation (RAG) technology that connects agents to your knowledge base, enabling accurate responses powered by your actual business data and documents.',
      gradient: 'from-brand-blue-start via-brand-teal-mid to-brand-emerald-mid',
      category: 'Data/Tech',
    },
    {
      icon: Video,
      title: 'AI Generated Video Ads',
      description: 'Rapid creation of high-quality, personalized video advertisements using AI. Perfect for A/B testing, scaled marketing campaigns, and achieving fast time-to-market with proven ROI.',
      gradient: 'from-brand-coral-start via-brand-amber-mid to-brand-emerald-start',
      category: 'Marketing',
    },
  ];

  return (
    <section ref={sectionRef} id="services" aria-labelledby="services-heading" className="py-16 md:py-24 bg-light-primary dark:bg-dark-secondary transition-colors relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-emerald-mid/3 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 id="services-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-text-light-primary dark:text-text-dark-primary tracking-tight">
            Our AI Agent Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to automate, enhance, and transform every aspect of your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto px-4">
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
                <p className="text-text-light-secondary dark:text-text-dark-secondary leading-relaxed text-center text-sm sm:text-base md:text-lg font-medium">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
