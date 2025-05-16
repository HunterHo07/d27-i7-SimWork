'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProblemSolution() {
  const sectionRef = useRef(null);
  const problemsRef = useRef(null);
  const solutionsRef = useRef(null);
  
  useEffect(() => {
    const problems = problemsRef.current.children;
    const solutions = solutionsRef.current.children;
    
    // Animate problems
    gsap.fromTo(
      problems,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: problemsRef.current,
          start: 'top 80%',
        },
      }
    );
    
    // Animate solutions
    gsap.fromTo(
      solutions,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: solutionsRef.current,
          start: 'top 80%',
        },
      }
    );
    
    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">The </span>
            <span className="text-pink-500">Problem</span>
            <span className="text-white"> & Our </span>
            <span className="text-indigo-500">Solution</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're addressing critical gaps in corporate and educational training with an immersive, data-driven approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Problems */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-pink-500 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              The Problems
            </h3>
            
            <div ref={problemsRef} className="space-y-6">
              <div className="bg-slate-800 p-6 rounded-lg border-l-4 border-pink-500 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h4 className="text-xl font-semibold mb-2 text-white">Wrong Hires, Wasted Money</h4>
                <p className="text-gray-400">
                  Companies keep hiring the wrong people—time, salary, and training costs wasted. Real candidates also lose out due to bad screening and vague interviews.
                </p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border-l-4 border-pink-500 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h4 className="text-xl font-semibold mb-2 text-white">Fake Skills, No Real Test</h4>
                <p className="text-gray-400">
                  Many hires pass interviews but fail on the job. There's no hands-on task or live environment to prove they can actually do the daily work—even with AI tools.
                </p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border-l-4 border-pink-500 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h4 className="text-xl font-semibold mb-2 text-white">Slow, Inefficient Hiring Process</h4>
                <p className="text-gray-400">
                  Too many rounds, test sheets, and guesswork. No live data, no real output. Hiring managers waste time when they could just watch candidates solve actual tasks.
                </p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border-l-4 border-pink-500 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h4 className="text-xl font-semibold mb-2 text-white">No KPI or Proof of Skill</h4>
                <p className="text-gray-400">
                  Current systems don't track real performance. Without real-time KPIs, logs, and session recordings, it's all talk—no proof.
                </p>
              </div>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-indigo-500 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Our Solutions
            </h3>
            
            <div ref={solutionsRef} className="space-y-6">
              <div className="bg-slate-800 p-6 rounded-lg border-l-4 border-indigo-500 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h4 className="text-xl font-semibold mb-2 text-white">Immersive, Multi-Role Game World</h4>
                <p className="text-gray-400">
                  SimWork places users in a 3D office/map with stations for Developer, Designer, PM, Data Entry, and AI Engineer roles. Trainees navigate to desks equipped with real terminals, virtual notebooks, and design tools.
                </p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border-l-4 border-indigo-500 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h4 className="text-xl font-semibold mb-2 text-white">AI-Powered Adaptivity & Agents</h4>
                <p className="text-gray-400">
                  Integrated GPT-based agents guide scenarios, perform OCR on designer-submitted assets, and dynamically adjust task complexity. This prevents mis-hires by exposing candidates to true job demands.
                </p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border-l-4 border-indigo-500 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h4 className="text-xl font-semibold mb-2 text-white">Real-Time Analytics & Feedback</h4>
                <p className="text-gray-400">
                  A dashboard tracks KPIs (accuracy, speed, decision quality), generates personalized feedback loops, and offers hiring managers live or recorded sessions—bridging learning and evaluation.
                </p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border-l-4 border-indigo-500 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h4 className="text-xl font-semibold mb-2 text-white">Authentic Task Simulation</h4>
                <p className="text-gray-400">
                  Complete authentic tasks—form submissions, code challenges, image design—that mirror on-the-job workflows, providing real proof of capabilities and skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
