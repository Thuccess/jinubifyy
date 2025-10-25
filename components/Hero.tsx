import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckIcon, StarIcon, WandIcon, PaperAirplaneIcon } from './icons/Icons';

const chartData = [
  { name: 'May', value: 200000 },
  { name: 'Jun', value: 350000 },
  { name: 'Jul', value: 280000 },
  { name: 'Aug', value: 480000 },
  { name: 'Sep', value: 400000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-lg border border-slate-200/80 dark:border-slate-700">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{label}</p>
          <p className="text-xs text-blue-600 dark:text-blue-400">
            {`Followers: ${new Intl.NumberFormat().format(payload[0].value)}`}
          </p>
        </div>
      );
    }
    return null;
};

const FollowerChart = () => (
    <div className="w-full h-24">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <YAxis hide={true} domain={['dataMin - 100000', 'dataMax + 100000']} />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgb(99 102 241)', strokeWidth: 1, strokeDasharray: '3 3' }} />
          <Area type="monotone" dataKey="value" stroke="#6366F1" fill="url(#colorUv)" strokeWidth={2} dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
);


const Hero: React.FC = () => {
  return (
    <div className="relative pt-16 pb-24 sm:pt-24 sm:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-white dark:bg-slate-900 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Floating cards */}
        <div className="absolute top-0 -left-16 lg:-left-28 hidden lg:block animate-fade-in-up">
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-3 rounded-xl shadow-lg dark:shadow-blue-900/20 border border-slate-200/80 dark:border-slate-700/50">
                <div className="flex items-center space-x-2">
                    <img loading="lazy" src="https://picsum.photos/seed/person1/32/32" alt="User avatar" className="w-8 h-8 rounded-full" />
                    <p className="text-xs text-slate-700 dark:text-slate-300">You got New followers!</p>
                    <span className="text-xs" aria-hidden="true">🎉</span>
                </div>
            </div>
            <div className="mt-4 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-2xl shadow-2xl dark:shadow-blue-900/30 border border-slate-200/80 dark:border-slate-700/50 w-64">
                <p className="text-xs text-slate-500 dark:text-slate-400">Net Follower Gain</p>
                <div className="flex items-baseline space-x-2 mt-1">
                    <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">$550,000</p>
                    <p className="text-xs font-semibold text-green-500 dark:text-green-400">+12%</p>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mt-2">
                    <span>Social Activated</span>
                    <span>$250,000</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mt-1">
                    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 h-1.5 rounded-full" style={{width: '65%'}}></div>
                </div>
                <FollowerChart />
            </div>
        </div>

        <div className="absolute top-12 -right-16 lg:-right-24 hidden lg:block animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-2xl shadow-2xl dark:shadow-blue-900/30 border border-slate-200/80 dark:border-slate-700/50 w-64">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Order #1245</p>
                        <div className="flex items-center space-x-2 mt-2">
                             <img loading="lazy" src="https://picsum.photos/seed/person2/32/32" alt="User avatar" className="w-8 h-8 rounded-full" />
                             <div>
                                 <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">delarestuale</p>
                                 <p className="text-xs text-slate-500 dark:text-slate-400">Best Active</p>
                             </div>
                        </div>
                    </div>
                     <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300 font-medium px-2 py-0.5 rounded-full">In Progress</span>
                </div>
                <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">1000/1000000</div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1 mt-1">
                    <div className="bg-blue-500 h-1 rounded-full" style={{width: '30%'}}></div>
                </div>
            </div>
             <div className="mt-4 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-2xl shadow-lg dark:shadow-blue-900/20 border border-slate-200/80 dark:border-slate-700/50 w-64">
                <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">My Clothing Brand</p>
                    <span className="text-xs" aria-hidden="true">📈</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Net Sales</p>
                <div className="flex items-baseline space-x-2">
                    <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">$500,000</p>
                    <p className="text-sm font-semibold text-green-500 dark:text-green-400">+10%</p>
                </div>
            </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center">
            <div className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 rounded-full px-3 py-1 text-sm inline-flex items-center space-x-2">
              <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400 font-semibold rounded-full px-2 py-0.5 text-xs">Major Update!</span>
              <span className="text-slate-600 dark:text-slate-300">Jinubify v1.0 is now online !</span>
            </div>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 pb-2">
            Unlock Explosive Growth with <WandIcon className="inline-block h-8 w-8 sm:h-10 sm:w-10 text-blue-500" /> Authentic Social Engagement
          </h1>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
            The ultimate toolkit for artists, influencers, and brands to build real communities and dominate social media.
          </p>
          <button className="mt-8 group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl shadow-lg hover:shadow-lg hover:shadow-blue-500/40 transition-all transform hover:scale-105">
            Get Started for Free <PaperAirplaneIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <div className="mt-8 flex items-center justify-center space-x-2">
            <div className="flex -space-x-2">
                <img loading="lazy" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900" src="https://picsum.photos/seed/avatar1/32/32" alt="Satisfied user 1"/>
                <img loading="lazy" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900" src="https://picsum.photos/seed/avatar2/32/32" alt="Satisfied user 2"/>
                <img loading="lazy" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900" src="https://picsum.photos/seed/avatar3/32/32" alt="Satisfied user 3"/>
            </div>
            <div className="flex items-center text-sm">
                <StarIcon className="w-5 h-5 text-yellow-400" />
                <span className="ml-1 font-semibold text-slate-800 dark:text-slate-200">4.8 / 5</span>
                <span className="ml-1 text-slate-500 dark:text-slate-400">Rating over 500 Reviews</span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
            <div className="relative group flex items-center justify-center"><CheckIcon className="w-4 h-4 text-blue-500 mr-2" />Starting at Just $0.001/K<span className="absolute bottom-full z-10 mb-2 w-max px-2 py-1 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Incredibly affordable pricing for all services.</span></div>
            <div className="relative group flex items-center justify-center"><CheckIcon className="w-4 h-4 text-blue-500 mr-2" />Non-drop services<span className="absolute bottom-full z-10 mb-2 w-max px-2 py-1 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Your numbers will stick. We guarantee it.</span></div>
            <div className="relative group flex items-center justify-center"><CheckIcon className="w-4 h-4 text-blue-500 mr-2" />Lifetime Refills<span className="absolute bottom-full z-10 mb-2 w-max px-2 py-1 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">If you experience a drop, we'll refill it for free.</span></div>
            <div className="relative group flex items-center justify-center"><CheckIcon className="w-4 h-4 text-blue-500 mr-2" />24/7 Support<span className="absolute bottom-full z-10 mb-2 w-max px-2 py-1 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Our support team is always here to help.</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;