/* Euler Academy — Network-First Offline Service Worker */
'use strict';

const CACHE_NAME = 'euler-academy-v1';

const CORE_ASSETS = [
  './',
  './index.html',
  './icon.svg',
  './manifest.webmanifest',
  './css/styles.css',
  './vendor/tailwindcss.js',
  './vendor/fonts/fonts.css',
  './vendor/katex/katex.min.css',
  './vendor/katex/katex.min.js',
  './vendor/katex/auto-render.min.js',
  './js/core.js',
  './js/canvasUtils.js',
  './js/catalog.js',
  './js/lessonView.js',
  './js/router.js',
  './data/math.js',
  './data/physics.js',
  './data/chemistry.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then((networkRes) => {
        if (networkRes && networkRes.ok) {
          const copy = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy)).catch(() => {});
        }
        return networkRes;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }))
  );
});
