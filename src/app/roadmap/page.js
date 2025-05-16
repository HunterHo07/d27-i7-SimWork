'use client';

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">SimWork Roadmap</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Our vision for the future of workplace simulation and training
        </p>
        
        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-500"></div>
            
            {/* Phase 1 */}
            <div className="relative mb-24">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center z-10">
                <span className="text-white font-bold">1</span>
              </div>
              
              <div className="ml-auto mr-auto md:ml-0 md:mr-[50%] md:pr-12 md:w-1/2 mb-12 md:mb-0 md:text-right">
                <div className="bg-slate-800 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-400">Phase 1: Web-Based 2.5D Simulation (Q2-Q4 2024)</h2>
                  <div className="space-y-4">
                    <div className="bg-slate-900 p-4 rounded-md">
                      <h3 className="text-lg font-medium mb-2 text-pink-400">Q2 2024: MVP Development</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        <li>2.5D interactive office environment</li>
                        <li>Basic character movement and interaction</li>
                        <li>Initial role simulations (Developer, Designer)</li>
                        <li>Fundamental task engine</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-900 p-4 rounded-md">
                      <h3 className="text-lg font-medium mb-2 text-pink-400">Q3 2024: Beta Launch</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Expanded role simulations (PM, Data Entry, AI Engineer)</li>
                        <li>Enhanced task variety and complexity</li>
                        <li>Basic analytics dashboard</li>
                        <li>Beta testing with 5-10 corporate partners</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-900 p-4 rounded-md">
                      <h3 className="text-lg font-medium mb-2 text-pink-400">Q4 2024: Public Launch</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Full analytics suite with performance metrics</li>
                        <li>Expanded task library across all roles</li>
                        <li>AI-powered difficulty adjustment</li>
                        <li>Public release of Phase 1 platform</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block md:ml-[50%] md:pl-12 md:w-1/2">
                <div className="bg-slate-800 p-6 rounded-lg h-full flex items-center">
                  <div className="space-y-4 w-full">
                    <h3 className="text-xl font-semibold text-indigo-400">Key Milestones</h3>
                    <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{ width: '30%' }}></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>MVP</span>
                      <span>Beta</span>
                      <span>Launch</span>
                    </div>
                    <p className="text-gray-300 mt-4">Current Status: MVP Development</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phase 2 */}
            <div className="relative mb-24">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center z-10">
                <span className="text-white font-bold">2</span>
              </div>
              
              <div className="ml-auto mr-auto md:mr-0 md:ml-[50%] md:pl-12 md:w-1/2">
                <div className="bg-slate-800 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-400">Phase 2: Expanded Platform (Q1-Q2 2025)</h2>
                  <div className="space-y-4">
                    <div className="bg-slate-900 p-4 rounded-md">
                      <h3 className="text-lg font-medium mb-2 text-pink-400">Q1 2025: Desktop & Mobile Apps</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Native desktop application for Windows/Mac</li>
                        <li>Mobile companion app for iOS/Android</li>
                        <li>Cross-platform synchronization</li>
                        <li>Offline mode for selected tasks</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-900 p-4 rounded-md">
                      <h3 className="text-lg font-medium mb-2 text-pink-400">Q2 2025: Advanced Features</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Custom scenario builder for enterprises</li>
                        <li>Advanced AI agents with natural language interaction</li>
                        <li>Expanded role-specific tools and environments</li>
                        <li>Integration with popular LMS and ATS platforms</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block md:mr-[50%] md:pr-12 md:w-1/2 md:text-right">
                <div className="bg-slate-800 p-6 rounded-lg h-full flex items-center justify-end">
                  <div className="space-y-4 w-full">
                    <h3 className="text-xl font-semibold text-indigo-400">Platform Expansion</h3>
                    <div className="flex space-x-4">
                      <div className="flex-1 bg-slate-900 p-3 rounded-md text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Desktop</span>
                      </div>
                      <div className="flex-1 bg-slate-900 p-3 rounded-md text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <span>Mobile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phase 3 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center z-10">
                <span className="text-white font-bold">3</span>
              </div>
              
              <div className="ml-auto mr-auto md:ml-0 md:mr-[50%] md:pr-12 md:w-1/2 md:text-right">
                <div className="bg-slate-800 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-400">Phase 3: Enterprise & Immersive (Q3-Q4 2025)</h2>
                  <div className="space-y-4">
                    <div className="bg-slate-900 p-4 rounded-md">
                      <h3 className="text-lg font-medium mb-2 text-pink-400">Q3 2025: VR/AR Integration</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        <li>VR support for immersive training experiences</li>
                        <li>AR overlay for real-world task assistance</li>
                        <li>Haptic feedback integration</li>
                        <li>Spatial audio for immersive environments</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-900 p-4 rounded-md">
                      <h3 className="text-lg font-medium mb-2 text-pink-400">Q4 2025: Multiplayer & Enterprise</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Multiplayer collaboration scenarios</li>
                        <li>Team-based assessment modules</li>
                        <li>Enterprise-wide analytics and reporting</li>
                        <li>Custom branding and white-label options</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block md:ml-[50%] md:pl-12 md:w-1/2">
                <div className="bg-slate-800 p-6 rounded-lg h-full">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-400">Future Vision</h3>
                  <p className="text-gray-300 mb-4">Phase 3 represents our vision for the future of workplace simulation—fully immersive, collaborative, and enterprise-ready.</p>
                  <div className="bg-slate-900 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Beyond 2025</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                      <li>AI-driven digital twins of employees</li>
                      <li>Predictive performance modeling</li>
                      <li>Industry-specific simulation environments</li>
                      <li>Global skills marketplace integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-24 bg-indigo-900 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us on This Journey</h2>
            <p className="text-xl mb-8">Be part of shaping the future of workplace training and assessment</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="py-3 px-8 bg-white text-indigo-900 hover:bg-gray-100 rounded-md transition text-lg font-medium">
                Become a Beta Partner
              </button>
              <button className="py-3 px-8 bg-transparent border border-white hover:bg-white/10 rounded-md transition text-lg font-medium">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
