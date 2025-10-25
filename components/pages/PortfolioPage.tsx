import React, { useState, useEffect } from 'react';
import AnimatedSection from '../AnimatedSection';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '../icons/Icons';
import CTABanner from '../CTABanner';

// --- Data for the page ---
const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A scalable online store with a custom CMS, designed for a seamless user experience and robust backend management.',
    imageUrl: 'https://picsum.photos/seed/project1/1200/800',
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile App',
    description: 'A secure and intuitive app for managing finances, featuring biometric login and real-time transaction alerts.',
    imageUrl: 'https://picsum.photos/seed/project2/1200/800',
  },
  {
    title: 'Brand Identity Design',
    category: 'Branding',
    description: 'A complete branding package for a tech startup, including logo design, color palette, and brand guidelines.',
    imageUrl: 'https://picsum.photos/seed/project3/1200/800',
  },
  {
    title: 'Social Media Campaign',
    category: 'Marketing',
    description: 'A viral marketing campaign for a consumer product that resulted in a 300% increase in engagement.',
    imageUrl: 'https://picsum.photos/seed/project4/1200/800',
  },
  {
    title: 'Cloud Migration',
    category: 'IT Solutions',
    description: 'Seamlessly moved a legacy enterprise system to a modern, scalable cloud infrastructure with zero downtime.',
    imageUrl: 'https://picsum.photos/seed/project5/1200/800',
  },
  {
    title: 'Corporate Video',
    category: 'Multimedia',
    description: 'An engaging promotional video for a global firm, showcasing their company culture and achievements.',
    imageUrl: 'https://picsum.photos/seed/project6/1200/800',
  },
];

// --- Subcomponents ---

const PageHeader: React.FC = () => (
    <div className="relative isolate overflow-hidden bg-white dark:bg-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className="mx-auto max-w-2xl">
                <p className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Our Work</p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                    A Showcase of Excellence
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                    We take pride in our work. Explore a selection of projects that demonstrate our commitment to quality, innovation, and client success.
                </p>
            </div>
        </div>
    </div>
);

const ProjectCard: React.FC<{ project: typeof projects[0]; onClick: () => void }> = ({ project, onClick }) => (
    <div 
        className="group relative block w-full aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 dark:border-slate-700/50 cursor-pointer"
        onClick={onClick}
    >
        <img loading="lazy" src={project.imageUrl} alt={`Showcase image for the ${project.title} project`} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-colors duration-300 group-hover:bg-black/70"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6">
            <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-sm font-semibold text-blue-300">{project.category}</p>
                <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
            </div>
        </div>
    </div>
);

const Lightbox: React.FC<{
  isOpen: boolean;
  project: typeof projects[0];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}> = ({ isOpen, project, onClose, onNext, onPrev }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
            onClick={onClose} 
            className="absolute -top-1 -right-1 z-20 p-2 text-white bg-slate-800/50 rounded-full hover:bg-slate-700/70 transition-colors"
            aria-label="Close lightbox"
        >
            <XMarkIcon className="w-7 h-7" />
        </button>
        
        <div className="relative w-full">
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full max-h-[75vh] object-contain rounded-lg shadow-2xl" 
            />
        </div>
        <div className="mt-4 text-center text-white max-w-3xl">
            <h3 id="lightbox-title" className="text-2xl font-bold">{project.title}</h3>
            <p className="mt-1 text-slate-300 leading-relaxed">{project.description}</p>
        </div>
      </div>

      <button 
          onClick={onPrev} 
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white bg-slate-800/50 rounded-full hover:bg-slate-700/70 transition-colors"
          aria-label="Previous project"
      >
          <ChevronLeftIcon className="w-8 h-8" />
      </button>
      <button 
          onClick={onNext} 
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white bg-slate-800/50 rounded-full hover:bg-slate-700/70 transition-colors"
          aria-label="Next project"
      >
          <ChevronRightIcon className="w-8 h-8" />
      </button>
    </div>
  );
};


// --- Main Portfolio Page Component ---

const PortfolioPage: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentProjectIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToPrevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (!isLightboxOpen) return;
        if (e.key === 'ArrowRight') {
            goToNextProject();
        } else if (e.key === 'ArrowLeft') {
            goToPrevProject();
        } else if (e.key === 'Escape') {
            closeLightbox();
        }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, currentProjectIndex]);


  return (
    <div className="animate-fade-in">
      <PageHeader />

      <div className="py-16 sm:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard 
                    key={project.title} 
                    project={project}
                    onClick={() => openLightbox(index)}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      <CTABanner />

      <Lightbox
        isOpen={isLightboxOpen}
        project={projects[currentProjectIndex]}
        onClose={closeLightbox}
        onNext={goToNextProject}
        onPrev={goToPrevProject}
      />
    </div>
  );
};

export default PortfolioPage;