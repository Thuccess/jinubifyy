
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

export type Theme = 'light' | 'dark';

// Lazy load page components
const HomePage = lazy(() => import('./components/pages/HomePage'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const ServicesPage = lazy(() => import('./components/pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./components/pages/PortfolioPage'));
const BlogPage = lazy(() => import('./components/pages/BlogPage'));
const BlogPostPage = lazy(() => import('./components/pages/BlogPostPage'));
const ContactPage = lazy(() => import('./components/pages/ContactPage'));


// A fallback component to show while lazy-loaded components are loading
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-blue-600 dark:border-blue-400"></div>
  </div>
);

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const AppContent: React.FC = () => {
  // State for managing the current theme (light/dark)
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Function to toggle the theme between light and dark
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  // Effect to apply the theme class to the document and save preference
  useEffect(() => {
    const root = window.document.documentElement;
    // Toggling the class is a cleaner way to manage the theme.
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);
  

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 overflow-x-hidden">
      <div className="relative">
        <Header 
          theme={theme} 
          toggleTheme={toggleTheme} 
        />
        <main className="pt-20">
          <Suspense fallback={<LoadingSpinner />}>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage theme={theme} />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
