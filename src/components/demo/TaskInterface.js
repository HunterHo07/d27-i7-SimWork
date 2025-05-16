'use client';

import { useState, useEffect } from 'react';

export default function TaskInterface({ stationName }) {
  const [tasks, setTasks] = useState([]);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  
  // Define tasks for each station
  useEffect(() => {
    if (!stationName) {
      setTasks([]);
      setCurrentTaskIndex(0);
      setIsCompleted(false);
      return;
    }
    
    const stationTasks = {
      developer: [
        {
          title: "Fix the Login Bug",
          description: "There's a bug in the login form that prevents users from submitting their credentials. Find and fix the issue in the code.",
          codeSnippet: `function validateForm() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if (username === '') {
    showError('Username is required');
    return false;
  }
  
  if (password = '') {  // Bug: should be === instead of =
    showError('Password is required');
    return false;
  }
  
  return true;
}`,
          difficulty: "Easy"
        },
        {
          title: "Implement User Authentication",
          description: "Create a function that handles user authentication by checking credentials against a database and returning a JWT token.",
          codeSnippet: `async function authenticateUser(username, password) {
  // TODO: Implement user authentication
  // 1. Check if user exists in database
  // 2. Verify password hash
  // 3. Generate JWT token
  // 4. Return token or error
}`,
          difficulty: "Medium"
        },
        {
          title: "Optimize Database Query",
          description: "The current query is causing performance issues. Optimize it to reduce execution time and resource usage.",
          codeSnippet: `function getUsersWithPosts() {
  // Current implementation (slow)
  const users = db.query('SELECT * FROM users');
  
  for (let i = 0; i < users.length; i++) {
    const posts = db.query('SELECT * FROM posts WHERE user_id = ' + users[i].id);
    users[i].posts = posts;
  }
  
  return users;
  
  // TODO: Optimize with JOIN or other techniques
}`,
          difficulty: "Hard"
        }
      ],
      designer: [
        {
          title: "Create App Icon",
          description: "Design a modern, distinctive app icon for SimWork that reflects our brand values of innovation, professionalism, and accessibility.",
          canvas: true,
          difficulty: "Medium"
        },
        {
          title: "Design Login Screen",
          description: "Create a clean, user-friendly login screen with fields for username and password, social login options, and a 'forgot password' link.",
          canvas: true,
          difficulty: "Easy"
        },
        {
          title: "Design Data Visualization",
          description: "Create an intuitive dashboard visualization that displays user performance metrics in an engaging and informative way.",
          canvas: true,
          difficulty: "Hard"
        }
      ],
      pm: [
        {
          title: "Prioritize Feature Backlog",
          description: "Review the product backlog and prioritize the top 5 features for the next sprint based on business value and technical complexity.",
          backlog: [
            { id: "F-101", title: "User Authentication", complexity: "Medium", value: "High" },
            { id: "F-102", title: "Dashboard Redesign", complexity: "High", value: "Medium" },
            { id: "F-103", title: "Performance Optimization", complexity: "High", value: "High" },
            { id: "F-104", title: "Email Notifications", complexity: "Low", value: "Medium" },
            { id: "F-105", title: "Mobile Responsiveness", complexity: "Medium", value: "High" },
            { id: "F-106", title: "Admin Panel", complexity: "High", value: "Medium" },
            { id: "F-107", title: "User Onboarding", complexity: "Medium", value: "High" },
            { id: "F-108", title: "Analytics Integration", complexity: "Low", value: "Low" }
          ],
          difficulty: "Medium"
        },
        {
          title: "Create Sprint Plan",
          description: "Develop a sprint plan for the upcoming two-week sprint, including task assignments, time estimates, and dependencies.",
          difficulty: "Medium"
        },
        {
          title: "Resolve Resource Conflict",
          description: "Two critical projects need the same developer resources. Develop a solution that addresses both project needs while minimizing delays.",
          difficulty: "Hard"
        }
      ],
      data: [
        {
          title: "Process Customer Records",
          description: "Enter the following customer information into the database, ensuring all fields are correctly formatted and validated.",
          records: [
            { name: "John Smith", email: "john.smith@example.com", phone: "555-123-4567", plan: "Professional", startDate: "2023-06-15" },
            { name: "Sarah Johnson", email: "sarah.j@example.com", phone: "555-987-6543", plan: "Enterprise", startDate: "2023-05-22" },
            { name: "Michael Chen", email: "mchen@example.com", phone: "555-456-7890", plan: "Starter", startDate: "2023-07-03" }
          ],
          difficulty: "Easy"
        },
        {
          title: "Clean and Format Dataset",
          description: "Clean the provided dataset by removing duplicates, fixing formatting issues, and standardizing values.",
          difficulty: "Medium"
        },
        {
          title: "Generate Monthly Report",
          description: "Using the provided data, generate a monthly sales report with key metrics and visualizations.",
          difficulty: "Hard"
        }
      ],
      ai: [
        {
          title: "Optimize AI Prompt",
          description: "Improve the following prompt to generate more accurate and relevant product descriptions.",
          prompt: "Write a product description for a smartphone.",
          difficulty: "Easy"
        },
        {
          title: "Design Conversation Flow",
          description: "Create a conversation flow for a customer service chatbot that handles common support inquiries.",
          difficulty: "Medium"
        },
        {
          title: "Implement Sentiment Analysis",
          description: "Design a prompt that accurately analyzes the sentiment of customer feedback and categorizes it as positive, negative, or neutral.",
          difficulty: "Hard"
        }
      ]
    };
    
    setTasks(stationTasks[stationName] || []);
    setCurrentTaskIndex(0);
    setIsCompleted(false);
  }, [stationName]);
  
  const currentTask = tasks[currentTaskIndex] || null;
  
  const handlePreviousTask = () => {
    if (currentTaskIndex > 0) {
      setCurrentTaskIndex(currentTaskIndex - 1);
    }
  };
  
  const handleNextTask = () => {
    if (currentTaskIndex < tasks.length - 1) {
      setCurrentTaskIndex(currentTaskIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };
  
  const handleCompleteTask = () => {
    // In a real implementation, this would validate the task completion
    handleNextTask();
  };
  
  if (!stationName || tasks.length === 0) {
    return (
      <div className="h-full flex items-center justify-center bg-slate-800 rounded-lg p-6">
        <p className="text-gray-400">Select a station to view available tasks</p>
      </div>
    );
  }
  
  if (isCompleted) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-slate-800 rounded-lg p-6">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">All Tasks Completed!</h3>
        <p className="text-gray-400 mb-6 text-center">You've completed all tasks for this station. Great job!</p>
        <button 
          onClick={() => {
            setCurrentTaskIndex(0);
            setIsCompleted(false);
          }}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Restart Tasks
        </button>
      </div>
    );
  }
  
  return (
    <div className="h-full flex flex-col bg-slate-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white">
          {stationName === 'developer' && 'Developer Tasks'}
          {stationName === 'designer' && 'Design Tasks'}
          {stationName === 'pm' && 'Project Management Tasks'}
          {stationName === 'data' && 'Data Entry Tasks'}
          {stationName === 'ai' && 'AI Engineering Tasks'}
        </h3>
        <div className="bg-indigo-900 px-3 py-1 rounded-full text-xs text-indigo-300">
          Task {currentTaskIndex + 1} of {tasks.length}
        </div>
      </div>
      
      <div className="bg-slate-900 rounded-lg p-4 mb-4 flex-1 overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-lg font-semibold text-white">{currentTask.title}</h4>
          <span className={`text-xs px-2 py-1 rounded-full ${
            currentTask.difficulty === 'Easy' ? 'bg-green-900 text-green-300' :
            currentTask.difficulty === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
            'bg-red-900 text-red-300'
          }`}>
            {currentTask.difficulty}
          </span>
        </div>
        
        <p className="text-gray-300 mb-6">{currentTask.description}</p>
        
        {currentTask.codeSnippet && (
          <div className="bg-slate-950 rounded-md p-4 mb-4 font-mono text-sm text-gray-300 overflow-x-auto">
            <pre>{currentTask.codeSnippet}</pre>
          </div>
        )}
        
        {currentTask.canvas && (
          <div className="bg-white rounded-md h-40 mb-4 flex items-center justify-center">
            <p className="text-gray-400">Design Canvas (Click to interact)</p>
          </div>
        )}
        
        {currentTask.backlog && (
          <div className="bg-slate-950 rounded-md p-4 mb-4 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-400 uppercase">
                <tr>
                  <th className="px-3 py-2">ID</th>
                  <th className="px-3 py-2">Feature</th>
                  <th className="px-3 py-2">Complexity</th>
                  <th className="px-3 py-2">Value</th>
                  <th className="px-3 py-2">Priority</th>
                </tr>
              </thead>
              <tbody>
                {currentTask.backlog.map((item) => (
                  <tr key={item.id} className="border-t border-slate-800">
                    <td className="px-3 py-2 text-indigo-400">{item.id}</td>
                    <td className="px-3 py-2 text-gray-300">{item.title}</td>
                    <td className="px-3 py-2 text-gray-300">{item.complexity}</td>
                    <td className="px-3 py-2 text-gray-300">{item.value}</td>
                    <td className="px-3 py-2">
                      <select className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-gray-300 text-xs">
                        <option value="">Select...</option>
                        <option value="1">1 (Highest)</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 (Lowest)</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {currentTask.records && (
          <div className="bg-slate-950 rounded-md p-4 mb-4 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-400 uppercase">
                <tr>
                  <th className="px-3 py-2">Name</th>
                  <th className="px-3 py-2">Email</th>
                  <th className="px-3 py-2">Phone</th>
                  <th className="px-3 py-2">Plan</th>
                  <th className="px-3 py-2">Start Date</th>
                </tr>
              </thead>
              <tbody>
                {currentTask.records.map((record, index) => (
                  <tr key={index} className="border-t border-slate-800">
                    <td className="px-3 py-2 text-gray-300">{record.name}</td>
                    <td className="px-3 py-2 text-gray-300">{record.email}</td>
                    <td className="px-3 py-2 text-gray-300">{record.phone}</td>
                    <td className="px-3 py-2 text-gray-300">{record.plan}</td>
                    <td className="px-3 py-2 text-gray-300">{record.startDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {currentTask.prompt && (
          <div className="bg-slate-950 rounded-md p-4 mb-4">
            <div className="text-xs text-gray-400 mb-2">Current Prompt:</div>
            <div className="bg-slate-900 p-3 rounded border border-slate-700 text-gray-300 mb-4">
              {currentTask.prompt}
            </div>
            <div className="text-xs text-gray-400 mb-2">Your Improved Prompt:</div>
            <textarea 
              className="w-full bg-slate-900 p-3 rounded border border-slate-700 text-gray-300 h-24"
              placeholder="Write your improved prompt here..."
            ></textarea>
          </div>
        )}
      </div>
      
      <div className="flex justify-between">
        <button 
          onClick={handlePreviousTask}
          disabled={currentTaskIndex === 0}
          className={`py-2 px-4 rounded-md transition-colors ${
            currentTaskIndex === 0
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-gray-700 hover:bg-gray-600 text-white'
          }`}
        >
          Previous Task
        </button>
        
        <button 
          onClick={handleCompleteTask}
          className="py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
        >
          Complete Task
        </button>
        
        <button 
          onClick={handleNextTask}
          disabled={currentTaskIndex === tasks.length - 1}
          className={`py-2 px-4 rounded-md transition-colors ${
            currentTaskIndex === tasks.length - 1
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
        >
          Next Task
        </button>
      </div>
    </div>
  );
}
