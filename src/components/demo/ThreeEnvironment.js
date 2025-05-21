'use client';

import { useEffect, useRef, useState } from 'react';
import { ThreeScene } from '@/lib/three-scene';

export default function ThreeEnvironment({ onStationSelect }) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentStation, setCurrentStation] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Three.js scene
    sceneRef.current = new ThreeScene(containerRef.current);

    // Set up station interaction callback
    sceneRef.current.onStationInteract = (stationName) => {
      setCurrentStation(stationName);
      if (onStationSelect) {
        onStationSelect(stationName);
      }
    };

    // Initialize scene
    sceneRef.current.init();

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Cleanup function
    return () => {
      clearTimeout(timer);

      // Make sure to properly clean up the Three.js scene
      if (sceneRef.current && sceneRef.current.isInitialized) {
        try {
          sceneRef.current.cleanup();
        } catch (error) {
          console.error("Error during Three.js cleanup:", error);
        }
      }

      // Clear the reference
      sceneRef.current = null;
    };
  }, [onStationSelect]);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-10">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-indigo-400 text-lg">Loading Simulation...</p>
          </div>
        </div>
      )}

      <div
        ref={containerRef}
        className="w-full h-full bg-slate-900 rounded-lg overflow-hidden"
      ></div>

      {currentStation && !isLoading && (
        <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-md border border-indigo-500/30">
          <div className="text-sm font-medium text-white">
            {currentStation === 'developer' && 'Developer Bay'}
            {currentStation === 'designer' && 'Design Lab'}
            {currentStation === 'pm' && 'Project Management Hub'}
            {currentStation === 'data' && 'Data Entry Station'}
            {currentStation === 'ai' && 'AI Engineer Station'}
          </div>
        </div>
      )}

      {!isLoading && (
        <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-md border border-indigo-500/30 text-xs text-gray-300">
          Click to move character • Click on stations to interact
        </div>
      )}
    </div>
  );
}
