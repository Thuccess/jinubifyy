import React from 'react';
import { Link } from 'react-router-dom';
import { TwitterIcon, InstagramIcon, TikTokIcon, FacebookIcon } from './icons/Socials';
import { PaperAirplaneIcon } from './icons/Icons';

const Logo: React.FC = () => (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
      </div>
      <span className="font-bold text-xl text-white">Jinubify</span>
    </div>
  );

const Footer: React.FC = () => {
    const socialLinks = [
        { name: 'Twitter', href: '#', icon: <TwitterIcon className="w-6 h-6" /> },
        { name: 'Instagram', href: '#', icon: <InstagramIcon className="w-6 h-6" /> },
        { name: 'TikTok', href: '#', icon: <TikTokIcon className="w-6 h-6" /> },
        { name: 'Facebook', href: '#', icon: <FacebookIcon className="w-6 h-6" /> },
    ];

    const footerLinks = {
        'Navigation': [
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: 'Blog', path: '/blog' },
        ],
        'Company': [
            { name: 'Contact Us', path: '/contact' },
            { name: 'FAQ', path: '/#faq' }, 
        ],
        'Legal': [
            { name: 'Privacy Policy', path: '#' }, 
            { name: 'Terms of Service', path: '#' },
        ],
    };

    return (
        <footer className="bg-slate-900 dark:bg-black">
             <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* CTA Section */}
                <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 overflow-hidden">
                     <div className="absolute -bottom-16 -right-12 w-48 h-48 bg-white/10 rounded-full animate-spin-slow" aria-hidden="true"></div>
                     <div className="absolute -top-12 -left-16 w-40 h-40 bg-white/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} aria-hidden="true"></div>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                        <div>
                            <h2 className="text-3xl font-extrabold text-white tracking-tight">Ready to Amplify Your Presence?</h2>
                            <p className="mt-2 text-blue-100 max-w-2xl">
                                Join Jinubify today and start your journey towards unparalleled social media growth.
                            </p>
                        </div>
                        <Link
                            to="/contact"
                            className="mt-6 md:mt-0 flex-shrink-0 group inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-blue-600 bg-white rounded-xl shadow-lg hover:bg-slate-100 transition-all duration-200 transform hover:scale-105"
                        >
                            Get Started Free <PaperAirplaneIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* Main Footer */}
                <div className="mt-16 xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <Logo />
                        <p className="text-slate-400 text-base">
                            Modern solutions for your business needs.
                        </p>
                        <div className="flex space-x-6">
                            {socialLinks.map((item) => (
                                <a key={item.name} href={item.href} className="text-slate-400 hover:text-white transition transform hover:scale-110" aria-label={`Visit Jinubify on ${item.name}`}>
                                    <span className="sr-only">{item.name}</span>
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2 md:grid-cols-3">
                        <div>
                            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">Navigation</h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {footerLinks.Navigation.map((item) => (
                                    <li key={item.name}>
                                        <Link to={item.path} className="text-base text-slate-400 hover:text-white transition-all duration-200 hover:pl-1">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">Company</h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {footerLinks.Company.map((item) => (
                                    <li key={item.name}>
                                        <Link to={item.path} className="text-base text-slate-400 hover:text-white transition-all duration-200 hover:pl-1">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">Legal</h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {footerLinks.Legal.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.path} className="text-base text-slate-400 hover:text-white transition-all duration-200 hover:pl-1">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-700/50 pt-8">
                    <p className="text-base text-slate-400 xl:text-center">&copy; {new Date().getFullYear()} Jinubify, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;