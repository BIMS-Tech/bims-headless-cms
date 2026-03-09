'use client';

import { useState } from 'react';
import { ArticleTileGrid } from '@src/components/features/article';
import { PageBlogPostFieldsFragment } from '@src/lib/__generated/sdk';

const categories = ['All', 'Tech Skills', 'Fintech', 'Technology', 'Professional Services'];

interface BlogGridClientProps {
  posts: Array<PageBlogPostFieldsFragment | null>;
}

export function BlogGridClient({ posts }: BlogGridClientProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <>
      {/* Filter tabs */}
      <div
        className="flex flex-wrap items-center gap-1 mb-8 p-1 rounded-full"
        style={{ border: '1px solid #e5e7eb', display: 'inline-flex' }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
            style={
              activeCategory === cat
                ? { backgroundColor: '#111827', color: '#ffffff' }
                : { backgroundColor: 'transparent', color: '#6b7280' }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      <ArticleTileGrid articles={posts} className="md:grid-cols-3 mb-10" />

      {/* Load more */}
      <div className="flex justify-center mt-10">
        <button
          className="text-sm font-semibold px-7 py-2.5 rounded-full transition-colors"
          style={{ border: '1px solid #111827', color: '#111827', backgroundColor: 'transparent' }}
        >
          Load More Articles →
        </button>
      </div>
    </>
  );
}
