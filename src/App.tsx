import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import AGUISection from './components/AGUISection';
import WorkflowSection from './components/WorkflowSection';
import Features from './components/Features';
import UseCases from './components/UseCases';
import DemoForm from './components/DemoForm';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import { useState } from 'react';

function App() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-primary dark:bg-dark-primary text-text-light-primary dark:text-text-dark-primary transition-colors">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gradient-brand text-white px-4 py-2 rounded-lg z-50">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" role="main">
          <Hero />
          <HowItWorks />
          <AGUISection />
          <WorkflowSection />
          <Features />
          <UseCases />
          <DemoForm />
        </main>
        <Footer onOpenPrivacy={() => setShowPrivacyModal(true)} />

        {showPrivacyModal && (
          <PrivacyPolicy onClose={() => setShowPrivacyModal(false)} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
