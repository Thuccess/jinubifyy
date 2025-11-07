
import React, { useState, useEffect, useCallback } from 'react';
import { XMarkIcon } from './icons/Icons';
import { GoogleIcon, GitHubIcon } from './icons/Socials';

type AuthModalView = 'signIn' | 'signUp';

interface User {
  name: string;
  photoURL: string;
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: AuthModalView;
  onLoginSuccess: (user: User) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialView = 'signIn', onLoginSuccess }) => {
  const [view, setView] = useState<AuthModalView>(initialView);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  useEffect(() => {
    setView(initialView);
  }, [initialView]);
  
  if (!isOpen) {
    return null;
  }
  
  const handleGoogleSignIn = async () => {
    setIsSigningIn(true);
    // Simulate API call for Google Sign-In
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // On success:
    const mockUser: User = {
      name: 'Alex Doe',
      photoURL: 'https://picsum.photos/seed/alexdoe/100/100',
    };
    onLoginSuccess(mockUser);
    setIsSigningIn(false);
  };

  // FIX: Explicitly type SocialButton as React.FC to resolve type inference issues.
  const SocialButton: React.FC<{
    icon: React.ReactNode;
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
  }> = ({ icon, children, onClick, disabled }) => (
      <button 
        type="button"
        onClick={onClick}
        disabled={disabled}
        className="w-full flex items-center justify-center py-2.5 px-4 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          {icon}
          <span className="ml-3 text-sm font-medium text-slate-700 dark:text-slate-200">{children}</span>
      </button>
  );

  const LoadingSpinner = () => (
    <svg className="animate-spin h-5 w-5 text-slate-600 dark:text-slate-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

  return (
    <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
    >
      <div 
        className="relative bg-white dark:bg-slate-800 w-full max-w-md m-4 rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
            aria-label="Close authentication modal"
        >
            <XMarkIcon className="w-5 h-5"/>
        </button>

        <div className="p-8">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {view === 'signIn' ? 'Welcome Back' : 'Create an Account'}
                </h2>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {view === 'signIn' 
                        ? 'Sign in to continue to Jinubify.' 
                        : 'Join us and start your growth journey today.'
                    }
                </p>
            </div>
            
            {/* Social Logins */}
            <div className="space-y-3 mb-6">
                <SocialButton 
                    onClick={handleGoogleSignIn} 
                    disabled={isSigningIn}
                    icon={isSigningIn ? <LoadingSpinner /> : <GoogleIcon className="w-5 h-5"/>}
                >
                    {isSigningIn ? 'Signing in...' : 'Continue with Google'}
                </SocialButton>
                <SocialButton icon={<GitHubIcon className="w-5 h-5"/>} disabled={isSigningIn}>Continue with GitHub</SocialButton>
            </div>

            <div className="flex items-center my-6">
                <div className="flex-grow border-t border-slate-200 dark:border-slate-600"></div>
                <span className="flex-shrink mx-4 text-xs text-slate-400 dark:text-slate-500">OR</span>
                <div className="flex-grow border-t border-slate-200 dark:border-slate-600"></div>
            </div>

            {/* Form */}
             <fieldset disabled={isSigningIn}>
                <form className="space-y-4">
                    {view === 'signUp' && (
                         <div>
                            <label htmlFor="fullname" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                            <input type="text" name="fullname" id="fullname" required className="block w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-900 transition-colors" />
                        </div>
                    )}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                        <input type="email" name="email" id="email" required className="block w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-900 transition-colors" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
                        <input type="password" name="password" id="password" required className="block w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-900 transition-colors" />
                    </div>

                    <div className="pt-2">
                        <button type="submit" className="w-full text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/40 transition-all transform hover:scale-105">
                             {view === 'signIn' ? 'Sign In' : 'Create Account'}
                        </button>
                    </div>
                </form>
            </fieldset>
            
            {/* Toggle View */}
            <div className="mt-6 text-center">
                 <p className="text-sm text-slate-600 dark:text-slate-400">
                    {view === 'signIn' ? "Don't have an account?" : "Already have an account?"}
                    <button onClick={() => setView(view === 'signIn' ? 'signUp' : 'signIn')} disabled={isSigningIn} className="ml-1 font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 focus:outline-none focus:underline disabled:opacity-50">
                        {view === 'signIn' ? 'Sign up' : 'Sign in'}
                    </button>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;