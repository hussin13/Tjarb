const CACHE_NAME = 'med-lectures-v1';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './Internal_Medicine_1_Lecture_1_Interactive (3).html' 
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
