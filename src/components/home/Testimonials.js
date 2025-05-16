'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRef = useRef(null);
  const slideRefs = useRef([]);
  
  const testimonials = [
    {
      quote: "SimWork has transformed our hiring process. We've reduced mis-hires by 40% and cut onboarding time in half. The real-world tasks give us confidence that candidates can actually perform on day one.",
      name: "Sarah Johnson",
      title: "HR Director, TechCorp",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      color: "from-indigo-500 to-blue-600"
    },
    {
      quote: "The engagement levels with SimWork are off the charts. Our team actually looks forward to training sessions now, and skill retention has improved dramatically compared to our old LMS.",
      name: "Michael Chen",
      title: "Training Manager, FinanceHub",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      color: "from-pink-500 to-purple-600"
    },
    {
      quote: "My students are much better prepared for the real world after using SimWork. The simulation bridges the gap between academic knowledge and practical application in a way textbooks never could.",
      name: "Dr. Alicia Rodriguez",
      title: "Professor, Tech University",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      color: "from-green-500 to-emerald-600"
    },
    {
      quote: "The analytics from SimWork give us unprecedented insight into our team's capabilities. We've identified skill gaps we didn't know existed and can now target our training much more effectively.",
      name: "James Wilson",
      title: "CTO, StartupX",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      color: "from-blue-500 to-cyan-600"
    }
  ];
  
  useEffect(() => {
    // Initialize slide references
    slideRefs.current = slideRefs.current.slice(0, testimonials.length);
    
    // Set up animation for testimonial change
    const animateSlide = (index) => {
      gsap.fromTo(
        slideRefs.current[index],
        { 
          opacity: 0,
          y: 20
        },
        { 
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        }
      );
    };
    
    // Initial animation
    animateSlide(activeIndex);
    
    // Set up auto-rotation
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % testimonials.length;
        animateSlide(newIndex);
        return newIndex;
      });
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const handleDotClick = (index) => {
    setActiveIndex(index);
    gsap.fromTo(
      slideRefs.current[index],
      { 
        opacity: 0,
        y: 20
      },
      { 
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }
    );
  };
  
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
          What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Users</span> Say
        </h2>
        
        <div ref={testimonialRef} className="max-w-4xl mx-auto">
          {/* Testimonial Slides */}
          <div className="relative h-80 md:h-64">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={(el) => (slideRefs.current[index] = el)}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="bg-slate-900 rounded-xl p-8 h-full shadow-xl border border-gray-800 relative overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${testimonial.color} opacity-10 blur-xl`}></div>
                  
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 h-full relative z-10">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-800">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <blockquote className="text-gray-300 mb-4">
                        {testimonial.quote}
                      </blockquote>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-indigo-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
