import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { ArticleContent, ArticleTileGrid } from '@src/components/features/article';
import { client, previewClient } from '@src/lib/client';
import { defaultLocale, locales } from '@src/i18n/config';
import { PageBlogPostOrder } from '@src/lib/__generated/sdk';
import { CommentForm } from './CommentForm';

export async function generateMetadata({
  params: { locale, slug },
}: BlogPageProps): Promise<Metadata> {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const { pageBlogPostCollection } = await gqlClient.pageBlogPost({ locale, slug, preview });
  const blogPost = pageBlogPostCollection?.items[0];

  const languages = Object.fromEntries(
    locales.map(locale => [locale, locale === defaultLocale ? `/${slug}` : `/${locale}/${slug}`]),
  );
  const metadata: Metadata = {
    alternates: {
      canonical: slug,
      languages,
    },
  };

  if (blogPost?.seoFields) {
    metadata.title = blogPost.seoFields.pageTitle;
    metadata.description = blogPost.seoFields.pageDescription;
    metadata.robots = {
      follow: !blogPost.seoFields.nofollow,
      index: !blogPost.seoFields.noindex,
    };
  }

  return metadata;
}

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<BlogPageProps['params'][]> {
  const gqlClient = client;
  const { pageBlogPostCollection } = await gqlClient.pageBlogPostCollection({ locale, limit: 100 });

  if (!pageBlogPostCollection?.items) {
    throw new Error('No blog posts found');
  }

  return pageBlogPostCollection.items
    .filter((blogPost): blogPost is NonNullable<typeof blogPost> => Boolean(blogPost?.slug))
    .map(blogPost => {
      return {
        locale,
        slug: blogPost.slug!,
      };
    });
}

interface BlogPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default async function Page({ params: { locale, slug } }: BlogPageProps) {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const { pageBlogPostCollection } = await gqlClient.pageBlogPost({ locale, slug, preview });
  const blogPost = pageBlogPostCollection?.items[0];

  if (!blogPost) {
    notFound();
  }

  const recentPostsData = await gqlClient.pageBlogPostCollection({
    limit: 5,
    locale,
    order: PageBlogPostOrder.PublishedDateDesc,
    where: { slug_not: slug },
    preview,
  });
  const recentPosts = recentPostsData.pageBlogPostCollection?.items ?? [];
  const relatedPosts = blogPost.relatedBlogPostsCollection?.items ?? [];

  const category = 'Article';
  const wordCount = 800; // approximate
  const readTime = Math.ceil(wordCount / 200);

  const categories = ['Tech Skills', 'Fintech', 'Technology', 'Professional Services', 'Business'];

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium mb-8"
          style={{ color: '#6b7280' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Blog
        </Link>

        {/* Category tag */}
        <div className="mb-4">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest"
            style={{ backgroundColor: '#fef3c7', color: '#d97706' }}
          >
            {category}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-4xl"
          style={{ color: '#111827' }}
        >
          {blogPost.title}
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-5 mb-8" style={{ color: '#9ca3af', fontSize: '0.85rem' }}>
          {blogPost.publishedDate && (
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {new Date(blogPost.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            {readTime} min read
          </span>
          {blogPost.author?.name && (
            <span className="flex items-center gap-2">
              {blogPost.author.avatar?.url && (
                <Image
                  src={blogPost.author.avatar.url}
                  alt={blogPost.author.name}
                  width={24}
                  height={24}
                  className="rounded-full object-cover"
                />
              )}
              <span style={{ color: '#374151', fontWeight: 500 }}>{blogPost.author.name}</span>
            </span>
          )}
        </div>

        {/* Featured image */}
        {blogPost.featuredImage?.url && (
          <div className="w-full rounded-2xl overflow-hidden mb-12" style={{ height: '420px' }}>
            <Image
              src={blogPost.featuredImage.url}
              alt={blogPost.featuredImage.description ?? blogPost.title ?? ''}
              width={1200}
              height={420}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        )}

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16">

          {/* Article content — left */}
          <div className="flex-1 min-w-0">
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: '#ffffff' }}
            >
              <ArticleContent article={blogPost} />
            </div>
          </div>

          {/* Sidebar — right */}
          <aside className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-6">

            {/* Search */}
            <div className="rounded-2xl p-6" style={{ backgroundColor: '#ffffff' }}>
              <h3 className="text-base font-bold mb-4" style={{ color: '#111827' }}>Search</h3>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#9ca3af' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm focus:outline-none"
                  style={{ border: '1px solid #e5e7eb', color: '#374151' }}
                />
              </div>
            </div>

            {/* Recent Posts */}
            <div className="rounded-2xl p-6" style={{ backgroundColor: '#ffffff' }}>
              <h3 className="text-base font-bold mb-4" style={{ color: '#111827' }}>Recent Posts</h3>
              <div className="flex flex-col gap-4">
                {recentPosts.map((post, i) => post && (
                  <Link key={i} href={`/${post.slug}`} className="flex items-start gap-3 group">
                    <div className="w-16 h-14 rounded-lg overflow-hidden flex-shrink-0" style={{ backgroundColor: '#e5e7eb' }}>
                      {post.featuredImage?.url && (
                        <Image
                          src={post.featuredImage.url}
                          alt={post.featuredImage.description ?? post.title ?? ''}
                          width={64}
                          height={56}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-xs font-semibold leading-snug mb-1 line-clamp-2 group-hover:underline"
                        style={{ color: '#111827' }}
                      >
                        {post.title}
                      </p>
                      {post.publishedDate && (
                        <p className="text-xs" style={{ color: '#9ca3af' }}>
                          {new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="rounded-2xl p-6" style={{ backgroundColor: '#ffffff' }}>
              <h3 className="text-base font-bold mb-4" style={{ color: '#111827' }}>Categories</h3>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href="/blog"
                    className="flex items-center justify-between text-sm py-2 border-b group"
                    style={{ borderColor: '#f3f4f6', color: '#374151' }}
                  >
                    <span className="group-hover:underline">{cat}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#9ca3af' }}>
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#9ca3af' }}>KEEP READING</p>
                <h2 className="text-2xl font-bold" style={{ color: '#111827' }}>Related Articles</h2>
              </div>
              <Link
                href="/blog"
                className="text-sm font-semibold px-5 py-2.5 rounded-full"
                style={{ border: '1px solid #111827', color: '#111827' }}
              >
                View All →
              </Link>
            </div>
            <ArticleTileGrid className="md:grid-cols-3" articles={relatedPosts} />
          </section>
        )}

        {/* Leave a Comment */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-10 items-start">

            {/* Form */}
            <div className="flex-1 rounded-2xl p-8" style={{ backgroundColor: '#ffffff' }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#9ca3af' }}>JOIN THE DISCUSSION</p>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#111827' }}>Leave a Comment</h2>
              <CommentForm />
            </div>

            {/* Decorative image / illustration */}
            <div
              className="hidden md:flex w-80 flex-shrink-0 rounded-2xl items-center justify-center"
              style={{ height: '360px', backgroundColor: '#e5e7eb' }}
            >
              {blogPost.featuredImage?.url ? (
                <Image
                  src={blogPost.featuredImage.url}
                  alt=""
                  width={320}
                  height={360}
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: '#9ca3af' }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                </svg>
              )}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
