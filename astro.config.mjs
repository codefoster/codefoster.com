// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://codefoster.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    // Hexo's external_link: true opened external links in a new tab
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener'] }],
    ],
    shikiConfig: {
      theme: 'css-variables',
    },
  },
});
