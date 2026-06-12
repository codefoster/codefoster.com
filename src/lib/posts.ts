import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** Canonical URL slug for a post: frontmatter permalink override, else filename. */
export function slug(post: Post): string {
  return post.data.permalink ?? post.id;
}

export function postUrl(post: Post): string {
  return `/${slug(post)}/`;
}

/** All published posts, newest first. */
export async function sortedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/**
 * Hexo-compatible slug for categories and tags (hexo-util slugize with
 * filename_case: 0): non-alphanumerics become '-', runs collapse, ends trim,
 * case is preserved. 'Node.js' -> 'Node-js', 'HTML/CSS' -> 'HTML-CSS',
 * 'C#' -> 'C'. Existing /categories/... and /tags/... URLs depend on this.
 */
export function hexoSlugize(name: string): string {
  return name
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function categoryUrl(category: string): string {
  return `/categories/${hexoSlugize(category)}/`;
}

export function tagUrl(tag: string): string {
  return `/tags/${hexoSlugize(tag)}/`;
}
