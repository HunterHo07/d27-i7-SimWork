'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function CallToAction() {
  const ctaRef = useRef(null);
  
  useEffect(() => {
    // Animate the CTA section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ctaRef.current,
        start: 'top 80%',
      },
    });
    
    tl.fromTo(
      ctaRef.current.querySelector('h2'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    )
    .fromTo(
      ctaRef.current.querySelector('p'),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.3'
    )
    .fromTo(
      ctaRef.current.querySelectorAll('button, a'),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
      '-=0.3'
    );
    
    // Animate the background gradient
    gsap.to(ctaRef.current.querySelector('.bg-gradient'), {
      backgroundPosition: '200% 50%',
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);
  
  return (
    <section ref={ctaRef} className="py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div 
        className="bg-gradient absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(120deg, #0f172a, #1e293b, #312e81, #4f46e5, #312e81, #1e293b, #0f172a)',
          backgroundSize: '200% 100%',
          backgroundPosition: '0% 50%',
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Hiring & Training?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Join our early access program and be the first to experience the future of workplace simulation. Limited spots available.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/demo" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors inline-block">
              Try Demo
            </Link>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md text-lg font-medium transition-colors">
              Request Early Access
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-300">Tasks & Challenges</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <div className="text-4xl font-bold text-white mb-2">5</div>
              <div className="text-gray-300">Role Simulations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <div className="text-4xl font-bold text-white mb-2">40%</div>
              <div className="text-gray-300">Hiring Improvement</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-10"></div>
    </section>
  );
}
