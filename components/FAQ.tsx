import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from './icons/Icons';

const faqData = [
  {
    question: 'What makes your services high-quality?',
    answer:
      'We use a combination of AI-powered analytics and real user networks to ensure that the engagement you receive is from authentic-looking profiles, relevant to your niche. This helps maintain your account\'s credibility while boosting its visibility.',
  },
  {
    question: 'Are the followers and likes from real people?',
    answer:
      'Our services provide followers and engagement from high-quality profiles that appear authentic. While they are primarily for social proof, they are designed to be indistinguishable from real users to protect and enhance your online reputation.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Results are often visible within minutes of placing an order. Our system is designed for rapid delivery, so you can see your social proof increase almost instantly. For larger orders, we may drip-feed the engagement to ensure it looks natural.',
  },
  {
    question: 'Is using SMM Spot safe for my social media accounts?',
    answer:
      'Absolutely. We prioritize your account\'s safety. Our methods comply with the terms of service of all major social media platforms. We never ask for your password, and our processes are designed to be discreet and secure.',
  },
  {
    question: 'What happens if my follower or like count drops?',
    answer:
      'We stand by the quality of our services. Many of our services come with a "Non-drop" guarantee and lifetime refills. If you experience a drop in numbers, our 24/7 support team is here to help and will refill your order free of charge.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
           <div className="inline-flex items-center bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 rounded-full px-3 py-1 text-sm font-semibold">
            Got Questions?
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 pb-2">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400">
            Find answers to common questions about our services. If you don't find what you're looking for, feel free to contact our support team.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className={`bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-lg shadow-blue-500/5' : ''}`}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-4 sm:p-6 focus:outline-none hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className="text-md font-semibold text-slate-800 dark:text-slate-100">{faq.question}</span>
                  <span className="ml-6 flex-shrink-0">
                    {openIndex === index ? (
                      <MinusIcon className="h-5 w-5 text-blue-500" />
                    ) : (
                      <PlusIcon className="h-5 w-5 text-slate-400 dark:text-slate-500" strokeWidth={2} />
                    )}
                  </span>
                </button>
                <div 
                  id={`faq-content-${index}`}
                  className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-slate-600 dark:text-slate-400 text-sm">
                        {faq.answer}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;