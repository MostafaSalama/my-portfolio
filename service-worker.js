const CACHE_NAME = 'portfolio-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/contact.html',
  '/resume.html',
  '/blog.html',
  '/style/styles.css',
  '/style/about.css',
  '/style/blog.css',
  '/style/contact.css',
  '/style/resume.css',
  '/js/scripts.js',
  '/js/particles.min.js',
  '/js/contact.js',
  '/js/blog.js',
  '/manifest.json',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',

];

// Install the service worker and cache all the content
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch the resources from the cache or network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Update the service worker and clear old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
