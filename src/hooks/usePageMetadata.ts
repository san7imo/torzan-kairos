import { useEffect } from 'react';
import { siteConfig } from '../content/site';
import type { SeoPageData } from '../types/site';

function upsertMeta(selector: string, attributes: Record<string, string>, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => tag?.setAttribute(key, value));
    document.head.append(tag);
  }

  tag.content = content;
}

function upsertLink(rel: string, href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!tag) {
    tag = document.createElement('link');
    tag.rel = rel;
    document.head.append(tag);
  }

  tag.href = href;
}

export function usePageMetadata({
  description,
  image = siteConfig.defaultOgImage,
  pathname,
  title,
  type = 'website',
}: SeoPageData) {
  useEffect(() => {
    const origin = window.location.origin;
    const resolvedPath = pathname ?? window.location.pathname;
    const canonicalUrl = new URL(resolvedPath, origin).toString();
    const imageUrl = new URL(image, origin).toString();

    document.title = title;

    upsertMeta('meta[name="description"]', { name: 'description' }, description);
    upsertMeta('meta[name="robots"]', { name: 'robots' }, 'index,follow');
    upsertMeta('meta[property="og:title"]', { property: 'og:title' }, title);
    upsertMeta('meta[property="og:description"]', { property: 'og:description' }, description);
    upsertMeta('meta[property="og:type"]', { property: 'og:type' }, type);
    upsertMeta('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl);
    upsertMeta('meta[property="og:image"]', { property: 'og:image' }, imageUrl);
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, siteConfig.name);
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale' }, siteConfig.locale);
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title);
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description);
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, imageUrl);

    upsertLink('canonical', canonicalUrl);
  }, [description, image, pathname, title, type]);
}
