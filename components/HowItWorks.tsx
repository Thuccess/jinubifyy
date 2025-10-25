import React from 'react';
import { HowItWorksIcon1, HowItWorksIcon2, HowItWorksIcon3 } from './icons/Icons';


const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <HowItWorksIcon1 />,
      title: 'Signup for free!',
      description: 'Get a 100% free account'
    },
    {
      icon: <HowItWorksIcon2 />,
      title: 'Find Your Service',
      description: 'Browse our extensive list'
    },
    {
      icon: <HowItWorksIcon3 />,
      title: 'Select & Order!',
      description: 'See results instantly'
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 rounded-full px-3 py-1 text-sm font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            How it works?
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 pb-2">
            Launch Your Social Growth in 3 Steps
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400">
            Go from zero to hero with our streamlined, powerful SMM platform.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {steps.map((step, index) => (
            <div key={index} className="group flex items-center space-x-4 p-6 bg-white dark:bg-slate-800 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:bg-white dark:hover:bg-slate-800 hover:-translate-y-2 border border-slate-200/80 dark:border-slate-700/50">
              <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]">
                {step.icon}
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{step.title}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;