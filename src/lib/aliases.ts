import { getCollection } from 'astro:content';
import { sortedPosts, slug } from './posts';

export interface AliasRoute {
  /** path segments without leading/trailing slashes, e.g. 'articles/im-on-a-boat' */
  path: string;
  /** absolute target path with trailing slash, e.g. '/onaboat/' */
  target: string;
}

const normalize = (alias: string) => alias.replace(/^\/+|\/+$/g, '');

/**
 * Redirect routes from `alias` frontmatter on posts and pages — the same
 * meta-refresh behavior hexo-generator-alias provided. Aliases that would
 * shadow a real URL are dropped.
 */
export async function aliasRoutes(): Promise<AliasRoute[]> {
  const posts = await sortedPosts();
  const pages = await getCollection('pages');

  const routes: AliasRoute[] = [];
  for (const post of posts) {
    for (const alias of post.data.alias) {
      routes.push({ path: normalize(alias), target: `/${slug(post)}/` });
    }
  }
  for (const page of pages) {
    for (const alias of page.data.alias) {
      routes.push({ path: normalize(alias), target: `/${page.id}/` });
    }
  }

  const taken = new Set([
    ...posts.map(slug),
    ...pages.map((p) => p.id),
    'archives',
    'categories',
    'tags',
  ]);
  return routes.filter(({ path }) => path && !taken.has(path));
}
