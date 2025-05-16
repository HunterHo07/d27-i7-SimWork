'use client';

import Hero from '@/components/home/Hero';
import ProblemSolution from '@/components/home/ProblemSolution';
import FeatureShowcase from '@/components/home/FeatureShowcase';
import Testimonials from '@/components/home/Testimonials';
import Pricing from '@/components/home/Pricing';
import CallToAction from '@/components/home/CallToAction';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <FeatureShowcase />
      <Testimonials />
      <Pricing />
      <CallToAction />
    </main>
  );
}
