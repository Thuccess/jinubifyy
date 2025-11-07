import React from 'react';
import { PaperAirplaneIcon, CheckIcon } from './icons/Icons';

const features = [
    { name: 'AI-Powered Optimization' },
    { name: 'Real-time Analytics Dashboard' },
    { name: 'Automated Campaign Management' },
    { name: 'Dedicated 24/7 Support' },
];

const FeaturePanel: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl shadow-2xl shadow-blue-500/5 border border-slate-200/80 dark:border-slate-700/50 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 rounded-full px-3 py-1 text-sm font-semibold">
              Get started for free!
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 pb-2">
              Automate Your Success with AI-Powered Management.
            </h2>
            <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
              Our intelligent platform analyzes trends and optimizes your campaigns, so you can focus on creating, not managing. Stop guessing and start growing with data-driven precision.
            </p>
            <button className="mt-8 group inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/40 transition-all transform hover:scale-105">
              Signup Now <PaperAirplaneIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-lg">
                <ul className="space-y-4">
                    {features.map((feature) => (
                        <li key={feature.name} className="group flex items-center p-2 rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-slate-700/50">
                            <CheckIcon className="h-5 w-5 text-blue-500" />
                            <span className="ml-3 text-base font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">{feature.name}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                    <p className="text-sm text-slate-600 dark:text-slate-400">"Using Jinubify's automation has saved us over 10 hours a week, allowing us to focus on creative strategy."</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-2">- Alex, Marketing Director</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePanel;