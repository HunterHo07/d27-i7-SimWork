'use client';

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Why SimWork?</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          We're revolutionizing how companies hire, train, and evaluate talent through immersive simulation
        </p>
        
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Competitive Advantage Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-indigo-400 text-center">Our Competitive Advantage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Multi-Role Simulation</h3>
                <p className="text-gray-300 text-center">Unlike single-skill competitors, SimWork offers a comprehensive workplace simulation across multiple roles.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Real Tool Integration</h3>
                <p className="text-gray-300 text-center">Embedded terminals, design tools, and data entry systems provide authentic task experiences.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">AI-Powered Adaptivity</h3>
                <p className="text-gray-300 text-center">Dynamic difficulty adjustment and personalized feedback create more relevant learning experiences.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Engagement Through Gamification</h3>
                <p className="text-gray-300 text-center">Higher completion rates and skill retention through game mechanics.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Comprehensive Analytics</h3>
                <p className="text-gray-300 text-center">Real-time performance tracking with actionable insights for both learners and managers.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Time-Efficient</h3>
                <p className="text-gray-300 text-center">Reduce hiring time by 60% while increasing quality of hires through realistic assessment.</p>
              </div>
            </div>
          </section>
          
          {/* Comparison Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-indigo-400 text-center">How We Compare</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-slate-800 rounded-lg">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">SimWork</th>
                    <th className="p-4 text-center">Traditional Assessment</th>
                    <th className="p-4 text-center">Coding Platforms</th>
                    <th className="p-4 text-center">VR Training</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700">
                    <td className="p-4">Multi-Role Support</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                    <td className="p-4 text-center text-red-500">✗</td>
                    <td className="p-4 text-center text-red-500">✗</td>
                    <td className="p-4 text-center text-yellow-500">Limited</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="p-4">Real-World Tasks</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                    <td className="p-4 text-center text-red-500">✗</td>
                    <td className="p-4 text-center text-yellow-500">Limited</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="p-4">AI Adaptivity</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                    <td className="p-4 text-center text-red-500">✗</td>
                    <td className="p-4 text-center text-yellow-500">Limited</td>
                    <td className="p-4 text-center text-red-500">✗</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="p-4">No Hardware Required</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                    <td className="p-4 text-center text-red-500">✗</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="p-4">Comprehensive Analytics</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                    <td className="p-4 text-center text-yellow-500">Limited</td>
                    <td className="p-4 text-center text-yellow-500">Limited</td>
                    <td className="p-4 text-center text-yellow-500">Limited</td>
                  </tr>
                  <tr>
                    <td className="p-4">Engagement Level</td>
                    <td className="p-4 text-center text-green-500">High</td>
                    <td className="p-4 text-center text-red-500">Low</td>
                    <td className="p-4 text-center text-yellow-500">Medium</td>
                    <td className="p-4 text-center text-green-500">High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          
          {/* Testimonials Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-indigo-400 text-center">What Early Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-400">HR Director, TechCorp</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"SimWork has transformed our hiring process. We've reduced mis-hires by 40% and cut onboarding time in half. The real-world tasks give us confidence that candidates can actually perform on day one."</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-600 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-semibold">Michael Chen</h3>
                    <p className="text-sm text-gray-400">Training Manager, FinanceHub</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"The engagement levels with SimWork are off the charts. Our team actually looks forward to training sessions now, and skill retention has improved dramatically compared to our old LMS."</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-semibold">Dr. Alicia Rodriguez</h3>
                    <p className="text-sm text-gray-400">Professor, Tech University</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"My students are much better prepared for the real world after using SimWork. The simulation bridges the gap between academic knowledge and practical application in a way textbooks never could."</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-semibold">James Wilson</h3>
                    <p className="text-sm text-gray-400">CTO, StartupX</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"The analytics from SimWork give us unprecedented insight into our team's capabilities. We've identified skill gaps we didn't know existed and can now target our training much more effectively."</p>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="bg-indigo-900 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Experience the SimWork Difference</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join the companies transforming how they hire, train, and evaluate talent</p>
            <button className="py-3 px-8 bg-white text-indigo-900 hover:bg-gray-100 rounded-md transition text-lg font-medium">
              Schedule a Demo
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}
