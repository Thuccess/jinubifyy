
import React, { useState, useEffect, useRef } from 'react';
import AnimatedSection from '../AnimatedSection';
import { TwitterIcon, InstagramIcon } from '../icons/Socials';
import { SparklesIcon, HeartIcon, BriefcaseIcon, LightBulbIcon, ShieldCheckIcon } from '../icons/Icons';
import CTABanner from '../CTABanner';

// --- Data for the page ---
const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'CEO & Founder',
    imageUrl: 'https://picsum.photos/seed/jane/400/400',
    bio: 'Jane is a visionary leader with over 15 years of experience driving innovation in the tech industry.',
    social: { twitter: '#', instagram: '#' },
  },
  {
    name: 'John Smith',
    role: 'Chief Technology Officer',
    imageUrl: 'https://picsum.photos/seed/john/400/400',
    bio: 'John is the architectural mastermind behind our platform, ensuring scalability and security.',
    social: { twitter: '#', instagram: '#' },
  },
  {
    name: 'Emily Jones',
    role: 'Lead Designer',
    imageUrl: 'https://picsum.photos/seed/emily/400/400',
    bio: 'Emily crafts beautiful and intuitive user experiences that delight our customers.',
    social: { twitter: '#', instagram: '#' },
  },
   {
    name: 'Michael Brown',
    role: 'Head of Marketing',
    imageUrl: 'https://picsum.photos/seed/michael/400/400',
    bio: 'Michael tells our story to the world, building a community of passionate users.',
    social: { twitter: '#', instagram: '#' },
  },
];

const differentiators = [
    {
      icon: <BriefcaseIcon className="h-8 w-8 text-blue-500" />,
      title: 'Proven Expertise',
      description: 'Our team brings years of industry experience, ensuring every project is guided by deep knowledge and strategic insight.'
    },
    {
      icon: <LightBulbIcon className="h-8 w-8 text-blue-500" />,
      title: 'Relentless Innovation',
      description: 'We are committed to leveraging cutting-edge technology and creative thinking to deliver innovative, future-proof solutions.'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-blue-500" />,
      title: 'Client-Centric Success',
      description: 'Your success is our ultimate metric. We build lasting partnerships focused on delivering measurable results and tangible value.'
    }
];

const coreValues = [
    {
      icon: <SparklesIcon className="h-8 w-8 text-blue-500" />,
      title: 'Innovation at Heart',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge, creative solutions.'
    },
    {
      icon: <HeartIcon className="h-8 w-8 text-blue-500" />,
      title: 'Customer-Centric',
      description: 'Our clients are our partners. We are deeply committed to understanding and achieving their goals.'
    },
    {
      icon: <BriefcaseIcon className="h-8 w-8 text-blue-500" />,
      title: 'Unwavering Excellence',
      description: 'We uphold the highest standards of quality and professionalism in everything we do.'
    }
];

const stats = [
    { value: 150, label: 'Projects Completed' },
    { value: 95, label: 'Happy Clients (%)' },
    { value: 10, label: 'Years of Experience' },
    { value: 4, label: 'Team Members' }
];

// --- Custom Hooks ---
const useCountUp = (ref: React.RefObject<HTMLElement>, end: number, duration = 2000) => {
    const [count, setCount] = useState(0);
    
    const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const startTime = performance.now();
                    
                    const animateCount = (timestamp: number) => {
                        const elapsedTime = timestamp - startTime;
                        const progress = Math.min(elapsedTime / duration, 1);
                        const easedProgress = easeOutCubic(progress);

                        const currentNum = Math.floor(easedProgress * (end - start) + start);
                        setCount(currentNum);
                        
                        if (progress < 1) {
                            requestAnimationFrame(animateCount);
                        } else {
                            setCount(end);
                        }
                    };
                    requestAnimationFrame(animateCount);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, end, duration]);

    return count;
};


// --- Subcomponents ---

const AboutHero: React.FC = () => (
    <div className="relative isolate overflow-hidden bg-white dark:bg-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className="mx-auto max-w-2xl">
                <p className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Our Mission</p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                    Pioneering Digital Excellence
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                    We are a passionate team dedicated to building innovative solutions that empower businesses and individuals to achieve their goals in an ever-evolving digital world.
                </p>
            </div>
        </div>
    </div>
);

