import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PaperAirplaneIcon } from './icons/Icons';
import AnimatedSection from './AnimatedSection';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonPath?: string;
}

const CTABanner: React.FC<CTABannerProps> = ({
  title = "Ready to start your project?",
  subtitle = "Let's work together to bring your ideas to life. Contact us today for a free consultation.",
  primaryButtonText = "Contact Us",
  primaryButtonPath = "/contact",
}) => {
  const navigate = useNavigate();

  return (
    <AnimatedSection>
      <div className="bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 overflow-hidden">
             <div className="absolute -bottom-16 -right-12 w-48 h-48 bg-white/10 rounded-full animate-spin-slow" aria-hidden="true"></div>
             <div className="absolute -top-12 -left-16 w-40 h-40 bg-white/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} aria-hidden="true"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-extrabold text-white tracking-tight">{title}</h2>
              <p className="mt-2 text-blue-100 max-w-2xl mx-auto">{subtitle}</p>
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => navigate(primaryButtonPath)}
                  className="group inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-blue-600 bg-white rounded-xl shadow-lg hover:bg-slate-100 transition-all duration-200 transform hover:scale-105"
                >
                  {primaryButtonText} <PaperAirplaneIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CTABanner;