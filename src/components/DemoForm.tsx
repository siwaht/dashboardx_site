import { FormEvent, useState, useRef, useEffect } from 'react';
import { CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      job_title: formData.get('job_title') as string,
      service_interest: formData.get('service_interest') as string,
    };

    try {
      if (!supabase) {
        throw new Error('Database connection not available');
      }

      const { error } = await supabase
        .from('consultation_requests')
        .insert([data]);

      if (error) throw error;

      setSubmitStatus('success');
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error submitting demo request:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="demo-form" aria-labelledby="demo-form-heading" className="py-16 md:py-24 bg-light-primary dark:bg-dark-primary transition-colors relative overflow-hidden">

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-light-primary/95 dark:bg-dark-primary/95 p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl border border-brand-slate-light/30 dark:border-brand-slate/30 shadow-elevation-3 relative overflow-hidden">

          <div className="relative z-10">
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center gap-3 bg-light-secondary/90 dark:bg-dark-secondary/90 px-6 py-3 rounded-full border border-brand-emerald-mid/30 mb-8 shadow-elevation-2">
                <Sparkles className="w-5 h-5 text-brand-emerald-mid" />
                <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-mid via-brand-teal-mid to-brand-emerald-mid">
                  Start Your AI Transformation
                </span>
              </div>

              <h2 id="demo-form-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gradient tracking-tight">
                Get Your Free Consultation
              </h2>
              <p className="text-text-light-secondary dark:text-text-dark-secondary leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium px-2">
                Discover how AI agents can transform your business operations. Schedule a personalized consultation with our team to explore voice agents, chat bots, AI avatars, and workflow automation tailored to your needs.
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="scroll-reveal mb-6 md:mb-8 p-5 sm:p-6 md:p-8 bg-green-50 dark:bg-green-900/30 border-2 border-green-300 dark:border-green-700 rounded-2xl flex items-start gap-3 sm:gap-4 shadow-elevation-2 animate-fadeInScale">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-1">
                    Consultation Request Received!
                  </h3>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Thank you for your interest. Our AI solutions team will contact you within 24 hours to discuss your needs and schedule a personalized consultation.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="scroll-reveal mb-6 md:mb-8 p-5 sm:p-6 md:p-8 bg-red-50 dark:bg-red-900/30 border-2 border-red-300 dark:border-red-700 rounded-2xl flex items-start gap-3 sm:gap-4 shadow-elevation-2 animate-fadeInScale">
                <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-1">
                    Submission Failed
                  </h3>
                  <p className="text-sm text-red-800 dark:text-red-200">
                    {errorMessage || 'Please try again or contact us directly.'}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="scroll-reveal flex flex-col group">
                <label
                  htmlFor="name"
                  className="text-sm font-bold text-text-light-secondary dark:text-text-dark-secondary mb-3 group-focus-within:text-gradient transition-all duration-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={isSubmitting}
                  className="bg-light-primary/95 dark:bg-dark-primary/95 border border-brand-slate-light/30 dark:border-brand-slate/30 text-text-light-primary dark:text-text-dark-primary px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium focus:outline-none focus:border-brand-teal-mid focus:ring-2 focus:ring-brand-emerald-mid/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-elevation-1"
                  placeholder="John Doe"
                />
              </div>

              <div className="scroll-reveal flex flex-col group" style={{ animationDelay: '0.1s' }}>
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-text-light-secondary dark:text-text-dark-secondary mb-3 group-focus-within:text-gradient transition-all duration-300"
                >
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={isSubmitting}
                  className="bg-light-primary/95 dark:bg-dark-primary/95 border border-brand-slate-light/30 dark:border-brand-slate/30 text-text-light-primary dark:text-text-dark-primary px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium focus:outline-none focus:border-brand-teal-mid focus:ring-2 focus:ring-brand-emerald-mid/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-elevation-1"
                  placeholder="john@company.com"
                />
              </div>

              <div className="scroll-reveal flex flex-col group" style={{ animationDelay: '0.2s' }}>
                <label
                  htmlFor="company"
                  className="text-sm font-bold text-text-light-secondary dark:text-text-dark-secondary mb-3 group-focus-within:text-gradient transition-all duration-300"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  disabled={isSubmitting}
                  className="bg-light-primary/95 dark:bg-dark-primary/95 border border-brand-slate-light/30 dark:border-brand-slate/30 text-text-light-primary dark:text-text-dark-primary px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium focus:outline-none focus:border-brand-teal-mid focus:ring-2 focus:ring-brand-emerald-mid/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-elevation-1"
                  placeholder="Acme Inc."
                />
              </div>

              <div className="scroll-reveal flex flex-col group" style={{ animationDelay: '0.3s' }}>
                <label
                  htmlFor="job-title"
                  className="text-sm font-bold text-text-light-secondary dark:text-text-dark-secondary mb-3 group-focus-within:text-gradient transition-all duration-300"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  id="job-title"
                  name="job_title"
                  required
                  disabled={isSubmitting}
                  className="bg-light-primary/95 dark:bg-dark-primary/95 border border-brand-slate-light/30 dark:border-brand-slate/30 text-text-light-primary dark:text-text-dark-primary px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium focus:outline-none focus:border-brand-teal-mid focus:ring-2 focus:ring-brand-emerald-mid/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-elevation-1"
                  placeholder="Product Manager"
                />
              </div>

              <div className="scroll-reveal md:col-span-2" style={{ animationDelay: '0.4s' }}>
                <label
                  htmlFor="service-interest"
                  className="text-sm font-bold text-text-light-secondary dark:text-text-dark-secondary mb-3 block"
                >
                  Service Interest
                </label>
                <select
                  id="service-interest"
                  name="service_interest"
                  required
                  disabled={isSubmitting}
                  className="w-full bg-light-primary/95 dark:bg-dark-primary/95 border border-brand-slate-light/30 dark:border-brand-slate/30 text-text-light-primary dark:text-text-dark-primary px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium focus:outline-none focus:border-brand-teal-mid focus:ring-2 focus:ring-brand-emerald-mid/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-elevation-1 mb-5 md:mb-6"
                >
                  <option value="">Select a service</option>
                  <option value="chat-agents">Chat Agents</option>
                  <option value="voice-agents">Voice Calling Agents</option>
                  <option value="ai-avatars">AI Avatars</option>
                  <option value="workflow-automation">Workflow Automation</option>
                  <option value="all-services">All Services</option>
                </select>
              </div>

              <div className="scroll-reveal md:col-span-2" style={{ animationDelay: '0.5s' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-ripple w-full bg-gradient-brand text-white py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.02] sm:hover:scale-105 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100 shadow-elevation-4 relative overflow-hidden group border-2 border-white/20"
                >
                  <span className="relative z-10">
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Request Consultation'
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
