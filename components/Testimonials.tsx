import React from 'react';
import { StarIcon } from './icons/Icons';

const testimonials = [
  {
    name: 'Sarah L.',
    title: 'Influencer',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
    rating: 5,
    quote: "Jinubify completely changed the game for my Instagram growth. The followers are high-quality and the engagement feels so authentic. My reach has skyrocketed!",
  },
  {
    name: 'Mike R.',
    title: 'Startup Founder',
    avatar: 'https://picsum.photos/seed/mike/100/100',
    rating: 5,
    quote: "We needed a quick and reliable way to boost our brand's social proof. This service delivered exactly what we needed. The 24/7 support is a lifesaver.",
  },
  {
    name: 'CryptoPunks NFT',
    title: 'NFT Project',
    avatar: 'https://picsum.photos/seed/crypto/100/100',
    rating: 4,
    quote: "Getting the word out in the NFT space is tough. Jinubify helped us build a massive, engaged community on Twitter almost overnight. Highly recommend.",
  },
];

const Rating = ({ count }: { count: number }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} className={`w-5 h-5 ${i < count ? 'text-yellow-400' : 'text-slate-300 dark:text-slate-600'}`} />
    ))}
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 pb-2">
            Trusted by Creators and Businesses
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400">
            See what our happy customers are saying about their growth.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg shadow-slate-500/5 border border-slate-200/80 dark:border-slate-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="flex items-center space-x-4">
                <img loading="lazy" className="h-14 w-14 rounded-full" src={testimonial.avatar} alt={`Avatar of ${testimonial.name}`} />
                <div>
                  <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">{testimonial.name}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{testimonial.title}</div>
                </div>
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-300 italic">"{testimonial.quote}"</p>
              <div className="mt-4">
                <Rating count={testimonial.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;