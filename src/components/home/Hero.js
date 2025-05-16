'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Create particles
    const particlesContainer = particlesRef.current;
    if (particlesContainer) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full bg-indigo-500 opacity-20';
        
        // Random size between 4px and 12px
        const size = Math.random() * 8 + 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        particlesContainer.appendChild(particle);
      }
    }

    // GSAP animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo(
      titleRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
    )
    .fromTo(
      subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.4'
    )
    .fromTo(
      ctaRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
      '-=0.4'
    )
    .fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 },
      '-=0.8'
    );

    // Animate particles
    if (particlesContainer) {
      const particles = particlesContainer.children;
      for (let i = 0; i < particles.length; i++) {
        gsap.to(particles[i], {
          x: `random(-100, 100)`,
          y: `random(-100, 100)`,
          duration: `random(10, 20)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 5,
        });
      }
    }

    // Parallax effect on scroll
    gsap.to(imageRef.current, {
      y: 100,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      // Cleanup animations
      if (particlesContainer) {
        gsap.killTweensOf(particlesContainer.children);
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Particles background */}
      <div ref={particlesRef} className="absolute inset-0 z-0"></div>
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-900/20 to-slate-900 z-0"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="block">The Future of</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                Work Simulation
              </span>
            </h1>
            
            <p ref={subtitleRef} className="text-xl text-gray-300 mb-8">
              SimWork delivers an AI-driven, immersive workplace simulation that combines real-world tasks with adaptive difficulty, real-time analytics, and engaging gameplay.
            </p>
            
            <div ref={ctaRef} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/demo" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors inline-block text-center">
                Try Demo
              </Link>
              <Link href="/pitch-deck" className="bg-transparent border border-indigo-400 text-indigo-400 hover:bg-indigo-400/10 px-8 py-3 rounded-md text-lg font-medium transition-colors inline-block text-center">
                Learn More
              </Link>
            </div>
          </div>
          
          <div ref={imageRef} className="relative">
            {/* 3D Office Simulation Preview */}
            <div className="relative bg-slate-800 rounded-lg overflow-hidden shadow-2xl border border-indigo-500/30">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 relative">
                {/* Office Environment */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full p-4">
                    <div className="w-full h-full bg-slate-700 rounded-lg relative overflow-hidden">
                      {/* Office Grid Floor */}
                      <div className="absolute inset-0 bg-slate-800" style={{ 
                        backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}></div>
                      
                      {/* Office Furniture */}
                      <div className="absolute left-[20%] top-[30%] w-16 h-16 bg-slate-600 rounded-sm"></div>
                      <div className="absolute left-[60%] top-[40%] w-20 h-12 bg-slate-600 rounded-sm"></div>
                      <div className="absolute left-[30%] top-[60%] w-24 h-8 bg-slate-600 rounded-sm"></div>
                      
                      {/* Character */}
                      <div className="absolute left-[50%] top-[50%] w-6 h-6 bg-indigo-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-indigo-500/50"></div>
                      
                      {/* Task Stations */}
                      <div className="absolute left-[20%] top-[30%] w-4 h-4 bg-pink-500 rounded-full animate-ping opacity-70"></div>
                      <div className="absolute left-[70%] top-[60%] w-4 h-4 bg-green-500 rounded-full animate-ping opacity-70"></div>
                    </div>
                  </div>
                </div>
                
                {/* UI Overlay */}
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm px-3 py-2 rounded-md border border-indigo-500/30 text-xs text-indigo-300">
                  Developer Bay
                </div>
                
                <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-2 rounded-md border border-indigo-500/30 text-xs flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-300">Task Available</span>
                </div>
              </div>
              
              {/* Control Bar */}
              <div className="bg-slate-900 p-3 flex justify-between items-center">
                <div className="flex space-x-2">
                  <button className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-indigo-400 hover:bg-slate-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-indigo-400 hover:bg-slate-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                <div className="text-xs text-indigo-300">SimWork Demo</div>
                
                <button className="text-xs bg-indigo-600 hover:bg-indigo-700 px-2 py-1 rounded text-white transition-colors">
                  Start Task
                </button>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-500 to-indigo-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
