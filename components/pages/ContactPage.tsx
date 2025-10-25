import React, { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import { TwitterIcon, InstagramIcon, FacebookIcon, TikTokIcon } from '../icons/Socials';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '../icons/Icons';

// --- Subcomponents ---

const PageHeader: React.FC = () => (
    <div className="relative isolate overflow-hidden bg-white dark:bg-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className="mx-auto max-w-2xl">
                <p className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Get In Touch</p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                    Let's Build Something Great
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                    Have a question, a project idea, or just want to say hello? We'd love to hear from you.
                </p>
            </div>
        </div>
    </div>
);


const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            if (Math.random() > 0.2) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
            setTimeout(() => setStatus('idle'), 5000); // Reset status after 5 seconds
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                    <input type="text" name="name" id="name" required className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm hover:border-slate-400 dark:hover:border-slate-500 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-900 transition-all" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                    <input type="email" name="email" id="email" required className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm hover:border-slate-400 dark:hover:border-slate-500 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-900 transition-all" />
                </div>
            </div>
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                <input type="text" name="subject" id="subject" required className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm hover:border-slate-400 dark:hover:border-slate-500 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-900 transition-all" />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                <textarea id="message" name="message" rows={5} required className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm hover:border-slate-400 dark:hover:border-slate-500 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-900 transition-all"></textarea>
            </div>
            <div>
                <button type="submit" disabled={status === 'submitting'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all transform hover:scale-105">
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
            </div>
            <div role="status" aria-live="polite" className="h-5">
                {status === 'success' && <p className="text-sm text-center text-green-600 dark:text-green-400">Message sent successfully! We'll be in touch soon.</p>}
                {status === 'error' && <p className="text-sm text-center text-red-600 dark:text-red-400">Something went wrong. Please try again later.</p>}
            </div>
        </form>
    );
};

const InfoItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/40 rounded-lg">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
            <div className="mt-1 text-slate-600 dark:text-slate-400">{children}</div>
        </div>
    </div>
);

// --- Main Contact Page Component ---

const ContactPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader />
      
      <div className="py-16 sm:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl shadow-2xl shadow-blue-500/5 border border-slate-200/80 dark:border-slate-700/50 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Contact Form */}
                        <div className="p-8 sm:p-12">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Send us a Message</h2>
                            <p className="mt-2 text-slate-600 dark:text-slate-400">Fill out the form and our team will get back to you within 24 hours.</p>
                            <div className="mt-8">
                                <ContactForm />
                            </div>
                        </div>
                        
                        {/* Contact Info */}
                         <div className="bg-slate-100 dark:bg-slate-800 p-8 sm:p-12 space-y-8">
                            <InfoItem icon={<MapPinIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" /> } title="Our Office">
                                <p>123 Innovation Drive, Suite 100<br/>Tech City, TX 12345, USA</p>
                            </InfoItem>

                            <InfoItem icon={<EnvelopeIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" /> } title="Email Us">
                                <a href="mailto:contact@jinubify.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">contact@jinubify.com</a>
                            </InfoItem>

                            <InfoItem icon={<PhoneIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" /> } title="Call Us">
                                <a href="tel:+1234567890" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+1 (234) 567-890</a>
                            </InfoItem>
                            
                            <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Follow Us</h3>
                                <div className="mt-4 flex space-x-6">
                                    <a href="#" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition transform hover:scale-110" aria-label="Follow us on Twitter"><TwitterIcon className="w-6 h-6"/></a>
                                    <a href="#" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition transform hover:scale-110" aria-label="Follow us on Instagram"><InstagramIcon className="w-6 h-6"/></a>
                                    <a href="#" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition transform hover:scale-110" aria-label="Follow us on Facebook"><FacebookIcon className="w-6 h-6"/></a>
                                    <a href="#" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition transform hover:scale-110" aria-label="Follow us on TikTok"><TikTokIcon className="w-6 h-6"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;