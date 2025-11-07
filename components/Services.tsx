import React from 'react';
import { ShieldCheckIcon, ChatBubbleLeftRightIcon } from './icons/Icons';

const serviceItems = [
    {
        icon: <ShieldCheckIcon className="h-8 w-8 text-blue-500" />,
        title: "High Quality Services",
        description: "We provide top-tier, non-drop services with lifetime refills to ensure your social proof is stable and long-lasting."
    },
    {
        icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-500" />,
        title: "24/7 Dedicated Support",
        description: "Our expert team is always available. With live chat and an integrated ticket system, we're here to help you succeed."
    }
];

const Services: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 pb-2">
              Everything You Need to Succeed
            </h2>
            <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
              We've built our platform with a focus on quality, reliability, and unparalleled customer support.
            </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceItems.map(item => (
                <div key={item.title} className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200/80 dark:border-slate-700/50 shadow-lg shadow-blue-500/5">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/40">
                        {item.icon}
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-slate-100">{item.title}</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;