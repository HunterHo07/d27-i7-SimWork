'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Pricing() {
  const sectionRef = useRef(null);
  const plansRef = useRef(null);
  
  const plans = [
    {
      name: "Starter",
      price: "$499",
      description: "Perfect for small teams and individual departments",
      features: [
        "Up to 25 active users",
        "3 role simulations",
        "Basic analytics",
        "Standard quest library",
        "Email support"
      ],
      color: "border-indigo-500",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,499",
      description: "Ideal for mid-sized companies with multiple departments",
      features: [
        "Up to 100 active users",
        "All role simulations",
        "Advanced analytics and reporting",
        "Custom quest creation",
        "API access",
        "Priority support",
        "Training session recordings"
      ],
      color: "border-pink-500",
      buttonColor: "bg-pink-600 hover:bg-pink-700",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$4,999",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited users",
        "Custom role creation",
        "White-labeling",
        "LMS/ATS integration",
        "Dedicated success manager",
        "Custom analytics dashboard",
        "24/7 premium support",
        "Onboarding assistance"
      ],
      color: "border-blue-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      popular: false
    }
  ];
  
  useEffect(() => {
    // Animate section title
    gsap.fromTo(
      sectionRef.current.querySelector('h2'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
    
    // Animate pricing plans
    const planElements = plansRef.current.children;
    gsap.fromTo(
      planElements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: plansRef.current,
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
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
          Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Pricing</span>
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Choose the plan that fits your organization's needs. All plans include our core simulation platform.
        </p>
        
        <div ref={plansRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-slate-800 rounded-xl overflow-hidden border-t-4 ${plan.color} shadow-xl relative ${
                plan.popular ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors ${plan.buttonColor}`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-indigo-900/50 rounded-lg p-6 max-w-3xl">
            <h3 className="text-xl font-semibold mb-3 text-white">Educational Discount</h3>
            <p className="text-gray-300 mb-4">
              We offer a 40% discount on all plans for verified educational institutions. Contact us to learn more.
            </p>
            <button className="bg-white text-indigo-900 hover:bg-gray-100 py-2 px-6 rounded-md font-medium transition-colors">
              Apply for Educational Discount
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
