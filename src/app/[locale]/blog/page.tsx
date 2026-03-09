import Image from 'next/image';
import Link from 'next/link';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { PageBlogPostOrder } from '@src/lib/__generated/sdk';
import { client, previewClient } from '@src/lib/client';
import { BlogGridClient } from './BlogGridClient';

interface BlogPageProps {
  params: { locale: string };
}

export default async function BlogPage({ params: { locale } }: BlogPageProps) {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const landingPageData = await gqlClient.pageLanding({ locale, preview });
  const page = landingPageData.pageLandingCollection?.items[0];

  if (!page) notFound();

  const blogPostsData = await gqlClient.pageBlogPostCollection({
    limit: 6,
    locale,
    order: PageBlogPostOrder.PublishedDateDesc,
    where: { slug_not: page?.featuredBlogPost?.slug },
    preview,
  });

  const featured = page.featuredBlogPost;
  const posts = blogPostsData.pageBlogPostCollection?.items ?? [];

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Hero ── */}
        <section className="pt-16 pb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-5" style={{ color: '#111827' }}>
            Insights for Business<br /> &amp; Technology Leaders
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto mb-10" style={{ color: '#6b7280' }}>
            Practical articles on digital transformation, software, data, and business growth.
          </p>

          {/* Thumbnail row — show real images from first 3 posts */}
          <div className="flex items-end gap-4 mb-5">
            <div className="flex-1 rounded-2xl overflow-hidden" style={{ height: '170px', backgroundColor: '#d1d5db' }}>
              {posts[0]?.featuredImage?.url && (
                <Image src={posts[0].featuredImage.url} alt={posts[0].featuredImage.description ?? ''} width={400} height={170} className="w-full h-full object-cover" />
              )}
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden" style={{ height: '220px', backgroundColor: '#d1d5db' }}>
              {featured?.featuredImage?.url && (
                <Image src={featured.featuredImage.url} alt={featured.featuredImage.description ?? ''} width={500} height={220} className="w-full h-full object-cover" />
              )}
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden" style={{ height: '170px', backgroundColor: '#d1d5db' }}>
              {posts[1]?.featuredImage?.url && (
                <Image src={posts[1].featuredImage.url} alt={posts[1].featuredImage.description ?? ''} width={400} height={170} className="w-full h-full object-cover" />
              )}
            </div>
          </div>

          {/* Search bar */}
          <div className="relative w-full">
            <svg className="absolute left-5 top-1/2 -translate-y-1/2" style={{ color: '#9ca3af' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input type="text" placeholder="Search Resources" className="w-full pl-12 pr-6 py-4 rounded-full focus:outline-none" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', color: '#374151', fontSize: '0.9rem' }} />
          </div>
        </section>

        {/* ── Featured Article ── */}
        {featured && (
          <section className="mb-20">
            <p className="text-sm font-bold mb-6" style={{ color: '#111827' }}>
              <span style={{ color: '#f59e0b' }}>⭐</span> FEATURE
            </p>

            <div className="flex flex-col md:flex-row items-start gap-10">
              {/* Image */}
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden flex-shrink-0" style={{ height: '300px', backgroundColor: '#d1d5db' }}>
                {featured.featuredImage?.url && (
                  <Image
                    src={featured.featuredImage.url}
                    alt={featured.featuredImage.description ?? featured.title ?? ''}
                    width={700}
                    height={300}
                    className="w-full h-full object-cover"
                    priority
                  />
                )}
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 pt-1 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4" style={{ color: '#111827' }}>
                  {featured.title}
                </h2>

                {featured.shortDescription && (
                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#6b7280' }}>
                    {featured.shortDescription}
                  </p>
                )}

                {featured.publishedDate && (
                  <div className="flex items-center gap-5 mb-7" style={{ color: '#9ca3af', fontSize: '0.75rem' }}>
                    <span className="flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {new Date(featured.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                )}

                <Link
                  href={`/${featured.slug}`}
                  className="self-start text-sm font-semibold px-6 py-2.5 rounded-full"
                  style={{ backgroundColor: '#111827', color: '#ffffff' }}
                >
                  Read Article →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── Blog Grid ── */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#9ca3af' }}>OUR BLOG</p>
              <h3 className="text-3xl font-bold leading-tight" style={{ color: '#111827' }}>
                View All<br />Knowledge Posts
              </h3>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#6b7280' }}>
              Our client-centric approach ensures every solution is tailored to drive your business forward.
            </p>
          </div>

          <BlogGridClient posts={posts} />
        </section>

      </div>
    </div>
  );
}
