// This is the simplest service worker to make your PWA installable

self.addEventListener('install', function(event) {
    console.log('[Service Worker] Install Event');
    self.skipWaiting(); // Forces waiting service worker to become active
  });
  
  self.addEventListener('activate', function(event) {
    console.log('[Service Worker] Activate Event');
  });
  
  self.addEventListener('fetch', function(event) {
    // Just fetch everything normally
    event.respondWith(fetch(event.request));
  });

  