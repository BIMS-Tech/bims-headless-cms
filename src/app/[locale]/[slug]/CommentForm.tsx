'use client';

import { useState } from 'react';

export function CommentForm() {
  const [form, setForm] = useState({ name: '', email: '', comment: '' });

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="flex-1 px-4 py-3 rounded-xl text-sm focus:outline-none"
          style={{ border: '1px solid #e5e7eb', color: '#374151' }}
        />
        <input
          type="email"
          placeholder="Your Mail"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="flex-1 px-4 py-3 rounded-xl text-sm focus:outline-none"
          style={{ border: '1px solid #e5e7eb', color: '#374151' }}
        />
      </div>
      <textarea
        placeholder="Write your comment..."
        rows={6}
        value={form.comment}
        onChange={(e) => setForm({ ...form, comment: e.target.value })}
        className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none resize-none"
        style={{ border: '1px solid #e5e7eb', color: '#374151' }}
      />
      <div>
        <button
          type="submit"
          className="text-sm font-semibold px-6 py-3 rounded-full"
          style={{ backgroundColor: '#111827', color: '#ffffff' }}
        >
          Submit Comment →
        </button>
      </div>
    </form>
  );
}
