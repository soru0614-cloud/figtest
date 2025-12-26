import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { ChallengeOffer } from './components/ChallengeOffer';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { StickyBottomCta } from './components/StickyBottomCta';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-amber-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <ChallengeOffer />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <StickyBottomCta />
    </div>
  );
};

export default App;
