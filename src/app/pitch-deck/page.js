'use client';

export default function PitchDeckPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">SimWork Pitch Deck</h1>
        <p className="text-xl text-center mb-12">
          Our vision for transforming workplace training and hiring
        </p>
        
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Slide 1: Problem */}
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-indigo-400">The Problem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">Wrong Hires, Wasted Money</h3>
                <p className="text-gray-300">Companies keep hiring the wrong people—time, salary, and training costs wasted. Real candidates also lose out due to bad screening and vague interviews.</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">Fake Skills, No Real Test</h3>
                <p className="text-gray-300">Many hires pass interviews but fail on the job. There's no hands-on task or live environment to prove they can actually do the daily work—even with AI tools.</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">Slow, Inefficient Hiring</h3>
                <p className="text-gray-300">Too many rounds, test sheets, and guesswork. No live data, no real output. Hiring managers waste time when they could just watch candidates solve actual tasks.</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">No KPI or Proof of Skill</h3>
                <p className="text-gray-300">Current systems don't track real performance. Without real-time KPIs, logs, and session recordings, it's all talk—no proof.</p>
              </div>
            </div>
          </div>
          
          {/* Slide 2: Solution */}
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-indigo-400">Our Solution</h2>
            <div className="space-y-6">
              <div className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Immersive, Multi-Role Game World</h3>
                <p className="text-gray-300">SimWork places users in a 3D office/map with stations for Developer, Designer, PM, Data Entry, and AI Engineer roles. Trainees navigate to desks equipped with real terminals, virtual notebooks, and design tools to complete authentic tasks.</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-400">AI-Powered Adaptivity & Agents</h3>
                <p className="text-gray-300">Integrated GPT-based agents guide scenarios, perform OCR on designer-submitted assets, and dynamically adjust task complexity. This prevents mis-hires by exposing candidates to true job demands before onboarding.</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Real-Time Analytics & Feedback</h3>
                <p className="text-gray-300">A dashboard tracks KPIs (accuracy, speed, decision quality), generates personalized feedback loops, and offers hiring managers live or recorded sessions—bridging learning and evaluation in one platform.</p>
              </div>
            </div>
          </div>
          
          {/* Slide 3: Market */}
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-indigo-400">Market Opportunity</h2>
            <div className="space-y-6">
              <div className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Target Market</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Corporate Training Departments</li>
                  <li>Educational Institutions</li>
                  <li>Hiring Managers & Recruitment Teams</li>
                </ul>
              </div>
              <div className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Market Size</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Global corporate e-learning market: $250 billion (2023)</li>
                  <li>Simulation-based training market: $17.5 billion (2023)</li>
                  <li>Technical assessment tools market: $5.2 billion (2023)</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Slide 4: Business Model */}
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-indigo-400">Business Model</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Starter Plan: $499/month</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Up to 25 active users</li>
                  <li>3 role simulations</li>
                  <li>Basic analytics</li>
                  <li>Standard quest library</li>
                </ul>
              </div>
              <div className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Professional Plan: $1,499/month</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Up to 100 active users</li>
                  <li>All role simulations</li>
                  <li>Advanced analytics and reporting</li>
                  <li>Custom quest creation</li>
                  <li>API access</li>
                </ul>
              </div>
              <div className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Enterprise Plan: $4,999/month</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Unlimited users</li>
                  <li>Custom role creation</li>
                  <li>White-labeling</li>
                  <li>LMS/ATS integration</li>
                  <li>Dedicated success manager</li>
                </ul>
              </div>
              <div className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Educational Discount</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>40% off all plans</li>
                  <li>For verified educational institutions</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Slide 5: Call to Action */}
          <div className="bg-indigo-900 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Hiring & Training?</h2>
            <p className="text-xl mb-8">Join our early access program and be the first to experience SimWork</p>
            <button className="py-3 px-8 bg-white text-indigo-900 hover:bg-gray-100 rounded-md transition text-lg font-medium">
              Request Early Access
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
