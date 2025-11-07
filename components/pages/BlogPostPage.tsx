import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allPosts } from '../data/blogData';
import AnimatedSection from '../AnimatedSection';
import CTABanner from '../CTABanner';
import Comments from '../Comments';
import { Theme } from '../../App';

interface BlogPostPageProps {
  theme: Theme;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ theme }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = allPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="text-center py-20 min-h-screen">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Post not found</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">Sorry, we couldn't find the article you're looking for.</p>
        <Link to="/blog" className="mt-6 inline-block text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/40 transition-all transform hover:scale-105">
            Back to Blog
        </Link>
      </div>
    );
  }

  // Add loading="lazy" to all images in the post content for better performance
  const lazyLoadedContent = post.content.replace(/<img /g, '<img loading="lazy" ');

  return (
    <div className="animate-fade-in">
        <div className="bg-white dark:bg-slate-900 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                     <div className="mb-8">
                        <Link to="/blog" className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 transition-colors">
                            &larr; Back to all articles
                        </Link>
                    </div>

                    <div className="text-center">
                        <p className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">{post.category}</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">{post.title}</h1>
                        <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>By {post.author}</span>
                            <span className="text-slate-300 dark:text-slate-600">&bull;</span>
                            <span>{post.date}</span>
                        </div>
                    </div>

                    <div className="mt-12">
                        <img src={post.imageUrl} alt={post.title} className="w-full rounded-2xl shadow-xl aspect-video object-cover" />
                    </div>

                    <article className="prose prose-lg lg:prose-xl dark:prose-invert max-w-none mt-12 text-slate-600 dark:text-slate-400 prose-headings:font-extrabold prose-headings:text-slate-800 dark:prose-headings:text-slate-100" dangerouslySetInnerHTML={{ __html: lazyLoadedContent }}></article>
                    
                     {/* Comments Section */}
                    <div className="mt-16 border-t border-slate-200 dark:border-slate-700 pt-12">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                            Join the Conversation
                        </h2>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">
                           Comments are powered by <a href="https://utteranc.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Utterances</a>, which uses GitHub issues for commenting. You will be asked to log in with GitHub to post.
                        </p>
                        <div className="mt-6">
                            <Comments theme={theme} />
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
        <CTABanner
            title="Have an idea for our next post?"
            subtitle="We're always looking for new topics to explore. Let us know what you'd like to read about!"
            primaryButtonText="Contact Us"
            primaryButtonPath="/contact"
        />
    </div>
  );
};

export default BlogPostPage;