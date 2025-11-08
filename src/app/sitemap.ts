import { products } from "@/constants";
import type { MetadataRoute } from "next";

// Add your supported locales
const locales = ["en", "fr", "es", "de", "it", "pt", "ru"]; // Replace with your actual locales
const defaultLocale = 'en';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ckfishmar.com";
  
  // Generate URLs for all locales
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  locales.forEach(locale => {
    const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
    
    // Home page
    sitemapEntries.push({
      url: `${baseUrl}${localePrefix}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          locales.map(l => [l, `${baseUrl}${l === defaultLocale ? '' : `/${l}`}/`])
        )
      }
    });
    
    // Products page
    sitemapEntries.push({
      url: `${baseUrl}${localePrefix}/products`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: Object.fromEntries(
          locales.map(l => [l, `${baseUrl}${l === defaultLocale ? '' : `/${l}`}/products`])
        )
      }
    });
    
    // Product URLs
    const productUrls = Object.entries(products).flatMap(([category, items]) =>
      items.map((item) => ({
        url: `${baseUrl}${localePrefix}/products/${category}/${item?.id}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map(l => [l, `${baseUrl}${l === defaultLocale ? '' : `/${l}`}/products/${category}/${item?.id}`])
          )
        }
      }))
    );
    
    sitemapEntries.push(...productUrls);
  });
  
  return sitemapEntries;
}

export const dynamic = "force-static";