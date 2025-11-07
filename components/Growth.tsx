import React from 'react';
import { PaperAirplaneIcon } from './icons/Icons';

const Growth: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-16 overflow-hidden border border-slate-200/80 dark:border-slate-700/50 shadow-xl shadow-blue-500/5">
            <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <img loading="lazy" src="https://picsum.photos/seed/face1/48/48" alt="Happy customer SovaRiver" className="absolute top-12 left-8 w-12 h-12 rounded-full shadow-lg border-2 border-white dark:border-slate-800" />
            <img loading="lazy" src="https://picsum.photos/seed/face2/48/48" alt="Happy customer Sidanbrook" className="absolute top-20 right-8 w-12 h-12 rounded-full shadow-lg border-2 border-white dark:border-slate-800" />
            <img loading="lazy" src="https://picsum.photos/seed/face3/48/48" alt="Happy customer" className="absolute bottom-16 left-24 w-10 h-10 rounded-full shadow-lg border-2 border-white dark:border-slate-800" />
            <img loading="lazy" src="https://picsum.photos/seed/face4/48/48" alt="Happy customer" className="absolute bottom-24 right-16 w-14 h-14 rounded-full shadow-lg border-2 border-white dark:border-slate-800" />

            <div className="text-center relative">
                <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/50 rounded-full p-2 text-sm font-semibold shadow">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <span className="mx-3 text-slate-700 dark:text-slate-200">Get Seen Globally</span>
                </div>

                <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 pb-2">
                    Expand Your Reach Across the Globe 🌎
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                    Whether you're targeting a local community or a global audience, our platform provides the traction you need to get noticed by the right people, anywhere in the world.
                </p>
                <button className="mt-8 group inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/40 transition-all transform hover:scale-105">
                    Explore Services <PaperAirplaneIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;