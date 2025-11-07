
import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from './icons/Icons';
import { Theme } from '../App';

const Logo: React.FC = () => (
  <Link to="/" className="flex items-center space-x-2" aria-label="Jinubify Home">
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
    </div>
    <span className="font-bold text-xl text-slate-800 dark:text-slate-200">Jinubify</span>
  </Link>
);

interface HeaderProps {
    theme: Theme;
    toggleTheme: () => void;
}

const NavLink: React.FC<{
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ to, children, onClick }) => {
  return (
    <RouterNavLink 
      to={to} 
      onClick={onClick}
      className={({ isActive }) => `relative text-sm font-medium transition-colors duration-200 group ${
        isActive 
          ? 'text-blue-600 dark:text-blue-400' 
          : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
      }`}
    >
       {({ isActive }) => (
        <>
          {children}
          <span className={`absolute bottom-[-4px] left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </>
      )}
    </RouterNavLink>
  );
};

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 transition-colors duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-md border-b border-slate-200/80 dark:border-slate-800/80">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Logo />
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 transition-colors" 
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
              </button>
              <div className="md:hidden">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)} 
                  className="p-2 rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors relative z-[60]" 
                  aria-label="Toggle menu" 
                  aria-expanded={isMenuOpen} 
                  aria-controls="mobile-menu"
                >
                    <div className="w-6 h-6 flex items-center justify-center">
                        <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                        <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
                    </div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Fullscreen Overlay */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 z-50 bg-white dark:bg-slate-900 md:hidden transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center h-full text-center p-4">
            <nav className="flex flex-col space-y-8">
                 {navItems.map((item, index) => (
                    <div 
                        key={item.to}
                        className={`transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{ transitionDelay: `${150 + index * 75}ms` }}
                    >
                        <RouterNavLink
                            to={item.to}
                            onClick={closeMenu}
                            className={({ isActive }) => `text-3xl font-bold transition-colors duration-200 ${
                                isActive
                                ? 'text-blue-600 dark:text-blue-400'
                                : 'text-slate-800 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400'
                            }`}
                        >
                            {item.label}
                        </RouterNavLink>
                    </div>
                ))}
            </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
