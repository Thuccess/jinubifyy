
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../AnimatedSection';
import { allPosts, BlogPost } from '../data/blogData';
import { SearchIcon } from '../icons/Icons';

// --- Subcomponents ---

const PageHeader: React.FC = () => (
    <div className="relative isolate overflow-hidden bg-white dark:bg-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className="mx-auto max-w-2xl">
                <p className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Insights & Articles</p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                    From Our Blog
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                    Stay updated with the latest industry insights, company news, and expert tips from the Jinubify team.
                </p>
            </div>
        </div>
    </div>
);


const BlogPostCard: React.FC<BlogPost> = ({ slug, title, excerpt, imageUrl, date, author, category }) => (
  <Link to={`/blog/${slug}`} className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl shadow-lg shadow-slate-500/5 border border-slate-200/80 dark:border-slate-700/50 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
    <div className="overflow-hidden">
      <img loading="lazy" src={imageUrl} alt={`Featured image for blog post titled: ${title}`} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
        <span>{date}</span>
        <span className="font-medium text-blue-600 dark:text-blue-400">{category}</span>
      </div>
      <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="mt-3 text-slate-600 dark:text-slate-400 flex-grow">{excerpt}</p>
      <div className="mt-4 flex items-center">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">by {author}</p>
      </div>
    </div>
    <div className="p-6 pt-0">
         <span className="font-semibold text-blue-600 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-500 self-start">
            Read Article <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
        </span>
    </div>
  </Link>
);


// --- Main Blog Page Component ---

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(allPosts);
  const [visiblePosts, setVisiblePosts] = useState(6);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase().trim();
    if (lowercasedQuery === '') {
      setFilteredPosts(allPosts);
    } else {
      const results = allPosts.filter(post =>
        post.title.toLowerCase().includes(lowercasedQuery) ||
        post.excerpt.toLowerCase().includes(lowercasedQuery) ||
        post.category.toLowerCase().includes(lowercasedQuery) ||
        post.author.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredPosts(results);
    }
    setVisiblePosts(6); // Reset pagination on new search
  }, [searchQuery]);

  const loadMorePosts = () => {
    setVisiblePosts((prev) => Math.min(prev + 3, filteredPosts.length));
  };

  const postsToShow = filteredPosts.slice(0, visiblePosts);

  return (
    <div className="animate-fade-in">
      <PageHeader />

      <div className="py-16 sm:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-slate-400 dark:text-slate-500" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title, keyword, or category..."
                className="block w-full pl-12 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-800 transition-all text-slate-900 dark:text-slate-200"
                aria-label="Search blog posts"
              />
            </div>
          </div>

          <AnimatedSection>
            {postsToShow.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {postsToShow.map((post) => (
                  <BlogPostCard key={post.slug} {...post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">No Articles Found</h2>
                <p className="mt-2 text-slate-500 dark:text-slate-400">
                  Try adjusting your search query to find what you're looking for.
                </p>
              </div>
            )}
          </AnimatedSection>
          
          {visiblePosts < filteredPosts.length && (
            <div className="mt-16 text-center">
              <button
                onClick={loadMorePosts}
                className="text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-3 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/40 transition-all transform hover:scale-105"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
