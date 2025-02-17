<template>
    <pre>
        {{ sitemap }}
    </pre>
</template>

<script setup>
const sitemap = `

<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Home Page -->
  <url>
    <loc>https://discoverkutaisi.com/</loc>
    <lastmod>2025-02-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://discoverkutaisi.com/transfers</loc>
    <lastmod>2025-02-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://discoverkutaisi.com/about</loc>
    <lastmod>2025-02-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://discoverkutaisi.com/contact</loc>
    <lastmod>2025-02-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <!-- Dynamic Tour Pages (Add more if needed) -->
  <url>
    <loc>https://discoverkutaisi.com/tours/1</loc>
    <lastmod>2025-02-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://discoverkutaisi.com/tours/2</loc>
    <lastmod>2025-02-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Places to Visit Pages -->
  <url>
    <loc>https://discoverkutaisi.com/places-to-visit-kutaisi/1</loc>
    <lastmod>2025-02-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://discoverkutaisi.com/places-to-visit-kutaisi/2</loc>
    <lastmod>2025-02-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

</urlset>

`
</script>

<style lang="scss" scoped>

</style>