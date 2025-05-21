'use client';

import { useState } from 'react';
import ThreeEnvironment from '@/components/demo/ThreeEnvironment';
import TaskInterface from '@/components/demo/TaskInterface';

export default function DemoPage() {
  const [selectedStation, setSelectedStation] = useState(null);
  const [metrics, setMetrics] = useState({
    accuracy: 0,
    speed: 0,
    decisionQuality: 0
  });

  // Handle station selection from the 3D environment
  const handleStationSelect = (stationName) => {
    setSelectedStation(stationName);

    // Update metrics based on station (simulated data)
    setMetrics({
      accuracy: Math.floor(Math.random() * 100),
      speed: Math.floor(Math.random() * 100),
      decisionQuality: Math.floor(Math.random() * 100)
    });
  };

  // Get station display name
  const getStationDisplayName = (name) => {
    switch (name) {
      case 'developer': return 'Developer Bay';
      case 'designer': return 'Design Lab';
      case 'pm': return 'Project Management Hub';
      case 'data': return 'Data Entry Station';
      case 'ai': return 'AI Engineer Station';
      default: return 'Select a Station';
    }
  };

  // Get station color class
  const getStationColorClass = (name) => {
    switch (name) {
      case 'developer': return 'bg-indigo-600 hover:bg-indigo-700';
      case 'designer': return 'bg-pink-600 hover:bg-pink-700';
      case 'pm': return 'bg-blue-600 hover:bg-blue-700';
      case 'data': return 'bg-green-600 hover:bg-green-700';
      case 'ai': return 'bg-purple-600 hover:bg-purple-700';
      default: return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">SimWork Demo</h1>
        <p className="text-xl text-center mb-12">
          Experience the future of work simulation. Navigate the office environment and complete tasks at different stations.
        </p>

        {/* 3D Environment */}
        <div className="w-full h-[600px] bg-slate-800 rounded-lg mb-8 overflow-hidden">
          <ThreeEnvironment onStationSelect={handleStationSelect} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Station Selection */}
          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">Select Your Station</h2>
            <div className="space-y-4">
              {['developer', 'designer', 'pm', 'data', 'ai'].map((station) => (
                <button
                  key={station}
                  onClick={() => handleStationSelect(station)}
                  className={`w-full py-3 px-4 rounded-md transition ${
                    selectedStation === station
                      ? `${getStationColorClass(station)} ring-2 ring-white`
                      : getStationColorClass(station)
                  }`}
                >
                  {getStationDisplayName(station)}
                </button>
              ))}
            </div>
          </div>

          {/* Task Interface */}
          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">
              {selectedStation ? `Tasks: ${getStationDisplayName(selectedStation)}` : 'Current Tasks'}
            </h2>
            <div className="h-80">
              <TaskInterface stationName={selectedStation} />
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-400">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900 p-4 rounded-md">
              <h3 className="text-lg font-medium mb-2">Accuracy</h3>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div
                  className="bg-green-500 h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${metrics.accuracy}%` }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-400">
                {metrics.accuracy > 0 ? `${metrics.accuracy}%` : 'No data available'}
              </p>
            </div>
            <div className="bg-slate-900 p-4 rounded-md">
              <h3 className="text-lg font-medium mb-2">Speed</h3>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div
                  className="bg-blue-500 h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${metrics.speed}%` }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-400">
                {metrics.speed > 0 ? `${metrics.speed}%` : 'No data available'}
              </p>
            </div>
            <div className="bg-slate-900 p-4 rounded-md">
              <h3 className="text-lg font-medium mb-2">Decision Quality</h3>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div
                  className="bg-purple-500 h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${metrics.decisionQuality}%` }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-400">
                {metrics.decisionQuality > 0 ? `${metrics.decisionQuality}%` : 'No data available'}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            onClick={() => {
              // Select a random station to simulate starting a full simulation
              const stations = ['developer', 'designer', 'pm', 'data', 'ai'];
              const randomStation = stations[Math.floor(Math.random() * stations.length)];
              handleStationSelect(randomStation);

              // Show a success message
              alert('Full simulation started! You have been assigned to the ' + getStationDisplayName(randomStation) + '.');
            }}
            className="py-3 px-8 bg-indigo-600 hover:bg-indigo-700 rounded-md transition text-lg font-medium"
          >
            Start Full Simulation
          </button>
        </div>
      </div>
    </main>
  );
}
