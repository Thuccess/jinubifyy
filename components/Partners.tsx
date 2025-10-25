import React from 'react';
import { YouTubeIcon, TwitterIcon, InstagramIcon, TikTokIcon, FacebookIcon } from './icons/Socials';

const partners = [
    { name: 'YouTube', icon: <YouTubeIcon className="h-8 w-auto" />, href: '#' },
    { name: 'Twitter', icon: <TwitterIcon className="h-8 w-auto" />, href: '#' },
    { name: 'Instagram', icon: <InstagramIcon className="h-8 w-auto" />, href: '#' },
    { name: 'TikTok', icon: <TikTokIcon className="h-8 w-auto" />, href: '#' },
    { name: 'Facebook', icon: <FacebookIcon className="h-8 w-auto" />, href: '#' },
]

const Partners: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-sm font-semibold text-slate-600 dark:text-slate-400 tracking-wider uppercase">
                Trusted by the world's leading platforms
            </h2>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-12 items-center">
               {partners.map((partner) => (
                    <a 
                        key={partner.name}
                        href={partner.href} 
                        className="flex justify-center text-slate-500 dark:text-slate-500 grayscale hover:grayscale-0 hover:text-slate-800 dark:hover:text-white transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit our partner ${partner.name}`}
                    >
                        {partner.icon}
                    </a>
               ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;