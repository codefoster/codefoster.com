import type { APIRoute } from 'astro';
import { Feed } from 'feed';
import { sortedPosts, postUrl } from '../lib/posts';

/** Atom 1.0 at the same path hexo-generator-feed published, latest 20 posts. */
export const GET: APIRoute = async ({ site }) => {
  const posts = (await sortedPosts()).slice(0, 20);

  const feed = new Feed({
    title: 'codefoster',
    id: `${site}`,
    link: `${site}`,
    language: 'en',
    copyright: `All rights reserved, Jeremy Foster`,
    updated: posts[0]?.data.date,
    feedLinks: { atom: new URL('/atom.xml', site).href },
    author: { name: 'Jeremy Foster', link: `${site}` },
  });

  for (const post of posts) {
    const url = new URL(postUrl(post), site).href;
    feed.addItem({
      title: post.data.title,
      id: url,
      link: url,
      date: post.data.date,
      description: excerpt(post.body ?? ''),
    });
  }

  return new Response(feed.atom1(), {
    headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' },
  });
};

/** First non-empty paragraph of the markdown body, roughly de-markdowned. */
function excerpt(body: string): string {
  const para = body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .find((p) => p && !p.startsWith('```') && !p.startsWith('![') && !p.startsWith('<'));
  if (!para) return '';
  return para
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`#>]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 300);
}
