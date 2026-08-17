// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://maynenkhikhainguyen.com',
  output: 'static', // 100% Static Site Generation (SSG) tối ưu cho Cloudflare Pages
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en', 'zh'],
    routing: {
      prefixDefaultLocale: false, // Tiếng Việt giữ nguyên / , chỉ en và zh mới có prefix /en, /zh
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/api/'),
      changefreq: 'daily',
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
  image: {
    domains: ['maynenkhikhainguyen.lovestoblog.com', 'maynenkhikhainguyen.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maynenkhikhainguyen.lovestoblog.com',
        pathname: '/wp/wp-content/uploads/**',
      },
    ],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
