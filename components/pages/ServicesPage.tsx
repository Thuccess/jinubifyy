import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { 
    CodeBracketIcon, 
    MegaphoneIcon, 
    CameraIcon, 
    ServerStackIcon,
    LightBulbIcon,
    PencilSquareIcon,
    RocketLaunchIcon
} from '../icons/Icons';
import CTABanner from '../CTABanner';

// --- Data for the page ---
const services = [
  {
    icon: <CodeBracketIcon className="h-8 w-8 text-blue-300" />,
    title: 'Software Development',
    description: 'Custom web and mobile applications built with modern technologies to solve your most complex business challenges.',
  },
  {
    icon: <MegaphoneIcon className="h-8 w-8 text-blue-300" />,
    title: 'Digital Marketing',
    description: 'Comprehensive marketing strategies, including SEO, SMM, and content creation, to boost your online presence.',
  },
  {
    icon: <CameraIcon className="h-8 w-8 text-blue-300" />,
    title: 'Multimedia Production',
    description: 'Professional video, graphic design, and branding services to make your story visually compelling and memorable.',
  },
  {
    icon: <ServerStackIcon className="h-8 w-8 text-blue-300" />,
    title: 'Cloud & IT Solutions',
    description: 'Reliable IT support, cloud solutions, and network infrastructure management to ensure your business runs smoothly.',
  },
];

const processSteps = [
    {
        icon: <LightBulbIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
        title: "1. Discovery & Strategy",
        description: "We start by understanding your vision, goals, and challenges to craft a tailored strategy for success."
    },
    {
        icon: <PencilSquareIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
        title: "2. Design & Development",
        description: "Our team designs and builds your solution with precision, focusing on user experience and robust performance."
    },
    {
        icon: <RocketLaunchIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
        title: "3. Launch & Growth",
        description: "We deploy the final product and provide ongoing support to ensure it continues to grow and deliver value."
    }
];

// --- Subcomponents ---

const PageHeader: React.FC = () => (
    <div className="relative isolate overflow-hidden bg-white dark:bg-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className="mx-auto max-w-2xl">
                <p className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Our Expertise</p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                    Services That Drive Results
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                    We offer a comprehensive suite of services designed to elevate your brand, streamline your operations, and create impactful digital experiences.
                </p>
            </div>
        </div>
    </div>
);

const ServiceCard: React.FC<typeof services[0]> = ({ icon, title, description }) => (
    <div className="group relative p-8 bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 transition-all duration-300">
        {/* Glow effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-500/10 dark:bg-blue-400/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>
        
        <div className="relative">
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-600 dark:to-slate-800 shadow-lg">
                {icon}
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-slate-100">{title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
        </div>
    </div>
);

const ProcessStep: React.FC<typeof processSteps[0]> = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/40 border-2 border-blue-200 dark:border-blue-800">
            {icon}
        </div>
        <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
        <p className="mt-1 text-slate-500 dark:text-slate-400">{description}</p>
    </div>
);

// --- Main Services Page Component ---

const ServicesPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader />
      
      {/* Services Grid */}
      <div className="py-16 sm:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Our Process Section */}
      <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 sm:text-4xl">Our Proven Process</h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        We follow a structured, collaborative process to ensure we deliver exceptional results on time, every time.
                    </p>
                </div>

                <div className="relative mt-16">
                    {/* Dashed line for desktop */}
                    <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-300 dark:border-slate-600"></div>

                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-8">
                        {processSteps.map((step) => (
                            <ProcessStep key={step.title} {...step} />
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </div>
      </div>

      <CTABanner />
    </div>
  );
};

export default ServicesPage;