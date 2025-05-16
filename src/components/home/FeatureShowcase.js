'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeatureShowcase() {
  const sectionRef = useRef(null);
  const featuresRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Developer Bay",
      description: "Complete coding challenges in a simulated IDE with real-time feedback and syntax highlighting. Debug issues, implement features, and showcase your problem-solving skills.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "from-indigo-500 to-blue-600",
      preview: (
        <div className="bg-slate-800 rounded-lg p-4 h-full">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-4 text-xs text-gray-400">SimWork IDE</div>
          </div>
          <div className="font-mono text-xs text-left space-y-1 text-gray-300">
            <div><span className="text-pink-400">function</span> <span className="text-blue-400">calculateScore</span>(<span className="text-orange-400">results</span>) {'{'}</div>
            <div className="pl-4"><span className="text-pink-400">let</span> score = <span className="text-green-400">0</span>;</div>
            <div className="pl-4"><span className="text-pink-400">for</span> (<span className="text-pink-400">const</span> result <span className="text-pink-400">of</span> results) {'{'}</div>
            <div className="pl-8"><span className="text-pink-400">if</span> (result.correct) {'{'}</div>
            <div className="pl-12">score += result.points;</div>
            <div className="pl-8">{'}'}</div>
            <div className="pl-4">{'}'}</div>
            <div className="pl-4"><span className="text-pink-400">return</span> score;</div>
            <div>{'}'}</div>
            <div className="mt-2 text-gray-400">// TODO: Implement bonus points calculation</div>
          </div>
        </div>
      )
    },
    {
      title: "Design Lab",
      description: "Create visual assets in a Figma-like interface. Complete design briefs, make UI components, and demonstrate your creative skills with built-in design tools.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-pink-500 to-purple-600",
      preview: (
        <div className="bg-slate-800 rounded-lg p-4 h-full">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs text-gray-400">SimWork Design Canvas</div>
            <div className="flex space-x-2">
              <div className="w-6 h-6 rounded bg-pink-500 flex items-center justify-center text-white text-xs">T</div>
              <div className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-white text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <div className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-white text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md h-32 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
              SW
            </div>
          </div>
          <div className="mt-3 flex justify-between">
            <div className="flex space-x-2">
              <div className="w-6 h-6 rounded-full bg-pink-500"></div>
              <div className="w-6 h-6 rounded-full bg-purple-500"></div>
              <div className="w-6 h-6 rounded-full bg-indigo-500"></div>
            </div>
            <button className="text-xs bg-pink-500 text-white px-2 py-1 rounded">Save Design</button>
          </div>
        </div>
      )
    },
    {
      title: "Project Management Hub",
      description: "Organize tasks, set priorities, and manage resources in a simulated project environment. Make decisions and demonstrate your leadership and organizational skills.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-600",
      preview: (
        <div className="bg-slate-800 rounded-lg p-4 h-full">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs text-gray-400">SimWork Project Board</div>
            <div className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Sprint 3</div>
          </div>
          <div className="grid grid-cols-3 gap-2 h-40">
            <div className="bg-slate-700 rounded p-2">
              <div className="text-xs font-medium mb-2 text-gray-300">To Do</div>
              <div className="space-y-2">
                <div className="bg-slate-800 p-2 rounded text-xs text-gray-300">
                  <div className="text-blue-400 mb-1">TASK-143</div>
                  <div>Update user dashboard</div>
                </div>
                <div className="bg-slate-800 p-2 rounded text-xs text-gray-300">
                  <div className="text-blue-400 mb-1">TASK-144</div>
                  <div>Fix login bug</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-700 rounded p-2">
              <div className="text-xs font-medium mb-2 text-gray-300">In Progress</div>
              <div className="space-y-2">
                <div className="bg-slate-800 p-2 rounded text-xs text-gray-300">
                  <div className="text-blue-400 mb-1">TASK-142</div>
                  <div>Implement analytics</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-700 rounded p-2">
              <div className="text-xs font-medium mb-2 text-gray-300">Done</div>
              <div className="space-y-2">
                <div className="bg-slate-800 p-2 rounded text-xs text-gray-300">
                  <div className="text-blue-400 mb-1">TASK-141</div>
                  <div>Design homepage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Data Entry Station",
      description: "Process information accurately and efficiently in various formats. Handle forms, spreadsheets, and databases while maintaining data integrity and attention to detail.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "from-green-500 to-emerald-600",
      preview: (
        <div className="bg-slate-800 rounded-lg p-4 h-full">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs text-gray-400">SimWork Data Entry</div>
            <div className="text-xs bg-green-500 text-white px-2 py-1 rounded">Customer Records</div>
          </div>
          <div className="bg-white rounded-md p-2">
            <table className="w-full text-xs text-left text-gray-800">
              <thead>
                <tr className="border-b">
                  <th className="py-1 px-2">ID</th>
                  <th className="py-1 px-2">Name</th>
                  <th className="py-1 px-2">Email</th>
                  <th className="py-1 px-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-1 px-2">001</td>
                  <td className="py-1 px-2">John Doe</td>
                  <td className="py-1 px-2">john@example.com</td>
                  <td className="py-1 px-2"><span className="bg-green-100 text-green-800 px-1 rounded">Active</span></td>
                </tr>
                <tr className="border-b">
                  <td className="py-1 px-2">002</td>
                  <td className="py-1 px-2">Jane Smith</td>
                  <td className="py-1 px-2">jane@example.com</td>
                  <td className="py-1 px-2"><span className="bg-yellow-100 text-yellow-800 px-1 rounded">Pending</span></td>
                </tr>
                <tr>
                  <td className="py-1 px-2">003</td>
                  <td className="py-1 px-2">Bob Johnson</td>
                  <td className="py-1 px-2">bob@example.com</td>
                  <td className="py-1 px-2"><span className="bg-red-100 text-red-800 px-1 rounded">Inactive</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-2 flex justify-end">
            <button className="text-xs bg-green-500 text-white px-2 py-1 rounded">Add Record</button>
          </div>
        </div>
      )
    },
    {
      title: "AI Engineer Station",
      description: "Design and optimize AI prompts, evaluate model outputs, and solve AI implementation challenges. Demonstrate your ability to work with cutting-edge AI technologies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-purple-500 to-violet-600",
      preview: (
        <div className="bg-slate-800 rounded-lg p-4 h-full">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs text-gray-400">SimWork AI Prompt Engineering</div>
            <div className="text-xs bg-purple-500 text-white px-2 py-1 rounded">GPT-4</div>
          </div>
          <div className="bg-slate-900 rounded-md p-3 h-32 overflow-y-auto text-xs font-mono">
            <div className="text-green-400 mb-1">// Task: Create a prompt that generates a product description</div>
            <div className="text-gray-300">
              <span className="text-purple-400">const</span> prompt = <span className="text-yellow-300">`Write a compelling product description for a smartphone that highlights its features and appeals to target audience. Include a call-to-action at the end.`</span>;
            </div>
            <div className="mt-2 text-gray-300">
              <span className="text-purple-400">function</span> <span className="text-blue-400">evaluateResponse</span>(response) {'{'}
            </div>
            <div className="text-gray-300 pl-4">
              <span className="text-purple-400">const</span> criteria = ['clarity', 'persuasiveness', 'accuracy'];
            </div>
            <div className="text-gray-300 pl-4">
              <span className="text-purple-400">let</span> score = 0;
            </div>
            <div className="text-gray-300 pl-4">
              <span className="text-green-400">// TODO: Implement scoring algorithm</span>
            </div>
            <div className="text-gray-300">{'}'}</div>
          </div>
          <div className="mt-2 flex justify-between items-center">
            <div className="text-xs text-gray-400">Effectiveness Score: 85%</div>
            <button className="text-xs bg-purple-500 text-white px-2 py-1 rounded">Test Prompt</button>
          </div>
        </div>
      )
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

    // Animate features
    const featureElements = featuresRef.current.querySelectorAll('.feature-card');
    gsap.fromTo(
      featureElements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
        },
      }
    );

    // Set up auto-rotation for features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [features.length]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
          Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Feature-Rich</span> Simulation
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature Preview */}
          <div className="order-2 lg:order-1 bg-slate-900 p-6 rounded-xl shadow-xl border border-gray-800">
            <div className="aspect-[4/3]">
              {features[activeFeature].preview}
            </div>
          </div>

          {/* Feature Selection */}
          <div ref={featuresRef} className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? `bg-gradient-to-br ${feature.color} shadow-lg`
                    : 'bg-slate-800 hover:bg-slate-700'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`mb-4 ${activeFeature === index ? 'text-white' : ''}`}>
                    {feature.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${activeFeature === index ? 'text-white' : 'text-white'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm ${activeFeature === index ? 'text-white/90' : 'text-gray-400'}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