const StatCard: React.FC<{ value: number; label: string }> = ({ value, label }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const count = useCountUp(ref, value);
    
    return (
        <div className="flex flex-col items-center">
            <span ref={ref} className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
                {count}{label.includes('%') && '%'}
            </span>
            <span className="mt-1 text-base text-slate-500 dark:text-slate-400">{label.replace(' (%)', '')}</span>
        </div>
    );
};

const ValueCard: React.FC<typeof coreValues[0]> = ({ icon, title, description }) => (
    <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/50 transition-all duration-300 shadow-lg shadow-slate-500/5 hover:-translate-y-2">
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/40">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-slate-100">{title}</h3>
      <p className="mt-2 text-slate-600 dark:text-slate-400">{description}</p>
    </div>
);

const TeamMemberCard: React.FC<typeof teamMembers[0]> = ({ name, role, imageUrl, bio, social }) => (
    <div className="group relative text-center overflow-hidden rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
      <img loading="lazy" className="object-cover w-full h-96 transition-transform duration-500 ease-in-out group-hover:scale-110" src={imageUrl} alt={`Headshot of ${name}, ${role}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-colors duration-300 group-hover:from-black/90"></div>
      
      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end overflow-hidden">
        <div className="transform transition-transform duration-300 ease-in-out group-hover:-translate-y-24">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-sm text-blue-300">{role}</p>
        </div>
        <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300 ease-in-out delay-100">
          <p className="text-slate-200 text-sm mt-2">{bio}</p>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <a href={social.twitter} className="text-slate-300 hover:text-blue-400 transition-colors" aria-label={`${name}'s Twitter profile`}>
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a href={social.instagram} className="text-slate-300 hover:text-blue-400 transition-colors" aria-label={`${name}'s Instagram profile`}>
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );


// --- Main About Page Component ---

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <AboutHero />

      <main>
        {/* Our Story Section */}
        <div className="py-16 sm:py-24 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                        <div className="relative">
                            <div className="absolute -left-8 -top-8 w-48 h-48 bg-blue-50 dark:bg-slate-800 rounded-full blur-3xl"></div>
                            <img loading="lazy" className="rounded-2xl shadow-xl relative" src="https://picsum.photos/seed/office/600/400" alt="A modern and collaborative office space" />
                        </div>
                        <div className="mt-12 lg:mt-0">
                            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 sm:text-4xl">
                                Our Story: From a Simple Idea to a Digital Powerhouse
                            </h2>
                            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                                Founded in 2024, Jinubify was born from a desire to bridge the gap between technology and user experience. We believe that powerful tools should be accessible to everyone, and our mission is to create software that is not only functional but also a joy to use.
                            </p>
                            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                                Our team of developers, designers, and strategists works collaboratively to bring cutting-edge ideas to life, pushing the boundaries of what's possible in the digital landscape.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>

        {/* By The Numbers Section */}
        <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 sm:text-4xl">
                            By The Numbers
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
                            Our track record speaks for itself. We are proud of the work we've done and the results we've delivered.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
                       {stats.map(stat => <StatCard key={stat.label} value={stat.value} label={stat.label} />)}
                    </div>
                </AnimatedSection>
            </div>
        </div>

        {/* Why Choose Jinubify? Section */}
        <div className="py-16 sm:py-24 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 sm:text-4xl">
                            Why Choose Jinubify?
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
                            We blend expertise with a passion for innovation to deliver unparalleled results for our clients.
                        </p>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {differentiators.map((item) => (
                               <ValueCard key={item.title} {...item} />
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>

        {/* Our Core Values Section */}
         <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 sm:text-4xl">
                        Our Core Values
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
                        The principles that guide our work and define our company culture.
                    </p>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {coreValues.map((item) => (
                           <ValueCard key={item.title} {...item} />
                        ))}
                    </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
        
        {/* Team Section */}
        <div className="py-16 sm:py-24 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 sm:text-4xl">
                        Meet Our Team
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
                        The creative minds behind Jinubify's success.
                    </p>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                           <TeamMemberCard key={member.name} {...member} />
                        ))}
                    </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
      </main>

      <CTABanner />
    </div>
  );
};

export default AboutPage;
